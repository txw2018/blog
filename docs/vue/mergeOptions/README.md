# mergeOptions
在vue源码里面，有许多地方用到了mergeOptions方法合并options
场景一：我们在实例执行_init(options)的时候会执行下面的代码进行options合并，if是创建组件实例执行的，else是new Vue执行的
```javascript
Vue.prototype._init = function (options?: Object) {
  // merge options
  if (options && options._isComponent) {
    // optimize internal component instantiation
    // since dynamic options merging is pretty slow, and none of the
    // internal component options needs special treatment.
    initInternalComponent(vm, options)
  } else {
    vm.$options = mergeOptions(
      resolveConstructorOptions(vm.constructor),
      options || {},
      vm
    )
  }
  // ...
}
```
场景二：当我们构建组件的时候，vue内部是通过Vue.extend方法，使用了mergeOptions将Vue的options跟组件的extendOptions进行合并
```javascript
  Vue.extend = function (extendOptions: Object): Function {
    extendOptions = extendOptions || {}
    const Super = this
    const Sub = function VueComponent (options) {
      this._init(options)
    }
    Sub.prototype = Object.create(Super.prototype)
    Sub.prototype.constructor = Sub
    Sub.cid = cid++
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    )
    .....
}
```


场景三：我们使用Vue.mixin的时候其实也是执行的mergeOptions进行合并
```javascript
  Vue.mixin = function (mixin: Object) {
    this.options = mergeOptions(this.options, mixin)
    return this
  }
```

mergeOptions 源码 `src/core/util/options.js`
```javascript
export function mergeOptions (
  parent: Object,
  child: Object,
  vm?: Component
): Object {
  if (process.env.NODE_ENV !== 'production') {
    checkComponents(child)
  }

  if (typeof child === 'function') {
    child = child.options
  }
  
  //对属性进行整理统一规范
  normalizeProps(child, vm)
  normalizeInject(child, vm)
  normalizeDirectives(child)

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm)
    }
    if (child.mixins) {
      for (let i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm)
      }
    }
  }

  const options = {}
  let key
  for (key in parent) {
    mergeField(key)
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key)
    }
  }
  function mergeField (key) {
    const strat = strats[key] || defaultStrat
    options[key] = strat(parent[key], child[key], vm, key)
  }
  return options
}
```
主要就是把 parent 和 child 这两个对象根据一些合并策略，合并成一个新对象并返回。如果组件对象上存在extends跟mixins则递归调用mergeOptions 把 extends 和 mixins 合并到 parent 上，然后遍历 parent，调用 mergeField，然后再遍历 child，如果 key 不在 parent 的自身属性上，则调用 mergeField。根据不同的key会有不同的合并策略，详细可以在`src/core/util/options.js`看

比如生命周期合并策略
```javascript
function mergeHook (
  parentVal: ?Array<Function>,
  childVal: ?Function | ?Array<Function>
): ?Array<Function> {
  const res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  const res = []
  for (let i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i])
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(hook => {
  strats[hook] = mergeHook
})

export const LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured'
]
```
在mergeHook 中，使用三元运算符进行判断，如果没有childVal直接返回 parentVal，如果有childVal,再判断有没有 parentVal，如果存在就把 parentVal 跟childVal进行合并，否则再判断childVal是不是数组，不是则包装成数组，最后调用dedupeHooks去除重复项


