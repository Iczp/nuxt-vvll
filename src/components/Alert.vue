<script lang="ts" setup></script>

<template>
  <!-- <UAlert v-bind="$attrs">
    <template
      v-for="(slot, index) of Object.keys($slots)"
      :key="index"
      v-slot:[slot]
    >
      <slot :name="slot"></slot>
    </template>
  </UAlert> -->

  <div class="p-1 alert">
    <slot></slot>
  </div>
</template>
<style scoped>
.alert > * {
}
</style>
