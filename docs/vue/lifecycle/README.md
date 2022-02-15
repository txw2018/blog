# callHook
每当组件初始化、组件挂载、数据变化、组件摧毁的时候都会执行相应的钩子函数，就是我们平常使用的生命周期，他是通过callHook执行的
```javascript
export function callHook (vm: Component, hook: string) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget()
  const handlers = vm.$options[hook]
  const info = `${hook} hook`
  if (handlers) {
    for (let i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info)
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook)
  }
  popTarget()
}
```
从合并策略中的mergeOptions里面知道，生命周期会合并成一个数组，`vm.$options[hook]`就是拿到对应的生命周期数组，然后存在的情况下通过for循环的`invokeWithErrorHandling`的方法去执行
```javascript
export function invokeWithErrorHandling (
  handler: Function,
  context: any,
  args: null | any[],
  vm: any,
  info: string
) {
  let res
  try {
    res = args ? handler.apply(context, args) : handler.call(context)
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(e => handleError(e, vm, info + ` (Promise/async)`))
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true
    }
  } catch (e) {
    handleError(e, vm, info)
  }
  return res
}
```
`res = args ? handler.apply(context, args) : handler.call(context)`就是在执行生命周期函数

然后接下来有这样一段代码，

```javascript
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook)
  }
```
`vm._hasHookEvent`为真会执行下面的代码，这个在initEvent的方法中默认是为false的，只有在$on方法中满足某种格式就会为true
```javascript
 const hookRE = /^hook:/
  Vue.prototype.$on = function (event: string | Array<string>, fn: Function): Component {
    const vm: Component = this
    if (Array.isArray(event)) {
      for (let i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn)
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn)
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true
      }
    }
    return vm
  }
```
当`(hookRE.test(event)`满足时 vm._hasHookEvent = true，所以我们可以这样执行生命周期函数
```javascript
  created () {
    const listenResize = () => {
      console.log('window resize callback')
    }
    window.addEventListener('resize', listenResize)
    this.$on('hook:destroyed', () => {
      window.removeEventListener('resize', listenResize)
    })
  }
```
接下来讲生命周期执行的时机
## beforeCreate & created
beforeCreate和created是在组件初始化的时候执行的，在Vue.prototype._init方法里面
```javascript
export function initMixin (Vue: Class<Component>) {
  Vue.prototype._init = function (options?: Object) {

    // ...
    initLifecycle(vm)
    initEvents(vm)
    initRender(vm)
    callHook(vm, 'beforeCreate')
    initInjections(vm) // resolve injections before data/props
    initState(vm)
    initProvide(vm) // resolve provide after data/props
    callHook(vm, 'created')
    // ...
  }
}
```
在beforeCreate和created之间调用了initInjections、initState、initState，这几个方法是用来初始化inject、data、props、methods、computed、watch以及provide等这些配置，所以这些属性我们在beforeCreate访问不到，只有到了created中才能访问
## beforeMount & mounted
在组件初始化之后就会执行组件的mount，在mountComponent中执行挂载相关的钩子函数
```javascript
export function mountComponent (
  vm: Component,
  el: ?Element,
  hydrating?: boolean
): Component {
  // ...
  callHook(vm, 'beforeMount')
  let updateComponent
  if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
    // ...
  } else {
    updateComponent = () => {
      vm._update(vm._render(), hydrating)
    }
  }
  // ...
  if (vm.$vnode == null) {
    vm._isMounted = true
    callHook(vm, 'mounted')
  }
  return vm
}
```
在mountComponent执行首先调用了`mountComponent `,然后就会执行` vm._update`,去挂载组件，当组件渲染完成之后判断`vm.$vnode == null`,这个只有在new Vue的时候vm.$vnode == null才会为true，我们组件的mount不是执行的这个，当我们组件通过patch方法成DOM的时候会执行以下代码
```javascript
function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    let i = vnode.data
    if (isDef(i)) {
      const isReactivated = isDef(vnode.componentInstance) && i.keepAlive
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */)
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue)
        insert(parentElm, vnode.elm, refElm)
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm)
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert)
      vnode.data.pendingInsert = null
    }
    vnode.elm = vnode.componentInstance.$el
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue)
      setScope(vnode)
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode)
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode)
    }
  }

```
通过`initComponent `方法把vnode  push到insertedVnodeQueue数组中，因为我们组件patch的时候，遇到子组件会递归调用子组件的patch，所以`insertedVnodeQueue.push(vnode)`是先push的子组件vnode,然后再push父组件的vnode
```javascript
[childVnode,parentVnode]
```
然后会在patch的最后调用invokeInsertHook这个方法
```javascript
  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue
    } else {
      for (let i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i])
      }
    }
  }
```
最后会执行data.hook的insert方法,在`src\core\vdom\create-component.js`中
```javascript

  insert (vnode: MountedComponentVNode) {
    const { context, componentInstance } = vnode
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true
      callHook(componentInstance, 'mounted')
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance)
      } else {
        activateChildComponent(componentInstance, true /* direct */)
      }
    }
  },
```
我们看到这里执行了callHook(componentInstance, 'mounted')

## beforeUpdate & updated
 在我们执行组件挂载的时候，执行了new Watcher，在before函数中判断vm._isMounted跟 !vm._isDestroyed，说明组件已经挂载没有被摧毁，然后执行了beforeUpdate钩子函数
```javascript
export function mountComponent (
  vm: Component,
  el: ?Element,
  hydrating?: boolean
): Component {
  // ...

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before () {
       if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate')
      }
    }
  }, true /* isRenderWatcher */)
  // ...
}
```
每当我们修改数据的时候都会执行`flushSchedulerQueue`,在这个方法里面执行了`  callUpdatedHooks(updatedQueue)
`
```javascript
function callUpdatedHooks (queue) {
  let i = queue.length
  while (i--) {
    const watcher = queue[i]
    const vm = watcher.vm
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated')
    }
  }
}
```
判断了他如果是渲染watcher并且已经挂载没有被摧毁就会执行` callHook(vm, 'updated')`

## beforeDestroy & destroyed
这个两个钩子函数执行在组件的摧毁前后，组件摧毁调用的是$destroy方法
```javascript
  Vue.prototype.$destroy = function () {
    const vm: Component = this
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy')
    vm._isBeingDestroyed = true
    // remove self from parent
    const parent = vm.$parent
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm)
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown()
    }
    let i = vm._watchers.length
    while (i--) {
      vm._watchers[i].teardown()
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--
    }
    // call the last hook...
    vm._isDestroyed = true
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null)
    // fire destroyed hook
    callHook(vm, 'destroyed')
    // turn off all instance listeners.
    vm.$off()
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null
    }
  }
}
```
在方法执行的开始调用了`callHook(vm, 'beforeDestroy')`生命周期，然后执行了一系列的销毁操作，通过`vm.__patch__(vm._vnode, null)`触发子组件的摧毁操作，一层层递归调用，然后执行` callHook(vm, 'destroyed')`,所以 destroy 钩子函数执行顺序是先子后父
