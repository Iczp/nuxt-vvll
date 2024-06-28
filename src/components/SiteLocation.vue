<script setup lang="ts">
const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
  menuIcon.value = isOpen.value ? 'mdi:menu-open' : 'mdi:menu';
};

const menuIcon = ref('mdi:menu');

const site = useSite();
</script>

<template>
  <div class="flex flex-row items-center site-location">
    <a @click="toggleMenu" class="mr-2">
      <Icon :name="menuIcon" class="size-6" />
    </a>

    <ol class="max-w-full breadcrumb">
      <li v-for="(item, index) in site.location" :key="index" class="min-w-0">
        <NuxtLink :to="item._path" class="flex items-center min-w-0">
          <span class="font-semibold truncate">
            {{ item.title }}
          </span>
        </NuxtLink>
      </li>
    </ol>

    <!-- <ClientOnly>
      <UBreadcrumb :links="links" />
    </ClientOnly> -->
  </div>
</template>

<style scoped>
.breadcrumb,
.breadcrumb li {
  @apply flex flex-row items-center;
}
.breadcrumb li:last-child {
  @apply text-primary;
}
.breadcrumb li:not(:last-child)::after {
  @apply flex flex-shrink-0 w-5 h-5 i-heroicons-chevron-right-20-solid rtl:i-heroicons-chevron-left-20-solid content-[''];
}
</style>
