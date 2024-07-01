---
title: Typescript 中  interface 与 Type 有什么区别
description: 在 TypeScript 中，interface 和 type 都可以用来定义对象的形状，但它们有一些关键的区别和各自的适用场景
tags: vue ts
author: iczp
date: 2024-07-01
---

在 TypeScript 中，`interface` 和 `type` 都可以用来定义对象的形状，但它们有一些关键的区别和各自的适用场景。以下是两者的区别和使用场景：

### 区别

1. **声明合并 (Declaration Merging)**：

   - `interface` 可以声明多次，并且会自动合并。
   - `type` 则不支持声明合并。

   ```typescript
   interface User {
     name: string;
   }

   interface User {
     age: number;
   }

   const user: User = {
     name: 'Alice',
     age: 25,
   }; // 合法，User 接口自动合并
   ```

   ```typescript
   type User = {
     name: string;
   };

   type User = {
     age: number;
   }; // 错误，类型别名不能重复声明
   ```

2. **扩展性**：

   - `interface` 支持使用 `extends` 进行扩展。
   - `type` 可以使用交叉类型（`&`）进行组合。

   ```typescript
   interface Person {
     name: string;
   }

   interface Employee extends Person {
     employeeId: number;
   }

   const employee: Employee = {
     name: 'Alice',
     employeeId: 123,
   }; // 合法
   ```

   ```typescript
   type Person = {
     name: string;
   };

   type Employee = Person & {
     employeeId: number;
   };

   const employee: Employee = {
     name: 'Alice',
     employeeId: 123,
   }; // 合法
   ```

3. **复杂类型**：

   - `type` 可以定义更复杂的类型，包括联合类型、元组、映射类型等。
   - `interface` 主要用于定义对象类型。

   ```typescript
   type StringOrNumber = string | number;
   type Tuple = [string, number];
   type Dictionary<T> = {
     [key: string]: T;
   };
   ```

### 使用场景

1. **使用 `interface` 的场景**：

   - 需要利用声明合并。
   - 需要通过 `extends` 继承其他接口。
   - 定义对象的形状，尤其是在公开 API 时。

2. **使用 `type` 的场景**：
   - 需要定义复杂类型（如联合类型、交叉类型、元组等）。
   - 不需要声明合并。
   - 更注重类型的灵活性和简洁性。

### 示例

#### 使用 `interface`

```typescript
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  employeeId: number;
}

const employee: Employee = {
  name: 'Alice',
  age: 25,
  employeeId: 123,
};
```

#### 使用 `type`

```typescript
type StringOrNumber = string | number;

type Person = {
  name: string;
  age: number;
};

type Employee = Person & {
  employeeId: number;
};

const employee: Employee = {
  name: 'Alice',
  age: 25,
  employeeId: 123,
};

type Tuple = [string, number];
const tuple: Tuple = ['Alice', 25];

type Dictionary<T> = {
  [key: string]: T;
};

const dictionary: Dictionary<number> = {
  apples: 10,
  oranges: 20,
};
```

总结来说，如果你需要更强的扩展性和声明合并功能，`interface` 是更好的选择；如果你需要定义复杂类型并注重类型的灵活性，`type` 会更适合。
