<script setup lang="ts">
defineProps<{
  href?: string;
}>();
</script>

<template>
  <a
    class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 px-2.5 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
    :href="href"
    rel="noreferrer"
    target="_blank"
  >
    <Icon name="i-simple-icons-github"></Icon>

    <span class=""><slot>GitHub</slot></span
    ><!----></a
  >
</template>
