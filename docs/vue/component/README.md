# 组件注册

Vue组件注册有两种方式
1.全局注册
```javascript
Vue.component('my-component', {
  // 选项
})
```
2.局部注册
```javascript
import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
}
```
Vue.components方法得以在`src/core/global-api/assets.js`
```javascript

export const ASSET_TYPES = [
  'component',
  'directive',
  'filter'
]
export function initAssetRegisters (Vue: GlobalAPI) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(type => {
    Vue[type] = function (
      id: string,
      definition: Function | Object
    ): Function | Object | void {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if (process.env.NODE_ENV !== 'production' && type === 'component') {
          validateComponentName(id)
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id
          definition = this.options._base.extend(definition)
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition }
        }
        this.options[type + 's'][id] = definition
        return definition
      }
    }
  })
}
```
`validateComponentName`用来判断组件名是否合法，然后会走到`(type === 'component' && isPlainObject(definition)`判断中，然后会用`this.options._base.extend`把这个对象转换成一个继承于 Vue 的构造函数,最后通过 `this.options[type + 's'][id] = definition `把它挂载到 `Vue.options.components `上

由于每个组件都是通过Vue.extend()创建出来的，其中有一个`mergeOptions`操作,
```javascript
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    )
```
` Super.options`是指Vue.options,`extendOptions`是指当前组件option，他会吧当前组件的options跟Vue上的options进行合并，以下是component的合并操作
```javascript
function mergeAssets (
  parentVal: ?Object,
  childVal: ?Object,
  vm?: Component,
  key: string
): Object {
  const res = Object.create(parentVal || null)
  if (childVal) {
    process.env.NODE_ENV !== 'production' && assertObjectType(key, childVal, vm)
    return extend(res, childVal)
  } else {
    return res
  }
}
```
他创建了一个对象，原型是指向Vue.options.components,然后把当前组件的components合并到这个对象上,最后返回
```javascript
// 全局注册后
const baseVueOptions = {
  components: {
    HelloWorld: function VueComponent () { ... }
  }
}

// 合并后
const childOptions = {
  components: {
    __proto__: {
      HelloWorld: function VueComponent () { ... }
    }
  }
}
```

在创建`vnode`的时候，执行`_createElement`方法中,有这一段代码
```javascript
  if (typeof tag === 'string') {
    let Ctor
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag)
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if (process.env.NODE_ENV !== 'production' && isDef(data) && isDef(data.nativeOn) && data.tag !== 'component') {
        warn(
          `The .native modifier for v-on is only valid on components but it was used on <${tag}>.`,
          context
        )
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      )
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag)
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      )
    }
  } 
```
当我们遇到组件时会走到`(!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))`这个判断，当没使用`v-pre`才会走后面的判断，
Vue组件注册有两种方式
1.全局注册
```javascript
Vue.component('my-component', {
  // 选项
})
```
2.局部注册
```javascript
import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
}
```
Vue.components方法得以在`src/core/global-api/assets.js`
```javascript

export const ASSET_TYPES = [
  'component',
  'directive',
  'filter'
]
export function initAssetRegisters (Vue: GlobalAPI) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(type => {
    Vue[type] = function (
      id: string,
      definition: Function | Object
    ): Function | Object | void {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if (process.env.NODE_ENV !== 'production' && type === 'component') {
          validateComponentName(id)
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id
          definition = this.options._base.extend(definition)
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition }
        }
        this.options[type + 's'][id] = definition
        return definition
      }
    }
  })
}
```
`validateComponentName`用来判断组件名是否合法，然后会走到`(type === 'component' && isPlainObject(definition)`判断中，然后会用`this.options._base.extend`把这个对象转换成一个继承于 Vue 的构造函数,最后通过 `this.options[type + 's'][id] = definition `把它挂载到 `Vue.options.components `上

由于每个组件都是通过Vue.extend()创建出来的，其中有一个`mergeOptions`操作,
```javascript
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    )
```
` Super.options`是指Vue.options,`extendOptions`是指当前组件option，他会吧当前组件的options跟Vue上的options进行合并，以下是component的合并操作
```javascript
function mergeAssets (
  parentVal: ?Object,
  childVal: ?Object,
  vm?: Component,
  key: string
): Object {
  const res = Object.create(parentVal || null)
  if (childVal) {
    process.env.NODE_ENV !== 'production' && assertObjectType(key, childVal, vm)
    return extend(res, childVal)
  } else {
    return res
  }
}
```
他创建了一个对象，原型是指向Vue.options.components,然后把当前组件的components合并到这个对象上,最后返回
```javascript
// 全局注册后
const baseVueOptions = {
  components: {
    HelloWorld: function VueComponent () { ... }
  }
}

// 合并后
const childOptions = {
  components: {
    __proto__: {
      HelloWorld: function VueComponent () { ... }
    }
  }
}
```

在创建`vnode`的时候，执行`_createElement`方法中,有这一段代码
```javascript
  if (typeof tag === 'string') {
    let Ctor
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag)
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if (process.env.NODE_ENV !== 'production' && isDef(data) && isDef(data.nativeOn) && data.tag !== 'component') {
        warn(
          `The .native modifier for v-on is only valid on components but it was used on <${tag}>.`,
          context
        )
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      )
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag)
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      )
    }
  } 
```
当我们遇到组件时会走到`(!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))`这个判断，当没使用`v-pre`才会走后面的判断，resolveAsset方法定义在`src/core/utils/options.js`
```javascript
export function resolveAsset (
  options: Object,
  type: string,
  id: string,
  warnMissing?: boolean
): any {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  const assets = options[type]
  // check local registration variations first
  if (hasOwn(assets, id)) return assets[id]
  const camelizedId = camelize(id)
  if (hasOwn(assets, camelizedId)) return assets[camelizedId]
  const PascalCaseId = capitalize(camelizedId)
  if (hasOwn(assets, PascalCaseId)) return assets[PascalCaseId]
  // fallback to prototype chain
  const res = assets[id] || assets[camelizedId] || assets[PascalCaseId]
  if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    )
  }
  return res
}
```
先通过`options[type]`拿到当前组件的components对象，然后通过`hasOwn(assets, id)`获取，再尝试把 `id`变成驼峰的形式再拿,再尝试在驼峰的基础上把首字母再变成大写的形式再拿，如果再拿不到就去原型上拿，最后还拿不到就会报错

前面说过全局组件会合并到当前组件options的compents的原型上，所以全局组件可以在任何地方用，而局部组件时在当前组件的options.compoents里面所以只能在当前组件里面用

