---
title: 修改浏览器地址栏颜色
icon:
tags: vue css html h5 ts js
date: 2024-06-27
description: 修改浏览器地址栏颜色 HTML meta
---

## 修改手机浏览器地址栏和状态栏的颜色

要修改手机浏览器地址栏和状态栏的颜色，可以使用 HTML 和 CSS 来实现。以下是两种常见的方式：

### 1. 使用 HTML meta 标签修改浏览器地址栏颜色

对于安卓设备，可以使用 `theme-color` meta 标签：

```html
<!-- 在你的 HTML <head> 部分中添加以下内容 -->
<meta name="theme-color" content="#000000" />
```

### 2. 使用 CSS 修改 iOS Safari 浏览器的状态栏颜色

对于 iOS 设备，可以使用 Apple 提供的 `meta` 标签来设置状态栏的颜色：

```html
<!-- 在你的 HTML <head> 部分中添加以下内容 -->
<meta
  name="apple-mobile-web-app-status-bar-style"
  content="black-translucent"
/>
<!-- 或者 -->
<meta name="apple-mobile-web-app-status-bar-style" content="black" />
<!-- 如果你希望使用自定义颜色 -->
<meta name="apple-mobile-web-app-status-bar-style" content="default" />
```

### 在 Vue.js 中实现

如果你正在使用 Vue.js 框架，可以在你的主组件（例如 `App.vue`）的 `mounted` 生命周期钩子中动态添加这些 meta 标签。

```vue
<template>
  <div id="app">
    <!-- 你的应用内容 -->
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    // 创建并设置 theme-color meta 标签
    const themeColorMeta = document.createElement('meta');
    themeColorMeta.name = 'theme-color';
    themeColorMeta.content = '#000000'; // 你想要的颜色
    document.head.appendChild(themeColorMeta);

    // 创建并设置 apple-mobile-web-app-status-bar-style meta 标签
    const statusBarStyleMeta = document.createElement('meta');
    statusBarStyleMeta.name = 'apple-mobile-web-app-status-bar-style';
    statusBarStyleMeta.content = 'black-translucent'; // 你想要的颜色或样式
    document.head.appendChild(statusBarStyleMeta);
  },
};
</script>

<style>
/* 你的样式 */
</style>
```

这样，你就可以在 Vue.js 应用中动态修改手机浏览器的颜色了。根据具体需求，你可以调整颜色值或 meta 标签的内容。

## Vue 3 组合函数 设置手机浏览器的颜色

HTMLMetaElement

### 创建自定义组合函数

首先，创建一个自定义的组合函数，用于设置浏览器颜色：

```typescript
// useBrowserColor.ts
export function useBrowserColor({
  themeColor = '#111827',
  appleStatusBarStyle = 'black-translucent',
} = {}) {
  let themeColorMeta = document.querySelector(
    'meta[name="theme-color"]'
  ) as HTMLMetaElement;
  if (!themeColorMeta) {
    themeColorMeta = document.createElement('meta') as HTMLMetaElement;
    themeColorMeta.name = 'theme-color';
    document.head.appendChild(themeColorMeta);
  }
  themeColorMeta.content = themeColor;

  // 创建并设置 apple-mobile-web-app-status-bar-style meta 标签
  let statusBarStyleMeta = document.querySelector(
    'meta[name="apple-mobile-web-app-status-bar-style"]'
  ) as HTMLMetaElement;
  if (!statusBarStyleMeta) {
    statusBarStyleMeta = document.createElement('meta') as HTMLMetaElement;
    statusBarStyleMeta.name = 'apple-mobile-web-app-status-bar-style';
    document.head.appendChild(statusBarStyleMeta);
  }
  statusBarStyleMeta.content = appleStatusBarStyle;
  console.log('useBrowserColor', themeColorMeta, statusBarStyleMeta);
}
```

### 在 Vue 组件中使用该组合函数

然后，在 Vue 组件中使用这个自定义的组合函数：

```vue
<template>
  <div id="app">
    <!-- 你的应用内容 -->
  </div>
</template>

<script setup lang="ts">
import { useBrowserColor } from './useBrowserColor';

// 设置浏览器颜色
useBrowserColor({
  themeColor: '#ff5733', // 你想要的颜色
  appleStatusBarStyle: 'black-translucent', // 或者 'black', 'default'
});
</script>

<style>
/* 你的样式 */
</style>
```

### 完整项目结构

确保你的项目结构如下：

```
/src
  /components
    App.vue
  useBrowserColor.ts
```

### 解释

1. **类型断言**：
   - 使用 `as HTMLMetaElement` 进行类型断言，以确保 `querySelector` 返回的元素被视为 `HTMLMetaElement`。
   - 在创建新的 meta 标签时也使用类型断言将其视为 `HTMLMetaElement`。

通过这些更改，TypeScript 编译器将不会再报错，并且你的代码仍然保持清洁和模块化。

### App.vue

```vue
<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return `${titleChunk} - vvll.net`;
  },
});

import { useDark } from '@vueuse/core';
const isDark = useDark();
watch(isDark, (dark) => {
  useBrowserColor({
    themeColor: dark ? '#111827' : '#f8fafc',
    appleStatusBarStyle: 'black-translucent',
  });
});
</script>

<template>
  <div ref="app" style="--color: #7fa998">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
```
