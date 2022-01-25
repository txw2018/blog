---
sidebar: auto
---
# Type-Challenges
学习下面大佬的文章

https://github.com/type-challenges/type-challenges
https://wangtunan.github.io/blog/typescript/challenge.html#%E4%BB%8B%E7%BB%8D

## 简单

### Pick
Pick表示从一个类型中选取指定的几个字段组合成一个新的类型，用法如下：

```typescript
type Person = {
  name: string;
  age: number;
  address: string;
  sex: number;
}
type PickResult = MyPick<Person, 'name' | 'address'>
// expected: { name: string; address: string; }
```
###### 实现方式
<details>
<summary>展开</summary>
 
```typescript

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}
```
</details>

### Readonly
该 Readonly 会接收一个 泛型参数，并返回一个完全一样的类型，只是所有属性都会被 readonly 所修饰

```typescript
interface Todo {
  title: string
  description: string
}

type ReadonlyResult = MyReadonly<Person>
// expected { readonly title: string; readonly description: string; }
```
###### 实现方式
<details>
<summary>展开</summary>
 
```typescript
type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}
```
</details>

### Tuple to Object
传入一个元组类型，将这个元组类型转换为对象类型，这个对象类型的键/值都是从元组中遍历出来。

```typescript
const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type result = TupleToObject<typeof tuple> 
// expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
```
###### 实现方式
<details>
<summary>展开</summary>
 
```typescript
type TupleToObject<T extends readonly any[]> = {
  [P in T[number]]: P
}
```
</details>

### First of Array
实现一个通用` First<T> `，它接受一个数组T并返回它的第一个元素的类型。

```typescript
type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type head1 = First<arr1> // expected to be 'a'
type head2 = First<arr2> // expected to be 3
```
###### 实现方式
<details>
<summary>展开</summary>
 
```typescript
type First<T extends any[]> = T extends [] ? never : T[0]
```
</details>

### Length of Tuple
创建一个通用的Length，接受一个readonly的数组，返回这个数组的长度。
```typescript
type tesla = ['tesla', 'model 3', 'model X', 'model Y']
type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

type teslaLength = Length<tesla> // expected 4
type spaceXLength = Length<spaceX> // expected 5
```
###### 实现方式
<details>
<summary>展开</summary>
 
```typescript
type Length<T extends any[]> = T['length']
```
</details>

### Exclude
实现内置的`Exclude <T，U>`类型(从联合类型T中排除U的类型成员，来构造一个新的类型。)
```typescript
type ExcludeResult = Exclude<'js'|'ts'|'java', 'js'|'jave'>
// expected 'ts
```
###### 实现方式
<details>
<summary>展开</summary>
 
```typescript
type Exclude<T,U> =  T extends U ? never : T
```
</details>

### Awaited
假如我们有一个 Promise 对象，这个 Promise 对象会返回一个类型。在 TS 中，我们用 Promise 中的 T 来描述这个 Promise 返回的类型。请你实现一个类型，可以获取这个类型。
比如：`Promise<ExampleType>`，请你返回 ExampleType 类型。
###### 实现方式
<details>
<summary>展开</summary>
 
```typescript
type MyAwaited<T extends Promise<any>> = T extends Promise<infer R> 
  ? (R extends Promise<any> ? MyAwaited<R> : R )
  : T; 
```
</details>

### If 
实现一个 `IF` 类型，它接收一个条件类型 `C` ，一个判断为真时的返回类型` T `，以及一个判断为假时的返回类型 `F`。 `C` 只能是 `true` 或者 `false`, `T` 和 `F` 可以是任意类型。
```typescript
type A = If<true, 'a', 'b'>  // expected to be 'a'
type B = If<false, 'a', 'b'> // expected to be 'b'
```
###### 实现方式
<details>
<summary>展开</summary>
 
```typescript
type IF<T extends boolean,U,K> => T extends true ? U : K
```
</details>

### Concat
在类型系统里实现 JavaScript 内置的 Array.concat 方法，这个类型接受两个参数，返回的新数组类型应该按照输入参数从左到右的顺序合并为一个新的数组。
```typescript
type Result = Concat<[1], [2]> // expected to be [1, 2]
```

###### 实现方式
<details>
<summary>展开</summary>
 
```typescript
type Concat<T extends any[],U extends any[]> = [...T,...U]
```
</details>

### Includes
```typescript
type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> 
// expected to be `false`
```
###### 实现方式
<details>
<summary>展开</summary>
 
```typescript
type Includes<T extends readonly any[],U> = U extends T[number] ? true :false
```
</details>

### Push
在类型系统里实现通用的 `Array.push` 。

```typescript
type Result = Push<[1, 2], '3'> // [1, 2, '3']
```
###### 实现方式
<details>
<summary>展开</summary>
 
```typescript
type Push<T extends any[],U> = [...T,U]
```
</details>

### Unshift
实现类型版本的 `Array.unshift`。

```typescript
type Result = Unshift<[1, 2], 0> // [0, 1, 2,]
```
###### 实现方式
<details>
<summary>展开</summary>
 
```typescript
type Push<T extends any[],U> = [U,...T]
```
</details>

### Parameters 
实现内置的 Parameters 类型(函数类型type的形参中使用的类型构造元组类型)
```typescript
type T0 = Parameters<() => string>;
//expected []

type T1 = Parameters<(s: string) => void>;
//expected [s: string]

type T2 = Parameters<<T>(arg: T) => T>;
//expected [arg: unknown]
```
###### 实现方式
<details>
<summary>展开</summary>
 
```typescript
type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer R) => any ? R : [];
```
</details>
