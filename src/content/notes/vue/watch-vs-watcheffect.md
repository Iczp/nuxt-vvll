---
title: vue3 中 watch 和 watchEffect 区别
description: vue3 中 watch 和 watchEffect 区别
date: 2024-07-08
tags: vue ts
---
## watch 和 watchEffect 区别

watch 和 watchEffect 都能响应式地执行有副作用的回调。它们之间的主要区别是追踪响应式依赖的方式：

- watch 只追踪明确侦听的数据源。它不会追踪任何在回调中访问到的东西。另外，仅在数据源确实改变时才会触发回调。watch 会避免在发生副作用时追踪依赖，因此，我们能更加精确地控制回调函数的触发时机。

- watchEffect，则会在副作用发生期间追踪依赖。它会在同步执行过程中，自动追踪所有能访问到的响应式属性。这更方便，而且代码往往更简洁，但有时其响应性依赖关系会不那么明确。

回调的


在 Vue 3 中，`watch` 和 `watchEffect` 是用于监听和响应变化的两个重要工具，但它们有一些关键的区别。下面是它们的详细解释：

### `watch`

`watch` 用于监听一个或多个特定的响应式数据源，并在其发生变化时执行回调函数。它适合处理需要在数据变化时进行特定操作的场景，如调用 API 或进行复杂的逻辑处理。

#### 用法

- **单一数据源监听**：

```javascript
import { ref, watch } from 'vue';

const count = ref(0);

watch(count, (newValue, oldValue) => {
  console.log(`count changed from ${oldValue} to ${newValue}`);
});
```

- **多个数据源监听**：

```javascript
import { ref, watch } from 'vue';

const count = ref(0);
const name = ref('John');

watch([count, name], ([newCount, newName], [oldCount, oldName]) => {
  console.log(`count changed from ${oldCount} to ${newCount}`);
  console.log(`name changed from ${oldName} to ${newName}`);
});
```

### `watchEffect`

`watchEffect` 会立即执行传入的函数，并自动收集在函数中访问的所有响应式数据源。一旦这些数据源发生变化，函数会重新运行。它更适合用于需要自动依赖追踪的简单副作用，如调试或计算属性的替代品。

#### 用法

```javascript
import { ref, watchEffect } from 'vue';

const count = ref(0);
const name = ref('John');

watchEffect(() => {
  console.log(`count is ${count.value}`);
  console.log(`name is ${name.value}`);
});
```

### 区别

1. **依赖追踪**：
   - `watch`：显式地指定要监听的响应式数据源。
   - `watchEffect`：自动收集和追踪函数中使用的所有响应式数据源。

2. **执行时机**：
   - `watch`：在指定的响应式数据源变化时执行。
   - `watchEffect`：立即执行一次，然后在依赖变化时重新执行。

3. **回调参数**：
   - `watch`：回调函数可以访问新值和旧值。
   - `watchEffect`：回调函数没有参数，依赖项在函数体内访问。

4. **适用场景**：
   - `watch`：适用于需要精确控制依赖关系的场景，如异步操作、复杂逻辑处理。
   - `watchEffect`：适用于简单的自动依赖追踪场景，如调试、简单副作用。

### 示例

- 使用 `watch` 进行 API 调用：

```javascript
import { ref, watch } from 'vue';

const searchTerm = ref('');

watch(searchTerm, async (newTerm, oldTerm) => {
  if (newTerm !== oldTerm) {
    const results = await fetch(`/api/search?q=${newTerm}`).then(res => res.json());
    console.log(results);
  }
});
```

- 使用 `watchEffect` 调试响应式数据：

```javascript
import { ref, watchEffect } from 'vue';

const count = ref(0);

watchEffect(() => {
  console.log(`The count is: ${count.value}`);
});
```

总结来说，`watch` 提供了更强的控制能力，而 `watchEffect` 提供了更简单的使用方式，根据具体的应用场景选择适合的工具会使得开发过程更加高效。