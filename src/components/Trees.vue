<script setup lang="ts">
import Trees from './Trees.vue';
withDefaults(
  defineProps<{
    items: Array<any>;
    depth?: number;
    parents?: Array<any>;
  }>(),
  {
    depth: 0,
    parents: (): Array<any> => [],
  }
);
</script>

<template>
  <ul class="trees" :depth="depth">
    <li v-for="(item, index) in items" :index="index" :key="index" class="">
      <div class="div" :class="{ active: item.$isActive }">
        <slot :item="item" :depth="depth" :index="index" :parents="parents">
          {{ item.title }}
        </slot>
      </div>

      <Trees
        v-if="Array.isArray(item.children) && item.children.length != 0"
        :items="item.children"
        :depth="depth + 1"
        :parents="[item, ...parents]"
        :class="{ hidden: !item?.$isOpen }"
      >
        <template v-slot="{ item, depth, index }">
          <slot :item="item" :depth="depth" :index="index" :parents="parents">
            {{ item.title }}
          </slot>
        </template>
      </Trees>
    </li>
  </ul>
</template>

<style scoped>
.trees {
  --trees-border-color: #dadada;
  --trees-border-active-color: #91cdee;
  --trees-border-hover-color: #098912;
  --trees-border-hover-active-color: #016410;
  --border-style: dashed;
}

.dark .trees {
  --trees-border-color: #3f3f3f;
  --trees-border-active-color: #91cdee;
  --trees-border-hover-color: #2de439;
  --trees-border-hover-active-color: #0594ed;
}

.border-color {
  border-color: var(--trees-border-color);
}
.hover-color {
  border-color: var(--trees-border-hover-color);
}
.active-color {
  border-color: var(--trees-border-active-color);
}

.active-hover-color {
  border-color: var(--trees-border-hover-active-color);
}

ul {
  @apply border-l border-l pl-7;
}

ul[depth='0'] > li:only-child > .div {
  @apply pl-0;
}
ul[depth='0'] > li:only-child > ul {
  @apply pl-3;
}
ul[depth='0'] {
  @apply p-0 mx-0;
}

.div {
  @apply relative pl-3;
}

.div::before {
  content: '';
  @apply border-l top-0 bottom-0 absolute left-0  z-20;
}
li:last-child > .div::before {
  @apply h-1/2;
}

ul[depth='0'],
li:last-child > ul {
  @apply border-none;
}
.div::after {
  content: '';
  @apply border-t top-1/2 bottom-0 absolute left-0 h-0.5 w-4 z-10;
}

ul[depth='0'] > li[index='0'] > .div::before {
  @apply top-1/2;
}

ul,
.div::before,
.div::after {
  @apply border-color box-border;
}

.div:hover::before {
  border: var(--trees-border-color) 1px var(--border-style);
}
.div:hover::before,
.div:hover::after {
  @apply hover-color;
}

.div.active::before,
.div.active::after {
  @apply active-color;
}

.div.active:hover::before,
.div.active:hover::after {
  @apply active-hover-color;
}

ul[depth='0'] > li:only-child > .div::before,
ul[depth='0'] > li:only-child > .div::after {
  @apply hidden;
}

ul,
.div::before,
.div::after {
  border-style: var(--border-style);
}
</style>
