<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    open?: boolean | null;
  }>(),
  {
    open: false,
  }
);

const iconName = computed(() =>
  props.open
    ? 'material-symbols-light:folder-open'
    : 'material-symbols-light:folder'
);
</script>
<template>
  <Icon :name="iconName" />
</template>
