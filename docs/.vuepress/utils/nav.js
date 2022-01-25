const vueSidebar = [
    {
        text:'介绍',
        children: ['/vue/introduction/']
    },

    {
        text:'响应式原理',
        collapsable: false,
        children: ['/vue/reactive/']
    },
    {
        text:'生命周期',
        collapsable: false,
        children: ['/vue/lifecycle/']
    },
    {
        text:'组件注册',
        collapsable: false,
        children: ['/vue/component/']
    },
    {
        text:'异步组件',
        collapsable: false,
        children: ['/vue/asynComponent/']
    },
    {
        text:'合并策略',
        collapsable: false,
        children: ['/vue/mergeOptions/']
    },
    {
        text:'extend',
        collapsable: false,
        children: ['/vue/extend/']
    },
    {
        text:'nextTick',
        collapsable: false,
        children: ['/vue/nexttick/']
    }
]
const browserSidebar = [
    {
        text:'xss',
        children: ['/browser/xss/']
    },
    {
        text:'csrf',
        children: ['/browser/csrf/']
    },
]
module.exports = {
    vueSidebar,
    browserSidebar
  }