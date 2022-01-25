---
sidebar: auto
---
# TypeScript
## 基础
```typescript
let age:number = 23

let name:string = 'tangxianwen'

let isTrue:boolean = true
```

### 数组
```typescript
let list:string[] = ['苹果','梨子']
//或者
let numbers:Array<number> = [1,2,3,4]
```
### any  表示任意类型
```typescript
let obj:any = {a:1}
```
### noImplicitAny   
你可以开启编译项 noImplicitAny，当被隐式推断为 any 时，TypeScipt 就会报错

### 函数
```typescript
function greet(name: string):string {
    return "Hello, " + name.toUpperCase() + "!!"
}
```

### 匿名函数
```typescript
const names = ["Alice", "Bob", "Eve"];
names.forEach((s) => {
    console.log(s.toUppercase());
});
```
### 对象类型
```typescript
function printCoord(pt:{x:number;y:number}){
    console.log('the coordinates x value is'+pt.x)
    console.log('the coordinates y value is'+pt.y)
}
printCoord({x:3,y:7})
```

### 可选属性
```typescript
function printName(obj:{first:string;last?:string}){
    if(obj.last !== undefined){
        console.log(obj.last.toUpperCase())
    }
    //或者使用可选连
    console.log(obj.last?.toUpperCase())
}
```
### 联合类型
```typescript
function printId(id:number|string){
    console.log('your id is' + id)

    if(typeof id === 'string'){
        console.log(id.toUpperCase())
    }else {
        console.log(id)
    }
}
printId(1)
printId('1')

function  welcomePeople(x:string[]|string){
    if(Array.isArray(x)){
        console.log(x.join('and'))
    }else {
        console.log(x)
    }
}
```
### 类型别名
```typescript
type Point = {
    x:number;
    y:number;
}

type ID = number | string
```

### 接口
```typescript
interface Point {
   x:number;
   y:number
}
```

类型别名与接口的不同
类型别名和接口非常相似，大部分时候，你可以任意选择使用。接口的几乎所有特性都可以在 type 中使用，两者最关键的差别在于类型别名本身无法添加新的属性，而接口是可以扩展的
### Interface
```typescript
// 通过继承扩展类型
interface Animal {
    name: string
}

interface Bear extends Animal {
    honey: boolean
}

const bear = getBear()
bear.name
bear.honey

 //Type

// 通过交集扩展类型
type Animal = {
    name: string
}

type Bear = Animal & {
    honey: boolean
}

const bear = getBear();
bear.name;
bear.honey;

```
```typescript
// Interface
// 对一个已经存在的接口添加新的字段
interface Window {
    title: string
}

interface Window {
    ts: TypeScriptAPI
}

const src = 'const a = "Hello World"';
window.ts.transpileModule(src, {});

// Type
// 创建后不能被改变
type Window = {
    title: string
}

type Window = {
    ts: TypeScriptAPI
}

// Error: Duplicate identifier 'Window'.

```
### 类型断言
```typescript
//你可以使用类型断言将其指定为一个更具体的类型：
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
//或者
const myCanvas2 = <HTMLCanvasElement>document.getElementById("main_canvas");
//双重断言 当你不能直接断言成某种类型时
function handler(event: Event) {
    const element = (event as any) as HTMLElement; // ok
}
```

### 字面量类型
```typescript
let x: "hello" = "hello";
// OK
x = "hello";
// ...
x = "howdy";
// Type '"howdy"' is not assignable to type '"hello"'.

function printText(s: string, alignment: "left" | "right" | "center") {
    // ...
}
```

### 字面量推断
```typescript
declare function handleRequest(url: string, method: "GET" | "POST"): void;

const req = { url: "https://example.com", method: "GET" };
handleRequest(req.url, req.method);

// Argument of type 'string' is not assignable to parameter of type '"GET" | "POST"'.
```
在上面这个例子里，req.method 被推断为 string ，而不是 "GET"，因为在创建 req 和 调用 handleRequest 函数之间，可能还有其他的代码，或许会将 req.method 赋值一个新字符串比如 "Guess" 。所以 TypeScript 就报错了。
1. 添加一个类型断言改变推断结果
```typescript
// Change 1:
const req = { url: "https://example.com", method: "GET" as "GET" };
// Change 2
handleRequest(req.url, req.method as "GET");
```

2.你也可以使用 as const 把整个对象转为一个类型字面量：
```typescript
const req = { url: "https://example.com", method: "GET" } as const;
handleRequest(req.url, req.method);
```
as const 效果跟 const 类似，但是对类型系统而言，它可以确保所有的属性都被赋予一个字面量类型，而不是一个更通用的类型比如 string 或者 number 。


### null和undefined
JavaScript 有两个原始类型的值，用于表示空缺或者未初始化，他们分别是 null 和 undefined 。
TypeScript 有两个对应的同名类型。它们的行为取决于是否打开了 strictNullChecks 选项。


### strictNullChecks 关闭

当 strictNullChecks 选项关闭的时候，如果一个值可能是 null 或者 undefined，它依然可以被正确的访问，或者被赋值给任意类型的属性。这有点类似于没有空值检查的语言 (比如 C# ，Java) 。这些检查的缺少，是导致 bug 的主要源头，所以我们始终推荐开发者开启 strictNullChecks 选项。


### strictNullChecks 打开

当 strictNullChecks 选项打开的时候，如果一个值可能是 null 或者 undefined，你需要在用它的方法或者属性之前，先检查这些值，就像用可选的属性之前，先检查一下 是否是 undefined ，我们也可以使用类型收窄（narrowing）检查值是否是 null：

```typescript
function doSomething(x: string | null) {
  if (x === null) {
    // do nothing
  } else {
    console.log("Hello, " + x.toUpperCase());
  }
}
```

### 非空断言操作符（后缀!）(Non-null Assertion Operator)
TypeScript 提供了一个特殊的语法，可以在不做任何检查的情况下，从类型中移除 null 和 undefined，这就是在任意表达式后面写上 !  ，这是一个有效的类型断言，表示它的值不可能是 null 或者 undefined：
```typescript
function liveDangerously(x?: number | null) {
  // No error
  console.log(x!.toFixed());
}
```

### 枚举（Enums）
枚举是 TypeScript 添加的新特性，用于描述一个值可能是多个常量中的一个。不同于大部分的 TypeScript 特性，这并不是一个类型层面的增量，而是会添加到语言和运行时。因为如此，你应该了解下这个特性。但是可以等一等再用，除非你确定要使用它。你可以在枚举类型页面了解更多的信息。
```typescript
enum Tristate {
  False,
  True,
  Unknown
}
```
其被编译成 JavaScript 后如下所示：
```typescript
var Tristate;
(function(Tristate) {
  Tristate[(Tristate['False'] = 0)] = 'False';
  Tristate[(Tristate['True'] = 1)] = 'True';
  Tristate[(Tristate['Unknown'] = 2)] = 'Unknown';
})(Tristate || (Tristate = {}));
```

### bigint

```typescript
const oneHundred:bigint = BigInt(100)

const anotherHundred:bigint = 100n
```

### symbol
这也是 JavaScript 中的一个原始类型，通过函数 Symbol()，我们可以创建一个全局唯一的引用：
```typescript
const firstName = Symbol("name");
const secondName = Symbol("name");
```


