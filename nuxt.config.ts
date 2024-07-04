import { resolve } from 'path';
import { resolveContentFiles } from './src/utils/traverseDirectory';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    port: 3456,
  },
  ssr: true,
  srcDir: 'src',
  // appDir: 'src',
  devtools: { enabled: true },
  css: [
    // '/css/scroller.css',
    // '/css/main.css',
    // '~/assets/css/main.css',
  ],
  app: {
    baseURL: '/',
    rootId: 'vvll-net',
    buildAssetsDir: 'static',
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: '/css/scroller.css', // 引用生成的静态样式文件
        },
      ],
      script: [
        // 百度统计
        { src: 'https://hm.baidu.com/hm.js?2a59a39629cd35dc4ec0cf17b9304e0b' },
      ],
    },
  },
  runtimeConfig: {
    githubClientId: process.env.GITHUB_CLIENT_ID,
    githubClientSecret: process.env.GITHUB_CLIENT_SECRET,
    public: {
      githubClientId: process.env.GITHUB_CLIENT_ID,
      contentFiles: resolveContentFiles('./src/content'),
    },
  },
  components: {
    /**
     * 要禁用自动导入的话，components.dirs设置为空数组
     * 但请注意，这不会影响模块添加的组件
     */
    // dirs: [],
    global: true,
    dirs: ['~/components', '~/components-mdc', '~/logos', '~/types'],
  },
  modules: [
    //
    '@nuxt/content',
    '@nuxt/ui',
    '@vueuse/nuxt',
    'nuxt-icon',
    '@pinia/nuxt',
  ],
  experimental: {
    payloadExtraction: false, // 取消生成 _payload.js
  },
  content: {
    navigation: {
      fields: [
        'author',
        'date',
        'tags',
        'categories',
        'description',
        'title',
        'icon',
      ],
    },
    experimental: {
      // stripQueryParameters: true,
      // advanceQuery: true,

      clientDB: true,
      search: {
        indexed: true,
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
    api: {
      baseURL: '/api/content',
    },
    documentDriven: true,
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
    highlight: {
      // Theme used in all color schemes.
      // theme: 'github-light',
      // OR
      theme: {
        // Default theme (same as single string)
        // github-light | github-dark
        default: 'github-dark',
        // Theme used if `html.dark`
        dark: 'github-dark',
        // Theme used if `html.sepia`
        sepia: 'monokai',
      },
      langs: [
        'diff',
        'bash',
        'ts',
        'js',
        'java',
        'javascript',
        'cmd',
        'json',
        'css',
        'less',
        'scss',
        'sass',
        'html',
        'json5',
        'yaml',
        'vue',
        'csharp',
        'c#',
        'xml',
        'sh',
        'mermaid',
        'dart',
        'vue-html',
        'markdown',
        'toml',
        'swift',
      ],
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  tailwindcss: {
    cssPath: ['~/assets/css/main.css', { injectPosition: 'first' }],
    configPath: 'tailwind.config',
    exposeConfig: {
      level: 2,
    },
    config: {},
    viewer: true,
  },
  colorMode: {
    preference: 'system', // system | light | dark, default value of $colorMode.preference
    fallback: '', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'theme-mode',
  },
  routeRules: {
    '/': { prerender: true },
    '/about': { prerender: true },
    // '/author': { prerender: true },
    '/authors/**': { prerender: true },
    '/tags': { prerender: true },
    '/tags/**': { prerender: true },
    '/notes/**': { prerender: true },
    '/notes': { prerender: true },
    '/sub/**': { prerender: true },

    '/author': { prerender: false },
    '/_index': { prerender: false },
    // '/notes/js': { prerender: false },

    '/sub': { prerender: false },
    '/lab/**': { prerender: false },
  },
  nitro: {
    prerender: {
      routes: [
        // '/tags/vue',
        '/sitemap.xml',
      ],
    },
  },
  // generate: {

  //   routes: ['/tags/vue'],
  // },
});
