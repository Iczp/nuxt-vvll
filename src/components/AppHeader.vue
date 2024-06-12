<template>
  <nav>
    <ContentNavigation v-slot="{ navigation }">
      <ul>
        <li>
          <NuxtLink to="/">HOME</NuxtLink>
        </li>
        <li v-for="link of navigation" :key="link._path">
          <NuxtLink :to="link._path + (link.children ? '/' : '')">
            {{ link.title }}
          </NuxtLink>
        </li>
      </ul>
    </ContentNavigation>
  </nav>

  <aside>
    <ThemeMode />
  </aside>
</template>
