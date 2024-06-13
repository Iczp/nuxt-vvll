<script lang="ts" setup>
withDefaults(
  defineProps<{
    dir: 'left' | 'right' | 'up' | 'down';
  }>(),
  {
    dir: 'right',
  }
);
</script>
<template>
  <span class="arrow" :class="dir">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M6.23 20.23L8 22l10-10L8 2L6.23 3.77L14.46 12z"
      ></path>
    </svg>
  </span>
</template>

<style scoped>
.arrow {
  display: inline-block;
  transition: all 0.3s ease-in;
}
.arrow.left {
  transform: rotate(180deg);
}
.arrow.right {
  transform: rotate(0deg);
}
.arrow.up {
  transform: rotate(-90deg);
}
.arrow.down {
  transform: rotate(90deg);
}
</style>
