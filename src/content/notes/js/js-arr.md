---
title: js 数组的交集、差集、并集和补集
tags: js,ts
author: iczp
date: 2024-07-05
description: js 数组方法来计算两个数组的交集、差集、并集和补集
---

## 使用 Set

在 JavaScript 中，你可以使用 `Set` 和数组方法来计算两个数组的交集、差集、并集和补集。以下是具体的实现代码：

```javascript
function arrayIntersection(arr1, arr2) {
  return arr1.filter((value) => arr2.includes(value));
}

function arrayDifference(arr1, arr2) {
  return arr1.filter((value) => !arr2.includes(value));
}

function arrayUnion(arr1, arr2) {
  return Array.from(new Set([...arr1, ...arr2]));
}

function arrayComplement(arr1, arr2) {
  const union = arrayUnion(arr1, arr2);
  const intersection = arrayIntersection(arr1, arr2);
  return union.filter((value) => !intersection.includes(value));
}

// 示例用法
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];

console.log('交集:', arrayIntersection(arr1, arr2)); // [3, 4]
console.log('差集 (arr1 - arr2):', arrayDifference(arr1, arr2)); // [1, 2]
console.log('差集 (arr2 - arr1):', arrayDifference(arr2, arr1)); // [5, 6]
console.log('并集:', arrayUnion(arr1, arr2)); // [1, 2, 3, 4, 5, 6]
console.log('补集:', arrayComplement(arr1, arr2)); // [1, 2, 5, 6]
```

### 解释

1. **交集 (`arrayIntersection`)**：返回在两个数组中都存在的元素。
2. **差集 (`arrayDifference`)**：返回在第一个数组中存在但在第二个数组中不存在的元素。
3. **并集 (`arrayUnion`)**：返回两个数组中所有元素的集合，去除重复元素。
4. **补集 (`arrayComplement`)**：返回在两个数组中不同时存在的元素，即并集减去交集。

## 使用 ES6 语法

使用 ES6 语法来计算两个数组的交集、差集、并集和补集可以更加简洁。以下是基于 ES6 的实现：

```javascript
const arrayIntersection = (arr1, arr2) =>
  arr1.filter((value) => arr2.includes(value));

const arrayDifference = (arr1, arr2) =>
  arr1.filter((value) => !arr2.includes(value));

const arrayUnion = (arr1, arr2) => [...new Set([...arr1, ...arr2])];

const arrayComplement = (arr1, arr2) => {
  const union = arrayUnion(arr1, arr2);
  const intersection = arrayIntersection(arr1, arr2);
  return union.filter((value) => !intersection.includes(value));
};

// 示例用法
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];

console.log('交集:', arrayIntersection(arr1, arr2)); // [3, 4]
console.log('差集 (arr1 - arr2):', arrayDifference(arr1, arr2)); // [1, 2]
console.log('差集 (arr2 - arr1):', arrayDifference(arr2, arr1)); // [5, 6]
console.log('并集:', arrayUnion(arr1, arr2)); // [1, 2, 3, 4, 5, 6]
console.log('补集:', arrayComplement(arr1, arr2)); // [1, 2, 5, 6]
```

### 解释

1. **交集 (`arrayIntersection`)**：使用 `filter` 和 `includes` 方法，返回在两个数组中都存在的元素。
2. **差集 (`arrayDifference`)**：使用 `filter` 和 `includes` 方法，返回在第一个数组中存在但在第二个数组中不存在的元素。
3. **并集 (`arrayUnion`)**：使用展开运算符 `...` 和 `Set`，合并两个数组并去重。
4. **补集 (`arrayComplement`)**：先计算并集，再计算交集，最后过滤掉交集中的元素来得到补集。

## 使用 TypeScript

使用 TypeScript 计算两个数组的交集、差集、并集和补集，可以确保类型安全。以下是基于 TypeScript 的实现：

```typescript
function arrayIntersection<T>(arr1: T[], arr2: T[]): T[] {
  return arr1.filter((value) => arr2.includes(value));
}

function arrayDifference<T>(arr1: T[], arr2: T[]): T[] {
  return arr1.filter((value) => !arr2.includes(value));
}

function arrayUnion<T>(arr1: T[], arr2: T[]): T[] {
  return Array.from(new Set([...arr1, ...arr2]));
}

function arrayComplement<T>(arr1: T[], arr2: T[]): T[] {
  const union = arrayUnion(arr1, arr2);
  const intersection = arrayIntersection(arr1, arr2);
  return union.filter((value) => !intersection.includes(value));
}

// 示例用法
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];

console.log('交集:', arrayIntersection(arr1, arr2)); // [3, 4]
console.log('差集 (arr1 - arr2):', arrayDifference(arr1, arr2)); // [1, 2]
console.log('差集 (arr2 - arr1):', arrayDifference(arr2, arr1)); // [5, 6]
console.log('并集:', arrayUnion(arr1, arr2)); // [1, 2, 3, 4, 5, 6]
console.log('补集:', arrayComplement(arr1, arr2)); // [1, 2, 5, 6]
```

### 解释

1. **交集 (`arrayIntersection`)**：使用 `filter` 和 `includes` 方法，返回在两个数组中都存在的元素。
2. **差集 (`arrayDifference`)**：使用 `filter` 和 `includes` 方法，返回在第一个数组中存在但在第二个数组中不存在的元素。
3. **并集 (`arrayUnion`)**：使用展开运算符 `...` 和 `Set`，合并两个数组并去重。
4. **补集 (`arrayComplement`)**：先计算并集，再计算交集，最后过滤掉交集中的元素来得到补集。

### 类型参数 `T`

在上述函数中使用了泛型 `T`，使得这些函数可以适用于任意类型的数组，而不仅仅是数字数组。这样可以确保这些函数能够处理各种数据类型，例如字符串、对象等。
