<template>
  <!-- <NuxtLayout> -->
    <main class="flex flex-col flex-1">
      <ContentDoc :excerpt="true">
        <template v-slot="{ doc, excerpt }">
          <!-- {{ doc }} -->
          <article
            class="w-full max-w-none space-y-12 prose prose-dark no-underline prose-headings:no-underline prose-a:no-underline hover:prose-a:underline dark:prose-dark"
          >
            <ContentRenderer :value="doc" />
          </article>
        </template>
        <template #not-found>
          <h1>Document not found!!!</h1>
        </template>
        <template #empty>
          <h1>Document is empty</h1>
        </template>
      </ContentDoc>
    </main>
  <!-- </NuxtLayout> -->
</template>
