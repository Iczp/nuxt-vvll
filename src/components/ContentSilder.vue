<script setup lang="ts">
const { metaSymbol } = useShortcuts();

const isOpen = ref(false);

defineShortcuts({
  meta_k: {
    usingInput: true,
    handler: () => {
      // console.log(isOpen.value);

      isOpen.value = !isOpen.value;
    },
    escape: {
      usingInput: true,
      whenever: [isOpen],
      handler: () => {
        isOpen.value = false;
      },
    },
  },
});
</script>

<template>
  <main class="flex flex-col flex-shrink-0 break-words">
    <!-- <header class="sticky top-4 z-10 p-0.5 rounded-lg dark:bg-slate-800">
      <UModal v-model="isOpen">
        <UCard>UCard</UCard>
      </UModal>
      <UInput
        icon="i-heroicons-magnifying-glass-20-solid"
        size="md"
        color="sky"
        :trailing="false"
        placeholder="Search..."
      >
        <template #trailing>
          <div class="flex items-center gap-1">
            <UKbd>{{ metaSymbol }}</UKbd>
            <UKbd>K</UKbd>
          </div>
        </template>
      </UInput>
    </header> -->

    <!-- <h2 class="my-4">文单目录</h2> -->
    <nav class="">
      <NavTrees path="/" />
    </nav>

    <footer></footer>
  </main>
</template>
