import AppHeader from '../components/AppHeader.vue';
<template>
  <AppHeader />
  <h1 class="text-xl text-red-500">Layout :Home</h1>
  <main>
    <slot></slot>
  </main>
  <AppFooter />
</template>
