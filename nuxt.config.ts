import { resolve } from 'path';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src',
  appDir: 'src',
  devtools: { enabled: true },
  modules: ['@nuxt/content'],
  content: {
    sources: {
      content: {
        driver: 'fs',
        prefix: '/docs', // All contents inside this source will be prefixed with `/notes`
        base: resolve(__dirname, './content'),
      },
    },
  },
  routeRules: {
    '/': { prerender: true },
    '/sub/**': { prerender: true },
  },
});
