---
title: Object.assign
tags: ts
author: iczp
date: 2024-06-20
description: 用于将一个或多个源对象的所有可枚举属性复制到目标对象中，返回目标对象。
---

# Object.assign


`Object.assign` 是一个常用的 JavaScript 方法，它可以将一个或多个源对象的所有可枚举属性复制到目标对象中，并返回目标对象。TypeScript 完全支持 `Object.assign` 方法，并且可以提供类型检查。

### 基本用法

```typescript
Object.assign(target, ...sources);
```

- **`target`**：目标对象。
- **`sources`**：一个或多个源对象。

### 示例

#### 基本示例

将一个源对象的属性复制到目标对象：

```typescript
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const result = Object.assign(target, source);
console.log(result); // 输出: { a: 1, b: 4, c: 5 }
console.log(target); // 输出: { a: 1, b: 4, c: 5 }，目标对象已被修改
```

#### 合并多个源对象

```typescript
const target = { a: 1 };
const source1 = { b: 2 };
const source2 = { c: 3 };

const result = Object.assign(target, source1, source2);
console.log(result); // 输出: { a: 1, b: 2, c: 3 }
```

#### 克隆对象

创建对象的浅拷贝：

```typescript
const obj = { a: 1, b: 2 };
const copy = Object.assign({}, obj);
console.log(copy); // 输出: { a: 1, b: 2 }
```

#### 处理嵌套对象

注意：`Object.assign` 只进行浅拷贝，不会深度合并嵌套对象。

```typescript
const target = { a: { b: 1 } };
const source = { a: { c: 2 } };

const result = Object.assign({}, target, source);
console.log(result); // 输出: { a: { c: 2 } }，浅拷贝覆盖了嵌套对象
```

### 注意事项

1. **浅拷贝**：`Object.assign` 执行的是浅拷贝，如果源对象的某个属性是对象，则只会复制对象的引用。

   ```typescript
   const target = { a: { b: 1 } };
   const source = { a: { c: 2 } };

   const result = Object.assign({}, target, source);
   console.log(result); // 输出: { a: { c: 2 } }
   ```

2. **目标对象的修改**：`Object.assign` 会改变目标对象本身，如果不想修改目标对象，可以传入一个空对象作为目标对象。

   ```typescript
   const target = { a: 1 };
   const source = { b: 2 };

   const result = Object.assign({}, target, source);
   console.log(result); // 输出: { a: 1, b: 2 }
   console.log(target); // 输出: { a: 1 }，原对象未被修改
   ```

3. **处理原型链上的属性**：`Object.assign` 只会复制源对象自身的可枚举属性，不会复制继承的属性。

   ```typescript
   const proto = { inherited: 1 };
   const obj = Object.create(proto);
   obj.own = 2;

   const copy = Object.assign({}, obj);
   console.log(copy); // 输出: { own: 2 }，不会复制 `inherited` 属性
   ```

4. **处理不可枚举属性**：`Object.assign` 不会复制不可枚举的属性。

   ```typescript
   const obj = {};
   Object.defineProperty(obj, 'hidden', {
     value: true,
     enumerable: false
   });

   const copy = Object.assign({}, obj);
   console.log(copy.hidden); // 输出: undefined，不会复制 `hidden` 属性
   ```

5. **处理 Symbol 属性**：`Object.assign` 会复制 `Symbol` 类型的属性。

   ```typescript
   const sym = Symbol('sym');
   const obj = { [sym]: 1 };

   const copy = Object.assign({}, obj);
   console.log(copy[sym]); // 输出: 1
   ```

### 总结

`Object.assign` 是一个强大的工具，用于对象的合并和克隆。了解其浅拷贝的特性以及对原型链和不可枚举属性的处理方式，可以帮助你在使用 `Object.assign` 时避免一些常见的陷阱。通过合理使用 `Object.assign`，可以在 TypeScript 中编写更简洁和高效的代码。