<script setup lang="ts">
import { useCssVar } from '@vueuse/core';

const app = ref(null);
const color1 = useCssVar('--color', app, { initialValue: '#eee' });

onMounted(() => {
  setTimeout(() => {
    color1.value = 'red';
  }, 1000);
});
</script>

<template>
  <div ref="app" style="--color: #7fa998">
    <!-- <NuxtPage /> -->
    <!-- <span>5555555555555</span> -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style scoped></style>
