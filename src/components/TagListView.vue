<template>
  <div class="w-full m-0 tags">
    <TagList
      class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      <template v-slot="{ item }">
        <a
          :href="item._path?.replace('/_tags/', '/tags/')"
          class="flex flex-col gap-2 p-4 card hover:card-hover not-prose"
        >
          <h3 class="flex flex-row items-center text-lg not-porse">
            <Icon v-if="item.icon" :name="item.icon" class="size-6" />
            <span class="mx-2 truncate">{{ item.title }}</span>
            <span class="text-sm text-slate-400">({{ item.count }})</span>
          </h3>
          <p
            class="text-sm !text-slate-400 dark:!text-slate-600 line-clamp-2 min-h-10 not-porse"
          >
            {{ item.description }}
          </p>
        </a>
      </template>
    </TagList>
  </div>
</template>
