---
layout: article
---

# Nuxt3 中使用 Tailwind CSS

1. ## 创建项目

   如果您尚未设置 Nuxt 项目，请先创建一个新的 Nuxt 项目。最常见的方法是使用[Nuxt 命令行界面](https://nuxt.com/docs/getting-started/installation)。

   终端

   ```
   npx nuxi init my-projectcd my-project
   ```

2. ## 安装 Tailwind CSS

   通过 npm 安装`tailwindcss`及其对等依赖项，然后运行 init 命令生成文件`tailwind.config.js`。

   终端

   ```
   npm install -D tailwindcss postcss autoprefixernpx tailwindcss init
   ```

3. ## 将 Tailwind 添加到你的 PostCSS 配置中

   将`tailwindcss`和添加`autoprefixer`到文件中的对象。 ` postcss.plugins``nuxt.config.js `

   nuxt.config.js

   ```
   // https://nuxt.com/docs/api/configuration/nuxt-config
   export default defineNuxtConfig({
     devtools: { enabled: true },
     postcss: {
       plugins: {
         tailwindcss: {},
         autoprefixer: {},
       },
     },
   })
   ```

4. ## 配置模板路径

   在您的文件中添加所有模板文件的路径`tailwind.config.js` 。

   tailwind.config.js

   ```
   /** @type {import('tailwindcss').Config} */
   module.exports = {
     content: [
       "./components/**/*.{js,vue,ts}",
       "./layouts/**/*.vue",
       "./pages/**/*.vue",
       "./plugins/**/*.{js,ts}",
       "./app.vue",
       "./error.vue",
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   ```

5. ## 将 Tailwind 指令添加到你的 CSS

   创建一个`./assets/css/main.css`文件并`@tailwind` 为 Tailwind 的每个层添加指令。

   主.css

   ```
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

6. ## 全局添加 CSS 文件

   将新创建的内容添加`./assets/css/main.css`到文件`css`中的数组中`nuxt.config.js`。

   nuxt.config.js

   ```
   // https://nuxt.com/docs/api/configuration/nuxt-config
   export default defineNuxtConfig({
     devtools: { enabled: true },
     css: ['~/assets/css/main.css'],
     postcss: {
       plugins: {
         tailwindcss: {},
         autoprefixer: {},
       },
     },
   })
   ```

7. ## 开始构建过程

   使用 运行您的构建过程`npm run dev`。

   终端

   ```
   npm run dev
   ```

8. ## 开始在你的项目中使用 Tailwind

   开始使用 Tailwind 的实用程序类来设置您的内容样式。

   应用程序.vue

   ```
   <template>
     <h1 class="text-3xl font-bold underline">
       Hello world!
     </h1>
   </template>
   ```
