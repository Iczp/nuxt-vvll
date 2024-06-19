---
title: TypeScript 中的数组转换成对象字典
description: '使用 `reduce` 方法遍历数组，并将每个用户对象添加到字典中。`reduce` 的初始值是一个空对象 `{}`，类型是 `{ [key: number]: User }`。'
tags: vue ts
author: iczp
date: 2024-06-19
---

# TypeScript 中的数组转换成对象字典

将 TypeScript 中的数组转换成对象字典，可以通过遍历数组并根据需要将每个元素映射到对象的键值对来实现。下面是一个示例代码，将数组转换为对象字典：

假设有一个数组 `users`，每个元素是一个用户对象，具有 `id` 和 `name` 属性。我们将这个数组转换为一个以 `id` 为键，用户对象为值的字典。

```typescript
type User = {
  id: number;
  name: string;
};

const users: User[] = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
];

const userDictionary: { [key: number]: User } = users.reduce((dict, user) => {
  dict[user.id] = user;
  return dict;
}, {} as { [key: number]: User });

console.log(userDictionary);
```

输出结果：

```typescript
{
  1: { id: 1, name: 'Alice' },
  2: { id: 2, name: 'Bob' },
  3: { id: 3, name: 'Charlie' }
}
```

在这个示例中，我们使用 `reduce` 方法遍历数组，并将每个用户对象添加到字典中。`reduce` 的初始值是一个空对象 `{}`，类型是 `{ [key: number]: User }`。

如果键是字符串类型，可以相应地调整类型定义：

```typescript
type User = {
  id: string;
  name: string;
};

const users: User[] = [
  { id: '1', name: 'Alice' },
  { id: '2', name: 'Bob' },
  { id: '3', name: 'Charlie' },
];

const userDictionary: { [key: string]: User } = users.reduce((dict, user) => {
  dict[user.id] = user;
  return dict;
}, {} as { [key: string]: User });

console.log(userDictionary);
```

这样可以根据数组中的数据创建一个对象字典，并可以通过指定的键快速查找值。
