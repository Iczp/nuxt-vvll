import { resolve } from 'path';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src',
  appDir: 'src',
  devtools: { enabled: true },
  app: {
    buildAssetsDir: 'static',
  },
  modules: ['@nuxt/content'],
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
    documentDriven: {
      layoutFallbacks: ['article'],
      // page: true, // Keep page fetching enabled
      // surround: false, // Disable surround fetching
    },
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
  routeRules: {
    '/': { prerender: true },
    '/sub/**': { prerender: true },
  },
});
