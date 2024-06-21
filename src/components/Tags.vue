<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    items?: any[];
    label?: string;
    liClass?: any;
  }>(),
  {
    // items: [],
  }
);
</script>

<template>
  <section class="flex flex-row gap-4 tags">
    <h3
      v-if="label"
      t=":"
      class="flex flex-shrink-0 after:mx-2 after:content-[attr(t)]"
    >
      {{ label }}
    </h3>
    <slot v-if="items?.length == 0" name="empty">无</slot>
    <ul
      v-if="items?.length != 0"
      class="flex flex-row flex-wrap items-center gap-2"
    >
      <li v-for="(item, index) in items" :key="index" :class="liClass">
        <slot :item="item">
          <NuxtLink
            :to="`${item._path}?tab=1`"
            class="flex flex-row items-center !py-1 space-x-2 box hover:box-hover"
            :title="item?.title"
          >
            <Icon v-if="item?.icon" :name="item?.icon" class="size-4"></Icon>
            <span>{{ item?.title }}</span>
          </NuxtLink>
        </slot>
      </li>
    </ul>
  </section>
</template>
