---
title: Object.create
tags: ts
author: iczp
date: 2024-06-20
description: 用于创建一个新对象，并将其原型设置为指定的对象。
---

## Object.create

> `Object.create` 是一个 JavaScript 方法，用于创建一个新对象，并将其原型设置为指定的对象。在 TypeScript 中，这个方法同样适用。下面是 `Object.create` 的用法、示例、常见问题和注意事项。

### 基本用法

```typescript
Object.create(proto, [propertiesObject])
```

- **`proto`**：新创建对象的原型对象。
- **`propertiesObject`**（可选）：一个对象，其属性将作为新对象的自有属性。这些属性的属性描述符格式与 `Object.defineProperties` 中的相同。

### 示例

#### 创建一个具有指定原型的新对象

```typescript
interface Person {
  name: string;
  sayHello(): void;
}

const person: Person = {
  name: "John",
  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  },
};

const me = Object.create(person);
me.name = "Alice";
me.sayHello(); // 输出: Hello, my name is Alice
```

#### 使用属性描述符创建对象

```typescript
const obj = Object.create(
  {},
  {
    prop1: {
      value: 42,
      writable: true,
      enumerable: true,
      configurable: true,
    },
    prop2: {
      value: "Hello",
      writable: false,
      enumerable: true,
      configurable: false,
    },
  }
);

console.log(obj.prop1); // 输出: 42
console.log(obj.prop2); // 输出: Hello
```

### 常见问题

#### 1. **`Object.create` 与 `new` 的区别**

`Object.create` 直接创建一个新对象并设置其原型，而 `new` 关键字则用于创建一个构造函数的实例。前者更灵活，后者适合使用构造函数模式。

#### 2. **继承多个对象**

`Object.create` 只能设置一个对象作为新对象的原型，因此不能直接实现多重继承。要实现多重继承，需要结合 `Object.assign` 或其他方法手动混合多个对象的属性。

### 注意事项

1. **浅拷贝**

`Object.create` 创建的新对象与原型对象之间是浅拷贝关系。如果原型对象的属性是引用类型，修改新对象上的该属性会影响原型对象。

```typescript
const proto = {
  nested: { a: 1 },
};

const obj = Object.create(proto);
obj.nested.a = 2;

console.log(proto.nested.a); // 输出: 2，原型对象的属性被修改
```

2. **属性描述符**

在 `propertiesObject` 中定义的属性是非继承的自有属性，可以通过属性描述符进行详细配置。注意如果属性描述符未设置 `writable`、`enumerable` 和 `configurable`，它们的默认值为 `false`。

```typescript
const obj = Object.create({}, {
  prop: {
    value: 42,
  },
});

console.log(obj.prop); // 输出: 42
obj.prop = 100; // 无效，因为 writable: false
console.log(obj.prop); // 输出: 42
```

3. **原型链**

通过 `Object.create` 创建的对象，其原型链与 `proto` 指定的对象一致。可以通过 `Object.getPrototypeOf` 方法验证。

```typescript
const proto = {
  greet() {
    console.log("Hello!");
  },
};

const obj = Object.create(proto);
console.log(Object.getPrototypeOf(obj) === proto); // 输出: true
obj.greet(); // 输出: Hello!
```

### 总结

`Object.create` 是一个强大的工具，允许你创建具有特定原型和属性的新对象。通过理解其用法和特性，可以在 TypeScript 中更灵活地进行面向对象编程。然而，要注意浅拷贝特性和属性描述符的配置，以避免潜在的问题。