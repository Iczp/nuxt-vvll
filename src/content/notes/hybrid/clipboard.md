---
title: 剪切版(Clipboard)的使用 剪切版(Clipboard)的使用剪切版(Clipboard)的使用
tags: ts js
author: iczp
date: 2024-06-20
---

# 剪切版(Clipboard)的使用 

## Vueuse

> https://vueuse.org/core/useClipboard/#useclipboard

```vue
<script setup lang="ts">
import { useClipboard } from '@vueuse/core';

const source = ref('Hello');
const { text, copy, copied, isSupported } = useClipboard({ source });
</script>

<template>
  <div v-if="isSupported">
    <button @click="copy(source)">
      <!-- by default, `copied` will be reset in 1.5s -->
      <span v-if="!copied">Copy</span>
      <span v-else>Copied!</span>
    </button>
    <p>
      Current copied: <code>{{ text || 'none' }}</code>
    </p>
  </div>
  <p v-else>Your browser does not support Clipboard API</p>
</template>
```

## 组件使用

> 该函数还通过包提供了无渲染组件版本@vueuse/components。详细了解用法。

```vue
<template>
  <UseClipboard v-slot="{ copy, copied }" source="copy me">
    <button @click="copy()">
      {{ copied ? 'Copied' : 'Copy' }}
    </button>
  </UseClipboard>
</template>
```
