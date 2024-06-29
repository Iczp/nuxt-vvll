<script setup lang="ts">
const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
  menuIcon.value = isOpen.value ? 'mdi:menu-open' : 'mdi:menu';
};

const menuIcon = ref('mdi:menu');

const site = useSite();

// const toggle = () => {
//   site.toggle();
//   const isLocked = useScrollLock(window);
//   isLocked.value = site.isOpen?.valueOf() || false;
// };
</script>

<template>
  <div class="flex flex-row items-center max-w-full site-location">
    <Breadcrumb
      class="flex flex-row items-center max-w-full"
      :items="site.location"
    >
      <template #header>
        <li class="flex items-center min-w-0">
          <a class="mr-2">
            <Icon :name="menuIcon" class="size-4" />
          </a>
          <!-- <MenuIcon
          @click="toggle"
          :open="!!site.isOpen"
          class=" size-5 sm:hidden"
        /> -->
        </li>
      </template>
    </Breadcrumb>
  </div>
</template>

<style scoped>
/* .breadcrumb,
.breadcrumb li {
  @apply flex flex-row items-center;
} */
.breadcrumb li:last-child {
  @apply text-primary;
}
/* .breadcrumb li:not(:last-child)::after {
  @apply flex flex-shrink-0 w-5 h-5 i-heroicons-chevron-right-20-solid rtl:i-heroicons-chevron-left-20-solid content-[''];
} */
</style>
