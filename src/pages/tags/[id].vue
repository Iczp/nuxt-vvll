<script setup lang="ts">
import { useFetch } from '@vueuse/core';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const { params, query } = route;

// const runtimeConfig = await useRuntimeConfig();

// const { integrity, api } = runtimeConfig.public.content;

const { list, getAllByTags } = await useNavigationList();

const items = ref(getAllByTags([params.id]));

const tagName = params.id as string;
const key = `/_tags/${tagName}`;

const { data: tag, error } = await useAsyncData(key, () =>
  queryContent(key).findOne()
);

const textRef = ref<HTMLDivElement | undefined>();

const isShowAll = computed(() => {
  if (textRef.value) {
    const lineHeight = parseInt(
      window.getComputedStyle(textRef.value).lineHeight
    );
    const maxHeight = lineHeight * 2; // Assuming 2 lines of text
    return textRef.value.clientHeight >= maxHeight;
  }
  return false;
});

onMounted(() => {});

const showFullText = () => {
  // Show full text logic here
  console.log('showFullText', isShowAll.value);
};

// const items = ref([]);
</script>

<template>
  <div class="flex flex-row max-w-screen-xl gap-4 mx-auto mt-8">
    <aside class="flex flex-col w-48">
      <!-- <TagNav /> -->

      <TagList class="flex flex-col gap-2">
        <template v-slot="{ item }">
          <a
            :href="item._path"
            class="flex flex-row items-center justify-between py-1"
          >
            <h3 class="flex flex-row items-center text-sm">
              <Icon :name="item.icon" class="size-4" />
              <span class="mx-2">{{ item.title }}</span>
            </h3>
            <div class="flex flex-row items-center gap-1">
              <span class="text-slate-400">{{ item.count }}</span>
              <Arrow dir="right" class="size-3" />
            </div>
          </a>
        </template>
      </TagList>
    </aside>

    <article class="flex flex-col flex-1 gap-4">
      <header>tag :{{ tag == null }}</header>

      <div>error[{{ key }}]:{{ error }}</div>

      <section v-if="tag">
        <UCard :title="tag.title || params.id">
          <template #header>
            <div class="flex flex-col gap-2">
              <h3>
                <Icon :name="tag.icon" class="mr-2 size-4" />
                <span>{{ tag.title || params.id }}</span>
              </h3>
              <p class="text-sm text-gray-600">{{ tag.description }}</p>
            </div>
          </template>
          <div
            ref="textRef"
            class="relative prose dark:prose-dark"
            :class="{ 'line-clamp-2': !isShowAll }"
          >
            <ContentRenderer :value="tag">
              <!-- <h1>{{ tag.title }}</h1> -->
              <ContentRendererMarkdown :value="tag" />
              <a
                v-if="isShowAll"
                class="absolute bottom-0 right-0"
                @click="showFullText"
                >show more</a
              >
            </ContentRenderer>
          </div>
        </UCard>
      </section>

      <section>
        <ul class="grid grid-cols-1 gap-4">
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
                      <!-- <TagItem
                        v-for="tag in item.tags"
                        :value="tag"
                        :key="tag"
                        v-slot="{ tag: tagInfo }"
                      >
                        <Icon
                          v-if="tagInfo.icon"
                          :name="tagInfo.icon"
                          class="size-4"
                        ></Icon>
                        <span v-else>{{ tagInfo.title }}</span>
                      </TagItem> -->
                    </div>
                  </h3>
                  <div class="text-sm text-gray-600">
                    <p class="line-clamp-2 min-h-10">
                      {{ item.description || item.title }}
                    </p>
                  </div>
                  <div
                    class="flex flex-row-reverse justify-between py-1 text-xs"
                  >
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
      </section>
    </article>
  </div>
</template>
