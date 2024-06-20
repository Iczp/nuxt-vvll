<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    fill?: boolean;
  }>(),
  {}
);
const isFill = ref(props.fill);
// const on
</script>

<template>
  <Icon
    :name="fill ? 'ic:round-star' : 'ic:round-star-border'"
    @click="$emit('change')"
  />
</template>
<style scoped></style>
