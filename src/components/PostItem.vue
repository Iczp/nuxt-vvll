<script setup lang="ts">
import type { NavItemType } from '~/types/NavItemType';

const props = withDefaults(
  defineProps<{
    item: NavItemType;
  }>(),
  {}
);

// const contentFiles = useContentFiles();

// const fileInfo = computed(() => contentFiles[props.item?._path as string]);
const fileInfo = computed(() => props.item.fileInfo);

const lastModified = computed(
  () =>
    fileInfo.value?.lastModified || fileInfo.value?.created || props.item?.date
);
</script>

<template>
  <NuxtLink
    v-if="item"
    class="flex flex-row justify-between gap-4"
    :to="`${item._path}`"
  >
    <!-- <aside
      class="flex items-center justify-center border border-gray-500 rounded-md size-24 border-opacity-20"
    >
      <span>{{ item.title }}</span>
    </aside> -->
    <section class="flex flex-col flex-1 gap-1 min-h-24">
      <h3
        class="flex flex-col justify-between gap-4 text-base md:items-center md:flex-row"
      >
        <div class="flex flex-row items-center text-base">
          <Icon v-if="item.icon" :name="item.icon" class="mr-2 size-6" />
          <span>{{ item.title }}</span>
        </div>
        <Tags :items="item.tagEntities">
          <template v-slot="{ item: tagItem }">
            <span v-if="tagItem?.icon" :title="tagItem?.title">
              <Icon :name="tagItem?.icon" class="size-4"></Icon>
            </span>
            <span v-else>{{ tagItem?.title }}</span>
          </template>
        </Tags>
      </h3>
      <div class="text-sm text-gray-600">
        <p class="line-clamp-2 min-h-10">
          {{ item.description || item.title }}
        </p>
      </div>
      <div class="flex flex-row justify-between py-1 text-xs">
        <!-- {{ item._path }} : {{ item.fileInfo }} -->
        <div>
          <div v-if="item.author" class="text-sky-500">
            {{ item.author }}
          </div>
          <div v-if="item.children" class="text-sky-500">
            分类：{{ item.children.length }} , 文章总数：
            {{ item?.$totalFileCount }}
          </div>
        </div>
        <div v-if="lastModified" class="text-green-400">
          <Date :value="lastModified" format="YYYY-MM-DD hh:mm:ss" />
        </div>
      </div>
    </section>
  </NuxtLink>
</template>
