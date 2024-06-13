<script lang="ts" setup>
const setctions = ref([
  {
    title: '站点地图',
    description: '“山重水复疑无路,柳暗花明又一村。”——陆游《游山西村》',
    items: [
      {
        url: '/sitemap.xml',
        title: '站点地图',
        target: '_blank',
      },
      {
        url: 'https://www.tasao.com',
        title: 'Tasao.com',
        target: '_blank',
      },
    ],
  },
  {
    title: '开发插件',
    description: '“工欲善其事,必先利其器”——《论语·卫灵公》',
    items: [
      {
        url: 'https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss',
        title: 'bradlc.vscode-tailwindcss',
        target: '_blank',
      },
      {
        url: 'https://marketplace.visualstudio.com/items?itemName=voorjaar.windicss-intellisense',
        title: 'windicss-intellisense',
        target: '_blank',
      },
      {
        url: 'https://marketplace.visualstudio.com/items?itemName=Nuxt.mdc',
        title: 'Nuxt.mdc',
        target: '_blank',
      },
    ],
  },
  {
    title: '个人链接',
    description: '“不积跬步,无以至千里；不积小流,无以成江海。”——荀子',
    items: [
      {
        url: 'https://github.com/iczp',
        title: 'github',
        target: '_blank',
      },
      {
        url: 'https://www.nuget.org/packages?q=IczpNet',
        title: 'Nuget',
        target: '_blank',
      },
    ],
  },
  {
    title: '友情链接',
    description: '“莫愁前路无知己,天下谁人不识君。”——高适《别董大》',
    items: [
      {
        url: 'https://ui.nuxt.com/components/card',
        title: 'Nuxt-UI',
        target: '_blank',
      },
      {
        url: 'https://tailwindcss.com/docs/letter-spacing',
        title: 'Tailwind',
        target: '_blank',
      },
      {
        url: 'https://tailwind.nodejs.cn/docs/dark-mode',
        title: 'Tailwind中文',
        target: '_blank',
      },
      {
        url: 'https://icones.js.org/collection/mdi',
        title: 'Materia Icons',
        target: '_blank',
      },
    ],
  },
]);
</script>

<template>
  <footer
    class="box-border flex flex-col max-w-screen-xl mx-auto app-footer"
  >
    <UCard class="p-0">
      <main
        class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 border-dark-300"
      >
        <section v-for="(section, index) in setctions">
          <h3 class="py-2 text-lg">{{ section.title }}</h3>
          <p class="text-xs text-gray-500">{{ section.description }}</p>
          <ul>
            <li v-for="item in section.items" :key="item.url" class="py-1">
              <a :href="item.url" :target="item.target">{{ item.title }}</a>
            </li>
          </ul>
        </section>
      </main>
    </UCard>
    <Copyright />
  </footer>
</template>

<style scoped>
.app-footer a {
  @apply text-sky-700 ;
}
.app-footer a:hover {
  @apply text-sky-500 underline;
}
</style>
