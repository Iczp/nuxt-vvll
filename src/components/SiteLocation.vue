<script setup lang="ts">
const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
  menuIcon.value = isOpen.value ? 'mdi:menu-open' : 'mdi:menu';
};

const menuIcon = ref('mdi:menu');

const site = useSite();

const links = computed(() =>
  site.location
    .map((x) => ({
      label: x.title,
      //   icon: x.icon,
      to: x._path,
    }))
    .concat([
      {
        label: 'Home',
        // icon: 'i-heroicons-home',
        to: '/',
      },
    ])
    .reverse()
);
</script>

<template>
  <div class="flex flex-row items-center site-location">
    <a @click="toggleMenu" class="mr-2">
      <Icon :name="menuIcon" class="size-6" />
    </a>

    <UBreadcrumb :links="links" />
  </div>
</template>

<style scoped></style>
