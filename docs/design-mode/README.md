---
sidebar: auto
---
# 设计模式

## 单例模式
单例模式之所以这么叫，是因为它限制一个类只能有一个实例化对象。经典的实现方式是，创建一个类，这个类包含一个方法，这个方法在没有对象存在的情况下，将会创建一个新的实例对象。如果对象存在，这个方法只是返回这个对象的引用。
```javascript
class Singleton {
    static getInstance() {
        // 判断是否已经new过1个实例
        if (!Singleton.instance) {
            // 若这个唯一的实例不存在，那么先创建它
            Singleton.instance = new Singleton()
        }
        // 如果这个唯一的实例已经存在，则直接返回
        return Singleton.instance
    }
}

const s1 = SingleDog.getInstance()
const s2 = SingleDog.getInstance()

// true
s1 === s2
```
因为我们得到的是一个引用，所以  s1 === s2

es5实现
```javascript
var mySingleton = (function () {

  var instance;

  function init() {

    // 单例

    // 私有方法和变量
    function privateMethod(){
        console.log( "I am private" );
    }

    var privateVariable = "Im also private";

    return {

      // 共有方法和变量
      publicMethod: function () {
        console.log( "The public can see me!" );
      },

      publicVariable: "I am also public",


    };

  };
  return {
    // 如果存在获取此单例实例，如果不存在创建一个单例实例
    getInstance: function () {

      if ( !instance ) {
        instance = init();
      }

      return instance;
    }

  };

})();


// 使用:

var singleA = mySingleton.getInstance();
var singleB = mySingleton.getInstance();
console.log( singleA === singleB ); // true


```
#####  参考资料
https://www.w3cschool.cn/zobyhd/tqlv9ozt.html
https://juejin.im/book/5c70fc83518825428d7f9dfb/section/5c83d5b3e51d453a8a24d3a1



## 策略模式
定义：指对象有某个行为，但是在不同的场景中，该行为有不同的实现算法

```javascript
const activityObj = {
  special(price){
     return price * 0.6
  },
  secondsKill(price){
    return  price * 0.5
  },
  activity(price){
    return  price * 0.9
  }
}

const askPrice =function(type,money) {
  return activityObj[type](money);
};

console.log(askPrice('special',10000)); // 6000
```

## 职责链模式

**定义：** 为解除请求的发送者和接收者之间耦合，而使多个对象都有机会处理这个请求。将这些对象连成一条链，并沿着这条链传递该请求，直到有一个对象处理它

下面模拟购物车提交订单流程

```javascript
const UI = {
  Alert(options) {
    const msg = options.msg || '您确定吗'
    return new Promise((resolve, reject) => {
      var r = confirm(msg)
      if (r) {
        resolve(true)
      } else {
        reject(false)
      }
    })
  }
}

const validateHandler = {
  validateAddress() {
    if (true) {
      UI.Alert({
        msg: "您确定地址正确吗"
      })
      .then(() => {
        console.log(1111)
        this.next()
      })
      .catch(err => {
      })
    }
    return false
  },
  validateMoney() {
    if (true) {
      UI.Alert({
        msg: "您确定继续支付吗"
      })
      .then(() => {
        console.log(2222)
        this.next()
      })
      .catch(err => {
      })

    }
    return false
  },
  validateCoupon() {
    if (true) {
      console.log(3333)
      return true
    }
    return false
  }
}
class Chain {
  constructor(fn) {
    this.fn = fn
    this.sucessor = null
  }
  setNext(fnc) {
    this.sucessor = fnc
    return fnc
  }
  next() {
    this.sucessor.run.apply(this.sucessor, arguments)
  }
  run() {
    const result = this.fn.apply(this, arguments)
    if (result) {
      this.next()
    }
  }
}
const validateObj = {}

const validateArr = Object.keys(validateHandler)


for (const fnc of validateArr) { // 循环执行验证方法
  validateObj[fnc + 'Chain'] = new Chain(validateHandler[fnc])
}

const {
  validateAddressChain,
  validateMoneyChain,
  validateCouponChain
} = validateObj


validateAddressChain
  .setNext(validateMoneyChain)
  .setNext(validateCouponChain)

validateAddressChain.run()
```

## 观察者模式

`观察者模式定义了一种一对多的依赖关系，让多个观察者对象同时监听某一个目标对象，当这个目标对象的状态发生变化时，会通知所有观察者对象，使它们能够自动更新。 —— Graphic Design Patterns`

在我们平时开发过程中，开发一个需求，产品经理把相关开发人员来到一个群，然后把相关需求通知到大家，然后相关人员接收到信息，进行开发，这就是类似一个观察者模式
```javascript
// 定义发布者类
class Publisher {
  constructor() {
    this.observers = []
    console.log('Publisher created')
  }
  // 增加订阅者
  add(observer) {
    console.log('Publisher.add invoked')
    this.observers.push(observer)
  }
  // 移除订阅者
  remove(observer) {
    console.log('Publisher.remove invoked')
    this.observers.forEach((item, i) => {
      if (item === observer) {
        this.observers.splice(i, 1)
      }
    })
  }
  // 通知所有订阅者
  notify() {
    console.log('Publisher.notify invoked')
    this.observers.forEach((observer) => {
      observer.update(this)
    })
  }
}
```

```javascript
// 定义订阅者类
class Observer {
    constructor() {
        console.log('Observer created')
    }

    update() {
        console.log('Observer.update invoked')
    }
}
```
```javascript
const 产品经理 = new Publisher ()

const 前端 = new Observer ()

const 后端 = new Observer ()

const UI = new  Observer ()

产品经理.add(前端)
产品经理.add(后端)
产品经理.add(UI)
产品经理.notify()
```

## 发布订阅模式

Event Bus就是一个发布订阅模式
```javascript
class EventEmitter {
  constructor() {
    // handlers是一个map，用于存储事件与回调之间的对应关系
    this.handlers = {}
  }

  // on方法用于安装事件监听器，它接受目标事件名和回调函数作为参数
  on(eventName, cb) {
    // 先检查一下目标事件名有没有对应的监听函数队列
    if (!this.handlers[eventName]) {
      // 如果没有，那么首先初始化一个监听函数队列
      this.handlers[eventName] = []
    }

    // 把回调函数推入目标事件的监听函数队列里去
    this.handlers[eventName].push(cb)
  }

  // emit方法用于触发目标事件，它接受事件名和监听函数入参作为参数
  emit(eventName, ...args) {
    // 检查目标事件是否有监听函数队列
    if (this.handlers[eventName]) {
      // 这里需要对 this.handlers[eventName] 做一次浅拷贝，主要目的是为了避免通过 once 安装的监听器在移除的过程中出现顺序问题
      const handlers = this.handlers[eventName].slice()
      // 如果有，则逐个调用队列里的回调函数
      handlers.forEach((callback) => {
        callback(...args)
      })
    }
  }

  // 移除某个事件回调队列里的指定回调函数
  off(eventName, cb) {
    const callbacks = this.handlers[eventName]
    const index = callbacks.indexOf(cb)
    if (index !== -1) {
      callbacks.splice(index, 1)
    }
  }

  // 为事件注册单次监听器
  once(eventName, cb) {
    // 对回调函数进行包装，使其执行完毕自动被移除
    const wrapper = (...args) => {
      cb(...args)
      this.off(eventName, wrapper)
    }
    this.on(eventName, wrapper)
  }
}
```