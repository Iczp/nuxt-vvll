<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    items1?: any[];

    predicate?: (
      value: NavItemType,
      index: number,
      array: NavItemType[]
    ) => boolean;
  }>(),
  {
    // items: [],
    predicate: () => true,
  }
);

const { list, tagDict } = await useNav();

const items = computed(() => {
  //   return [];
  return (
    list.value
      // .filter((x) => !x.$isDir && !x._path.startsWith('/tags/'))
      .filter(props.predicate)
      .slice(0, 1)
      .map((x) => ({
        ...x,
        tagItems: x.tags?.map((x) => tagDict.value[x]),
      }))
  );
});
</script>

<template>
  <ul class="grid grid-cols-1 gap-4 not-prose">
    <li v-for="item in items" :key="item._path" class="">
      <NuxtLink
        :to="`${item._path}`"
        class="flex flex-col p-4 card hover:card-hover"
      >
        <div class="flex flex-row justify-between gap-4">
          <aside
            class="flex items-center justify-center border border-gray-500 rounded-md size-24 border-opacity-20"
          >
            imag
          </aside>
          <main class="flex flex-col flex-1 gap-1">
            <h3 class="flex flex-row items-center justify-between">
              <div class="text-base">
                <span>{{ item.title }}</span>
              </div>
              <div class="flex flex-row items-center gap-2">
                <span v-for="(tagItem, index) in item.tagItems" :key="index">
                  <Icon
                    v-if="tagItem?.icon"
                    :name="tagItem?.icon"
                    class="size-4"
                  ></Icon>
                  <span v-else>{{ tagItem?.title }}</span>
                </span>
              </div>
            </h3>
            <div class="text-sm text-gray-600">
              <p class="line-clamp-2 min-h-10">
                {{ item.description || item.title }}
              </p>
            </div>
            <div class="flex flex-row-reverse justify-between py-1 text-xs">
              <div v-if="item.date" class="text-green-400">
                {{ item.date }}
              </div>
              <div v-if="item.author" class="text-sky-500">
                {{ item.author }}
              </div>
            </div>
          </main>
        </div>
      </NuxtLink>
    </li>
  </ul>
</template>
