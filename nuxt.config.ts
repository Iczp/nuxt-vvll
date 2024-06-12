import { resolve } from 'path';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src',
  appDir: 'src',
  devtools: { enabled: true },
  css: [
    // '/css/main.css',
    '~/assets/css/main.css',
  ],
  app: {
    buildAssetsDir: 'static',
    head: {
      link: [
        // {
        //   rel: 'stylesheet',
        //   href: '~/assets/css/main.css', // 引用生成的静态样式文件
        // },
      ],
    },
  },
  modules: [
    //
    '@nuxt/content',
    '@nuxt/ui',
    '@vueuse/nuxt',
    'nuxt-icon',
  ],
  content: {
    navigation: {
      fields: ['author', 'date', 'tags', 'categories', 'description', 'title'],
    },
    experimental: {
      // stripQueryParameters: true,
      // advanceQuery: true,
      clientDB: true,
      search: {
        indexed: false,
        options: {
          fields: [
            'title',
            'description',
            'tags',
            'categories',
            'author',
            'date',
          ],
        },
      },
    },
    // api: {
    //   baseURL: '/api/content',
    // },
    // documentDriven: true,
    // documentDriven: {
    //   layoutFallbacks: ['article'],
    //   // page: true, // Keep page fetching enabled
    //   // surround: false, // Disable surround fetching
    // },
    markdown: {
      toc: {
        depth: 5,
        searchDepth: 5,
      },
    },
    sources: {
      // content: {
      //   driver: 'fs',
      //   prefix: '/docs', // All contents inside this source will be prefixed with `/notes`
      //   base: resolve(__dirname, './content'),
      // },
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  routeRules: {
    // '/': { prerender: true },
    // '/tags/**': { prerender: true },
  },
  // nitro: {
  //   prerender: {
  //     routes: ['/tags/vue'],
  //   },
  // },
  generate: {
    
    routes: ['/tags/vue'],
  },
});
