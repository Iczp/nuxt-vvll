<script lang="ts" setup>
//
</script>

<template>
  <Layout>
    <main class="flex flex-col max-w-screen-xl gap-4 m-4 mx-auto">
      <UCard>
        <slot></slot>
      </UCard>

      <PkgInfo />
    </main>
  </Layout>
</template>
