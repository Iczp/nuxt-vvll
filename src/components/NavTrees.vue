<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    path?: string;
  }>(),
  {
    path: undefined,
  }
);

const route = useRoute();

const {
  items: navItems,
  toggleOpen,
  activeItem,
  setActive,
} = await useDocuments({ path: route.path });

const navToLink = (item: any) => {
  // console.log('navToLink', item);
  return item._path;
  // return item.$isDir ? item._path : undefined;
};

const isLocked = useScrollLock(window);
const navClick = (item: any) => {
  // console.log('navClick', JSON.stringify(item));
  console.log('navClick', item);
  setActive(item);
  isLocked.value = false;
};
</script>

<template>
  <!-- dir {{ dir }} -->
  <!-- {{ route.params.slug }} -->
  <Trees :items="navItems ?? []">
    <template v-slot="{ item, depth, index, parents }">
      <h3
        class="flex flex-row justify-between gap-2 py-1"
        :class="{ dir: item.$isDir }"
      >
        <NuxtLink
          class="flex flex-row items-center overflow-hidden"
          :to="navToLink(item)"
          @click="navClick(item)"
        >
          <div class="px-1.5 text-lg inline-flex tree-icon">
            <Folder v-if="item.$isDir" :open="item.$isOpen" />
            <Icon
              v-else
              :name="item.icon || 'material-symbols:article-outline'"
            />
          </div>

          <div class="truncate">
            <!-- {{ item.$row }} /{{ depth }}.{{ index }}  -->
            <span class="">{{ item.title }}</span>
            <span v-if="item.$isDir"> ({{ item.$totalFileCount }}) </span>
            <!-- <span v-else-if="!item.$isDir && item.$count">
              ({{ item.$count }})</span
            > -->
          </div>
        </NuxtLink>
        <div class="flex flex-row">
          <div
            v-if="item.$isDir"
            @click="toggleOpen(item)"
            class="badge size-6"
          >
            <Arrow :dir="item.$isOpen ? 'down' : 'right'" />
          </div>
          <div
            v-else-if="!item.$isDir && item.$count"
            class="badge size-6 text-sky-600"
          >
            {{ item.$count }}
          </div>
        </div>
      </h3>
    </template>
  </Trees>
</template>

<style scoped>
.active:not(.dir) a,
.active:not(.dir) .tree-icon {
  @apply text-blue-600 dark:text-blue-400;
}
</style>
