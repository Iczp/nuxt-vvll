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
    bodyClass?: any;
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

const { items, list, toggleOpen } = useTrees({
  items: props.value?.links || [],
});
const isOpen = ref(props.open);

const toggleToc = () => {
  isOpen.value = !isOpen.value;
};

const activeHeading = ref<string>('');

const { y } = useScroll(window);

const activeRow = ref(0);
watch(y, (scrollY) => {
  //
  const scrollPosition = scrollY + 64;
  let currentHeading = '';

  list.value.forEach((heading, index) => {
    const element = document.getElementById(heading.id);
    if (element && element.offsetTop <= scrollPosition) {
      currentHeading = heading.id;
      activeRow.value = index;
    }
  });

  activeHeading.value = currentHeading;

  console.log('scrollY', scrollY, currentHeading, activeRow.value);
});

watch(activeRow, (v) => {
  console.log('activeIndex', v, list.value[activeRow.value || 0]);
});

onMounted(() => {
  console.log('list.value', list.value);
});

const getCssVariable = (variable: string): string => {
  return getComputedStyle(document.documentElement).getPropertyValue(variable);
};

const scrollToHeading = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const navbarHeight = parseInt(getCssVariable('--navbar-height'), 10);
    const offsetTop = element.offsetTop - navbarHeight;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth',
    });
  }
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
    <div v-show="isOpen" class="mt-2" :class="bodyClass">
      <Trees :items="items || []" :active-row="activeRow">
        <template v-slot="{ item, depth, index, parents, row }">
          <div
            class="flex flex-row items-center justify-between gap-2 py-1 toc-item"
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
    </div>
  </div>
</template>

<style scoped>
.active .toc-item {
  @apply !text-sky-500;
}
</style>
