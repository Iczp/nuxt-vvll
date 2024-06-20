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
    :name="fill ? 'ic:round-share' : 'ic:outline-share'"
    @click="$emit('change')"
  />
</template>
<style scoped></style>
