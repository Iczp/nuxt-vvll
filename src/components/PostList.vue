<script setup lang="ts">
import type { RouteLocationNormalizedLoaded } from '#vue-router';

const props = withDefaults(
  defineProps<{
    items1?: any[];
    list?: (
      list: NavItemType[],
      route: RouteLocationNormalizedLoaded
    ) => NavItemType[];

    filter?: (
      value: NavItemType,
      index: number,
      array: NavItemType[]
    ) => boolean;
  }>(),
  {
    // items: [],
    filter: () => true,
    list: (list, route) => list,
  }
);

const route = useRoute();

const { list, tagDict } = await useNav();

const items = computed(() =>
  props.list!(list.value, route)
    .filter(props.filter)
    //   .slice(0, 1)
    .map((x) => ({
      ...x,
      tagItems: x.tags?.map((x) => tagDict.value[x]),
    }))
    .filter((x) => q.value == '' || x.title.indexOf(q.value) != -1)
);

const isPending = ref(false);
const q = ref('');
</script>

<template>
  <div class="flex flex-col w-full">
    <div>
      <UInput
        :loading="isPending"
        v-model="q"
        icon="i-heroicons-magnifying-glass-20-solid"
        size="sm"
        color="white"
        :trailing="true"
        placeholder="Search..."
        class="w-64"
      />
    </div>
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
  </div>
</template>
