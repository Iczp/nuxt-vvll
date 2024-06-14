---
title: vue3 获取插槽内容<slot>
date: 2024-06-13
tags: vue ts
---

# vue3 获取插槽内容 slot

> useSlots()的用法, renderSlotContent

```vue [CodeTab.vue]
<script lang="ts" setup>
const slots = useSlots();

const keys = ref(Object.keys(slots));

const renderSlotContent = (slot: string) => {
  if (slots[slot]) {
    return slots[slot]!();
  }
  return null;
};
</script>
<template>
  slots:{{ slots }}

  {{ keys }}
  :attrs{{ $attrs }}
  <!-- <slot></slot> -->
  <ul>
    <li v-for="(slot, index) of keys" :key="index">
      {{ slot }}
      {{ console.log(renderSlotContent(slot)) }}
    </li>
  </ul>
  <!-- <template v-for="(slot, index) of keys" :key="index" v-slot:[slot]> -->
  <slot v-for="(slot, index) of keys" :key="index" :name="slot"></slot>
  <!-- </template> -->
</template>
```
