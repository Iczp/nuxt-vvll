---
title: includes 方法
description: Array.prototype.includes 方法用于判断数组是否包含某个指定的值，返回一个布尔值。它是 ES2016 引入的一部分，TypeScript 支持这一特性。
tags: vue ts
author: iczp
date: 2024-06-20
---

<!-- more -->

## TypeScript 中的数组 Array.prototype.includes 方法

> Array.prototype.includes 方法用于判断数组是否包含某个指定的值，返回一个布尔值。它是 ES2016 引入的一部分，TypeScript 支持这一特性。

在 TypeScript 中，`Array.prototype.includes` 方法用于判断数组是否包含某个指定的值，返回一个布尔值。它是 ES2016 引入的一部分，TypeScript 支持这一特性。

以下是 `includes` 方法的详细用法介绍：

### 基本语法

```typescript
array.includes(searchElement, fromIndex?)
```

- **`searchElement`**：需要在数组中搜索的元素。
- **`fromIndex`** (可选)：开始搜索的索引位置。如果未提供，默认从数组的第一个元素开始。

### 返回值

- 如果数组中包含指定的元素，返回 `true`，否则返回 `false`。

### 示例

#### 简单示例

```typescript
const numbers: number[] = [1, 2, 3, 4, 5];

console.log(numbers.includes(3)); // 输出: true
console.log(numbers.includes(6)); // 输出: false
```

#### 从指定索引位置开始搜索

```typescript
const fruits: string[] = ['apple', 'banana', 'mango', 'apple'];

console.log(fruits.includes('apple', 1)); // 输出: true，因为从索引 1 开始仍然可以找到 'apple'
console.log(fruits.includes('banana', 2)); // 输出: false，因为从索引 2 开始找不到 'banana'
```

#### 搜索对象

注意：`includes` 方法使用的是严格相等（`===`）比较。因此，对于对象类型的数组，`includes` 方法检查的是引用相等。

```typescript
const objectArray = [{ id: 1 }, { id: 2 }, { id: 3 }];
const obj = { id: 2 };

console.log(objectArray.includes(obj)); // 输出: false，因为 obj 是不同的对象引用
console.log(objectArray.includes(objectArray[1])); // 输出: true，因为引用相同
```

### 在 TypeScript 中的类型检查

TypeScript 会根据数组的类型自动推断 `includes` 方法的参数类型。如果传入不匹配的类型，TypeScript 编译器会报错。

```typescript
const booleanArray: boolean[] = [true, false];

console.log(booleanArray.includes(true)); // 输出: true
// console.log(booleanArray.includes(1)); // 错误: Argument of type '1' is not assignable to parameter of type 'boolean'.
```

### 使用 `includes` 方法处理联合类型数组

如果数组的类型是联合类型，`includes` 方法可以检查所有可能的类型。

```typescript
const mixedArray: (number | string)[] = [1, 'two', 3, 'four'];

console.log(mixedArray.includes(1)); // 输出: true
console.log(mixedArray.includes('four')); // 输出: true
console.log(mixedArray.includes(true)); // 错误: Argument of type 'true' is not assignable to parameter of type 'string | number'.
```

### 总结

`Array.prototype.includes` 方法在 TypeScript 中非常有用，用于检查数组是否包含某个元素，并且它支持类型检查和类型推断。通过了解其用法，可以在开发中更方便地处理数组包含关系的判断。
