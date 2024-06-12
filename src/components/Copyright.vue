<template>
  <section class="flex justify-center p-6 copyright">
    <p>
      ©2014-{{ new Date().getFullYear() }} Created by
      <a href="https://www.iczp.net" target="_blank">IczpNet</a>
    </p>
  </section>
</template>

<style>
.copyright a {
  @apply no-underline;
}
.copyright a:hover {
  @apply underline;
}
</style>
