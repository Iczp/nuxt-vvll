<template>
  <Layout>
    <div class="mx-auto mt-8 text-center">
      <h1>Layout:Article</h1>
    </div>
    <main
      class="flex flex-col items-stretch w-full max-w-screen-xl gap-6 px-4 mx-auto mt-8 md:flex-row"
    >
      <ContentSilder
        class="md:pr-6 md:border-r border-slate-200 dark:border-slate-800 md:flex min-w-72"
      />

      <slot>
        <ContentDoc
          class="space-y-4 prose no-underline max-w-none prose-dark prose-headings:no-underline prose-a:no-underline hover:prose-a:underline dark:prose-dark"
        />
      </slot>
    </main>
  </Layout>
</template>
