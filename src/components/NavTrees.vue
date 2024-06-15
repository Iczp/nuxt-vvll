<script setup lang="ts">
const route = useRoute();
const props = withDefaults(
  defineProps<{
    path?: string;
  }>(),
  {
    path: undefined,
  }
);

const { data: navigation } = await useAsyncData('navigation', () =>
  fetchContentNavigation()
);

// const navigation = await fetchContentNavigation()

const { navBottomLink, navDirFromPath, navPageFromPath, navKeyFromPath } =
  useContentHelpers();
const defaultPath = '/';
//one of ['/docs', '/notes']
const dir =
  navDirFromPath(props.path || defaultPath, navigation.value!) ||
  navigation.value;
// console.log('dir',route.path, dir);

const { items, toggleOpen, activeItem, setActive } = useTrees({
  items: dir,
  // open: (x) => x.open || true,
  // action: (x) => {
  //   x.$isDir = isDir(x);
  // },
  active: (item, depth, index, parents) => item._path === route.path,
  // sort: (a, b, depth) => {
  //   if (depth > 1) {
  //     return 0; // a和b位置不变
  //   }
  //   if (a.$isDir && !b.$isDir) {
  //     return -1; // a应该在b前面
  //   } else if (!a.$isDir && b.$isDir) {
  //     return 1; // b应该在a前面
  //   } else {
  //     return 0; // a和b位置不变
  //   }
  // },
});

// onMounted(() => {
//   // setActive(activeItem.value);

//   // console.log('activeItem.value', activeItem.value);
//   setTimeout(() => {
//     setActive(activeItem.value);
//   }, 1000);
// });
const navToLink = (item: any) => {
  // console.log('navToLink', item);

  return !isDir(item) ? item._path : undefined;
};
const navClick = (item: any) => {
  console.log('navClick', item.$parents());
  setActive(item);
};
</script>

<template>
  <!-- dir {{ dir }} -->
  {{ route.params.slug }}
  <Trees :items="items">
    <template v-slot="{ item, depth, index, parents }">
      <h3
        class="flex flex-row justify-between gap-2 py-1"
        :class="{ dir: item.$isDir }"
        @click="toggleOpen(item)"
      >
        <section class="flex flex-row items-center overflow-hidden">
          <div class="px-1.5 text-lg">
            <!-- {{ item }} -->
            <Folder v-if="item.$isDir" :open="item.$isOpen" />

            <Icon
              :name="item.icon || 'material-symbols:article-outline'"
              v-else
            />
          </div>
          <p class="truncate">
            <NuxtLink
              :to="navToLink(item)"
              @click="navClick(item)"
              class="truncate cursor-pointer"
            >
              <!-- {{ item.$row }} /{{ depth }}.{{ index }}  -->
              {{ item.title }}
              <template v-if="item.$isDir">
                ({{ item.$totalFileCount }})
              </template>
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
.active:not(.dir) a {
  @apply text-blue-600 dark:text-blue-400;
}
</style>
