---
sidebar: auto
---

# 常见手写题

## Array2Tree

```javascript
const data = [
  { pid: 1, id: 2, name: "一级" },
  { pid: 2, id: 3, name: "二级" },
  { pid: 3, id: 4, name: "三级" },
  { pid: 4, id: 5, name: "四级" },
  { pid: 4, id: 6, name: "五级" },
  { pid: 4, id: 7, name: "六级" },
];
```

::: details 实现

@[code](./code/array2tree.js)

:::

## Tree2Array

```javascript
const tree = [
  {
    id: 1,
    text: "节点1",
    parentId: 0,
    children: [
      {
        id: 2,
        text: "节点1_1",
        parentId: 1,
      },
    ],
  },
];
```

::: details 实现

@[code](./code/tree2array.js)

:::

## LazyMan

> 题目描述

```javascript
实现一个LazyMan，可以按照以下方式调用:
LazyMan(“Hank”)输出:
Hi! This is Hank!

LazyMan(“Hank”).sleep(10).eat(“dinner”)输出
Hi! This is Hank!
//等待10秒..
Wake up after 10
Eat dinner~

LazyMan(“Hank”).eat(“dinner”).eat(“supper”)输出
Hi This is Hank!
Eat dinner~
Eat supper~

LazyMan(“Hank”).eat(“supper”).sleepFirst(5)输出
//等待5秒
Wake up after 5
Hi This is Hank!
Eat supper

```

::: details 实现

@[code](./code/lazyman.js)

:::

## LRU 算法

::: details 实现

@[code](./code/lru.js)

:::

## 实现对象 flatten

```javascript
const obj = {
  a: {
    b: 1,
    c: 2,
    d: { e: 5 },
  },

  b: [1, 3, { a: 2, b: 3 }],
  c: 3,
};

实现flatten(obj) 结果返回如下

{
'a.b': 1,
'a.c': 2,
'a.d.e': 5,
'b[0]': 1,
'b[1]': 3,
'b[2].a': 2,
'b[2].b': 3
c: 3
}
```

::: details 实现

@[code](./code/flatten.js)

:::

## 大数相加

> 实现一个 add 方法完成两个大数相加

```
let a = "9007199254740991";
let b = "1234567899999999999";

function bigAdd(a ,b){
   //...
}
```

::: details 实现

@[code](./code/big-add.js)
:::

## 写版本号排序的方法

> 题目描述:有一组版本号如下['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5']。现在需要对其进行排序，排序的结果为 ['4.3.5','4.3.4.5','2.3.3','0.302.1','0.1.1']

::: details 实现

```javascript
@[code](./code/sort-version.js)
```

:::

## 实现 compose

```javascript
// 用法如下:
function fn1(x) {
  return x + 1;
}
function fn2(x) {
  return x + 2;
}
function fn3(x) {
  return x + 3;
}
function fn4(x) {
  return x + 4;
}
const a = compose(fn1, fn2, fn3, fn4);
console.log(a(1)); // 1+4+3+2+1=11
```

::: details 实现

@[code](./code/compose.js)

:::

## 串行执行 task

```javascript
function task1(next) {
  setTimeout(() => {
    console.log(1);
    next();
  }, 1000);
}

function task2(next) {
  console.log(2);
  next();
}

function task3(next) {
  setTimeout(() => {
    console.log(3);
    next();
  }, 200);
}
```

实现 runTasks([task1,task2,task3])

::: details 实现

@[code](./code/run-tasks.js)
:::

## 实现 createFlow

```javascript
const log = console.log;
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const subFlow = createFlow([() => delay(1000).then(() => log("c"))]);
createFlow([
  () => log("a"),
  () => log("b"),
  subFlow,
  [() => delay(1000).then(() => log("d")), () => log("e")],
]).run(() => {
  console.log("done");
});
```

需要按照 a,b,延迟 1 秒,c,延迟 1 秒,d,e, done 的顺序打印

::: details 实现

@[code](./code/create-flow.js)

:::

## 实现有并行限制的 Promise 调度器

> 题目描述:JS 实现一个带并发限制的异步调度器 Scheduler，保证同时运行的任务最多有两个

```javascript
 addTask(1000,"1");
 addTask(500,"2");
 addTask(300,"3");
 addTask(400,"4");
 的输出顺序是：2 3 1 4

 整个的完整执行流程：

一开始1、2两个任务开始执行
500ms时，2任务执行完毕，输出2，任务3开始执行
800ms时，3任务执行完毕，输出3，任务4开始执行
1000ms时，1任务执行完毕，输出1，此时只剩下4任务在执行
1200ms时，4任务执行完毕，输出4
```

::: details 实现

@[code](./code/scheduler.js)

:::

## Promise 实现红绿灯

> 题目：使用 Promise 实现红灯每隔 3s 亮一次，黄灯每隔 2s 亮一次，绿灯每隔 1s 亮一次，循环这个过程。

```javascript
function red() {
  console.log("red");
}
function green() {
  console.log("green");
}
function yellow() {
  console.log("yellow");
}
```

::: details 实现

@[code](./code/promise-traffic-light.js)

:::
