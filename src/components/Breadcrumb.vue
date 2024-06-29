<script setup lang="ts">
const props = defineProps<{
  items: any[];
  icon?: boolean;
  liClass?: string;
}>();
</script>

<template>
  <ol class="breadcrumb">
    <slot name="header"></slot>
    <li
      v-for="(item, index) in items"
      :key="index"
      class="flex min-w-0"
      :class="liClass"
    >
      <slot :item="item" :icon="icon">
        <NuxtLink :to="item._path" class="flex items-center min-w-0" :title="item.title">
          <Icon
            v-if="icon && item.icon"
            :name="item.icon"
            class="mr-2 size-4"
          />
          <span class="font-semibold truncate">
            {{ item.title }}
          </span>
        </NuxtLink>
      </slot>
    </li>
    <slot name="footer"></slot>
  </ol>
</template>

<style scoped>
.breadcrumb,
.breadcrumb li {
  @apply flex flex-row items-center;
}
/* .breadcrumb li:last-child {
  @apply text-primary;
} */
.breadcrumb li:not(:last-child)::after {
  @apply flex flex-shrink-0 w-5 h-5 i-heroicons-chevron-right-20-solid rtl:i-heroicons-chevron-left-20-solid content-[''];
}
</style>
