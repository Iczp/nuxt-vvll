<script setup lang="ts">
import type { NavItemType } from '../types/NavItemType';
const props = withDefaults(
  defineProps<{
    skip?: number;
    limit?: number;
    search?: boolean;
    filter?: (
      value: NavItemType,
      index: number,
      array: NavItemType[]
    ) => boolean;
  }>(),
  {
    skip: 0,
    limit: 10,
    filter: (x: NavItemType) => !x.$isDir,
  }
);

const route = useRoute();

const { list, tagDict } = await useDocuments({});

const contentFiles = useContentFiles();

list.value = list.value.map((x) => {
  // console.log(x);
  return { ...x, fileInfo: contentFiles[x._path] };
});

list.value.sort((a, b) => {
  if (a.fileInfo?.lastModified && b.fileInfo?.lastModified) {
    return (
      new Date(b.fileInfo?.lastModified).getTime() -
      new Date(a.fileInfo?.lastModified).getTime()
    );
  }
  return 0;
});

// const fileInfo = computed(() => contentFiles[props.item?._path as string]);

const items = computed(() =>
  list.value
    .filter(props.filter)
    //   .slice(0, 1)
    .filter(
      (x) =>
        q.value == '' ||
        x.title.toLocaleLowerCase().indexOf(q.value.toLocaleLowerCase()) != -1
    )
    .slice(props.skip, props.limit)
);

const isPending = ref(false);
const q = ref('');
</script>

<template>
  <div class="flex flex-col w-full gap-4">
    <div v-if="search">
      <UInput
        :loading="isPending"
        color="sky"
        v-model="q"
        icon="i-heroicons-magnifying-glass-20-solid"
        size="md"
        :trailing="false"
        placeholder="Search..."
        class="w-full sm:w-64"
      />
    </div>

    <slot v-if="items.length == 0" name="empty">
      <Empty class="min-h-24" />
    </slot>

    <ul class="grid grid-cols-1 gap-4 not-prose">
      <li
        v-for="item in items"
        :key="item._path"
        class="flex flex-col p-6 card hover:card-hover"
      >
        <!-- fileInfo:{{ item.fileInfo }} -->
        <PostItem :item="item" />
      </li>
    </ul>
  </div>
</template>
