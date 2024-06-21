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
  return !isDir(item) ? item._path : undefined;
};

const navClick = (item: any) => {
  // console.log('navClick', JSON.stringify(item));
  console.log('navClick', item);
  setActive(item);
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
        @click="toggleOpen(item)"
      >
        <section class="flex flex-row items-center overflow-hidden">
          <div class="px-1.5 text-lg inline-flex tree-icon">
            <!-- {{ item }} -->
            <Folder v-if="item.$isDir" :open="item.$isOpen" />

            <Icon
              v-else
              :name="item.icon || 'material-symbols:article-outline'"
            />
          </div>
          <p class="truncate">
            <NuxtLink
              :to="item._path"
              @click="navClick(item)"
              class="truncate cursor-pointer"
            >
              <!-- {{ item.$row }} /{{ depth }}.{{ index }}  -->
              {{ item.title }}
              <span v-if="item.$isDir"> ({{ item.$totalFileCount }}) </span>
              <span v-else-if="!item.$isDir && item.$count">
                ({{ item.$count }})</span
              >
            </NuxtLink>
          </p>
        </section>
        <section v-if="item.$isDir">
          <div
            class="inline-flex items-center justify-center p-0 border rounded-sm cursor-pointer size-6 border-slate-300 bg-slate-200 dark:border-slate-700 dark:bg-slate-800"
          >
            <Arrow :dir="item.$isOpen ? 'down' : 'right'" />
          </div>
        </section>
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
