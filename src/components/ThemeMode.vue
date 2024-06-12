<script setup lang="ts">
const isDark = useDark();
const toggleDark = useToggle(isDark);
const colorMode = useColorMode();
</script>

<template>
  <button @click="toggleDark()">
    <Icon v-if="isDark" name="ic:baseline-mode-night" />
    <Icon v-else name="ic:baseline-light-mode" />
  </button>
</template>
