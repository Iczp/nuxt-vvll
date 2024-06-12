<template>
  <main>
    <nav>
      <ContentNavigation v-slot="{ navigation }">
        <ul>
          <li v-for="link of navigation" :key="link._path">
            <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
          </li>
        </ul>
      </ContentNavigation>
    </nav>
    <h1 class="bg-red-600 p-4">Article Layout</h1>
    <ul>
      <li>
        <NuxtLink to="/">HOME</NuxtLink>
      </li>
    </ul>
    <slot></slot>
  </main>
</template>
