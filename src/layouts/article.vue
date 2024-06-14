<template>
  <Layout>
    <main
      class="flex flex-row items-stretch w-full max-w-screen-xl gap-8 mx-auto mt-8"
    >
      <ContentSilder class="pr-8 border-r w-72 border-slate-200 dark:border-slate-800" />

      <slot>
        <ContentDoc
          class="w-full space-y-4 prose no-underline max-w-none prose-dark prose-headings:no-underline prose-a:no-underline hover:prose-a:underline dark:prose-dark"
        />
      </slot>
    </main>
  </Layout>
</template>
