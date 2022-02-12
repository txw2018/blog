# computed实现原理
在初始化的时候会执行initComputed方法
```javascript
function initComputed (vm: Component, computed: Object) {
  // $flow-disable-line
  const watchers = vm._computedWatchers = Object.create(null)
  // computed properties are just getters during SSR
  const isSSR = isServerRendering()

  for (const key in computed) {
    const userDef = computed[key]
    const getter = typeof userDef === 'function' ? userDef : userDef.get
    if (process.env.NODE_ENV !== 'production' && getter == null) {
      warn(
        `Getter is missing for computed property "${key}".`,
        vm
      )
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      )
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef)
    } else if (process.env.NODE_ENV !== 'production') {
      if (key in vm.$data) {
        warn(`The computed property "${key}" is already defined in data.`, vm)
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(`The computed property "${key}" is already defined as a prop.`, vm)
      } else if (vm.$options.methods && key in vm.$options.methods) {
        warn(`The computed property "${key}" is already defined as a method.`, vm)
      }
    }
  }
}
```
首先给watchers 创建了一个空对象，然后通过循环拿到getter函数，为每个getter创建watcher，这个watcher跟组件的渲染watcher不一样，他传了一个computedWatcherOptions对象 { lazy: true }，标识他是一个computer watcher，最后调用defineComputed(vm, key, userDef)方法
```javascript

export function defineComputed (
  target: any,
  key: string,
  userDef: Object | Function
) {
  const shouldCache = !isServerRendering()
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef)
    sharedPropertyDefinition.set = noop
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop
    sharedPropertyDefinition.set = userDef.set || noop
  }
  if (process.env.NODE_ENV !== 'production' &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        `Computed property "${key}" was assigned to but it has no setter.`,
        this
      )
    }
  }
  Object.defineProperty(target, key, sharedPropertyDefinition)
}

```
defineComputed方法主要通过 Object.defineProperty给对应的key添加get、set方法，get定义是通过createComputedGetter方法
```javascript
function createComputedGetter (key) {
  return function computedGetter () {
    const watcher = this._computedWatchers && this._computedWatchers[key]
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate()
      }
      if (Dep.target) {
        watcher.depend()
      }
      return watcher.value
    }
  }
}
```
当我们访问计算属性的时候其实就是执行这个方法，
下面通过一个例子讲下computed是怎么缓存的

```javascript
<template>
  <div id="app">
   <div>
     {{count}}
   </div>
   <p>{{lastName}}</p>
    <button @click="change">change</button>
    <button @click="changeLast">changeLast</button>
  </div>
</template>

<script>
export default {
  name: 'App',

  data(){
    return {
      lastName:'tang',
      useless:0
    }
  },
  computed:{
    count(){ 
      return this.useless
    }
  },
  methods:{
    change(){
      this.useless ++ 
    },
    changeLast(){
      this.lastName = 'Zhang'
    }
  }
}
</script>
```
当组件渲染的时候，碰到{{count}}会执行count的计算属性方法
```javascript
    const watcher = this._computedWatchers && this._computedWatchers[key]
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate()
      }
      if (Dep.target) {
        watcher.depend()
      }
      return watcher.value
    }
```
也就是这段代码，之前初始化的时候，watcher.dirty的值是设置为true的，然后就会执行watcher.evaluate()方法，
```javascript
  evaluate () {
    this.value = this.get()
    this.dirty = false
  }
```
这个方法就是执行get方法，然后把dirty 改成false
```javascript
  get () {
    pushTarget(this)
    let value
    const vm = this.vm
    try {
      value = this.getter.call(vm, vm)
    } catch (e) {
      if (this.user) {
        handleError(e, vm, `getter for watcher "${this.expression}"`)
      } else {
        throw e
      }
    } finally {
      // "touch" every property so they are all tracked as
      // dependencies for deep watching
      if (this.deep) {
        traverse(value)
      }
      popTarget()
      this.cleanupDeps()
    }
    return value
  }
```
get方法会执行  pushTarget(this)，在这之前是进行组件渲染，所以Dep.target是渲染watcher，执行  pushTarget(this)之后  Dep.target会变成computer watcher，当执行 this.getter.call(vm, vm)会访问到 this.useless属性，然后就会执行useless的get方法
``` javascript
get: function reactiveGetter () {
      const value = getter ? getter.call(obj) : val
      if (Dep.target) {
        dep.depend()
        if (childOb) {
          childOb.dep.depend()
          if (Array.isArray(value)) {
            dependArray(value)
          }
        }
      }
      return value
    },
```
这个时候useless会把computer watcher收集为依赖，当count的getter方法执行之后，会执行popTarget()方法，让Dep.target又变成渲染watcher，然后会判断Dep.target然后执行  watcher.depend()，这个方法useless会把渲染watcher也收集成依赖
这个时候useless的dep.subs为[computer watcher，渲染 watcher]


当我们通过change方法去修改useless的时候，会执行dep.notify方法
```javascript
 notify () {
    // stabilize the subscriber list first
    const subs = this.subs.slice()
    if (process.env.NODE_ENV !== 'production' && !config.async) {
      // subs aren't sorted in scheduler if not running async
      // we need to sort them now to make sure they fire in correct
      // order
      subs.sort((a, b) => a.id - b.id)
    }
    for (let i = 0, l = subs.length; i < l; i++) {
      subs[i].update()
    }
  }
```
他就会把useless 的dep.subs循环执行一次，也就是把[computer watcher，渲染 watcher]的update方法执行一次
```javascript
  update () {
    /* istanbul ignore else */
    if (this.lazy) {
      this.dirty = true
    } else if (this.sync) {
      this.run()
    } else {
      queueWatcher(this)
    }
  }
```
当执行第一个computer watcher方法的时候,lazy是为true然后把dirty改为true
执行第二个渲染 watcher的时候就会执行queueWatcher方法，就是去重新渲染视图，重新渲染视图的时候，肯定又会访问到{{count}},然后又会去执行count的getter方法
```javascript
  const watcher = this._computedWatchers && this._computedWatchers[key]
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate()
      }
      if (Dep.target) {
        watcher.depend()
      }
      return watcher.value
    }
```
这个时候watcher.dirty是为true了，所以就会重新求值，获取新的值，然后渲染的时候就是新值了，计算属性的流程就结束了

# 那什么时候计算属性会生效

我们知道当第一次访问计算属性的之后dirty会改成false，只有当我们计算属性依赖的响应式值发生变化的时候执行computer watcher的update方法之后把dirty改成true，（上面例子的useless更新值），在watcher.evaluate()才会重新求值，如果我们修改的不是计算属性依赖的响应式值，比如执行上面例子的changeLast方法，dirty就一直是false，就不会重新求值，起到了缓存的作用
