<script setup lang="ts">
import { isDir } from '@/utils/isDir';
import Trees from './Trees.vue';
export type LinkItem = {
  [key: string]: any;
  id: string;
  text: string;
  depth?: number;
  children?: Array<LinkItem>;
};
export type TocType = {
  links?: Array<LinkItem>;
  title?: string;
  searchDepth?: number;
  depth?: number;
};

const props = withDefaults(
  defineProps<{
    value?: TocType;
    open?: boolean;
    title?: string;
  }>(),
  {
    // items: [],
    open: false,
    title: '目录',
  }
);

// const { scrollToAnchor, scrollToTop } = useAnchorScroll({
//   toTop: {
//     scrollOptions: {
//       behavior: 'smooth',
//       offsetTop: 0,
//     },
//   },
// });

// const { toc } = useContent();

// const navToLink = (item: any) => (!isDir(item) ? item._path : undefined);

const scrollTo = (item: any) => (!isDir(item) ? item._path : undefined);

const { items, toggleOpen } = useTrees({
  items: props.value?.links || [],
});
const isOpen = ref(props.open);

const toggleToc = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <div class="!p-4 page-toc box">
    <!-- {{ tocItems }} -->
    <h3
      class="flex flex-row items-center justify-between gap-4"
      @click="toggleToc"
    >
      <div class="flex flex-row items-center">
        <Icon name="ic:outline-list-alt" class="mr-2 size-6" />
        <span class="text-base truncate" :class="{ hidden: !isOpen }">
          {{ title }}</span
        >
      </div>
      <Arrow :dir="isOpen ? 'down' : 'right'" class="ml-1" />
    </h3>
    <main v-show="isOpen" class="mt-2">
      <Trees :items="items || []">
        <template v-slot="{ item, depth, index, parents, row }">
          <div
            class="flex flex-row items-center justify-between gap-2 py-1"
            @click="scrollTo(item)"
          >
            <h3 class="flex flex-row items-center overflow-hidden">
              <!-- {{ item.$row }} -->
              <div class="inline-flex">
                <Icon
                  :name="
                    item.$row == 0
                      ? 'ic:outline-list-alt'
                      : 'ic:outline-numbers'
                  "
                  class="text-base mx-1.5"
                />
              </div>

              <a :href="`#${item.id}`" class="truncate cursor-pointer">
                <!-- {{ item }} -->
                <!-- {{ item.$row }} /{{ depth }}.{{ index }}  -->
                {{ item.text }}
              </a>
            </h3>
            <span v-if="item.$isDir" @click="toggleOpen(item)">
              <Arrow :dir="item.$isOpen ? 'down' : 'right'" />
            </span>
          </div>
        </template>
      </Trees>
    </main>
  </div>
</template>

<style lang="scss" scoped></style>
