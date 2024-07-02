<template>
  <div class="flex w-full gap-4 min-h-96">
    <div class="flex flex-1">
      <textarea
        class="w-full h-full border border-gray-400"
        v-model="value"
      ></textarea>
    </div>
    <div class="flex flex-1 card">
      <svg
        class="flex flex-1 w-full h-full text-slate-100 h-1/2"
        ref="svgRef"
        @click="svgClick"
      ></svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUpdated } from 'vue';
import { Markmap } from 'markmap-view';
import { loadJS, loadCSS } from 'markmap-common';
import { Transformer } from 'markmap-lib';

const transformer = new Transformer();
const { scripts, styles } = transformer.getAssets();

const svgClick = (e: any) => {
  console.log('svgClick', e);
};
const initValue = `# VVLL.NET
- 智能AI
- 数据库
    - EdgeDB
    - MongoDB
    - Microsoft Sqlserver
    - MySql
    - Oracle
    - PostgreSQL
    - Redis
    - Sqlite
- 部署/构建
    - Docker
    - Github Actions
    - Kubernetes
    - Vercel
- 前端技术
    - AngularJS
    - Animate.css
    - Axios
    - CSS
    - D3.js
    - Day.js
    - Electron
    - ESLint
    - Iconify
    - jQuery
    - Moment.js
    - NestJS
    - Nodejs
    - NPM
    - Nuxt
    - p5js
    - PandaCSS
    - Pnpm
    - PostCSS
    - Prettier
    - React
    - TailwindCSS
    - Vite
    - Vue
    - VueUse
    - Yarn
- 编程语言
    - C#
    - Dart
    - Go 语言
    - Java
    - Javascript
    - Python
    - Regex
    - SQL
    - Typescript
- 移动端开发
    - Flutter
    - Ionic
    - 微信小程序
    - React Native
    - Uniapp
- 操作系统
    - Android
    - CentOS
    - HarmonyOS
    - iOS
    - Linux
    - macOS
    - Ubuntu
    - Windows
- 网站
- 文本格式
    - H5
    - HTML
    - Json
    - Json5
    - Markdown
    - Mermaid
    - XML
    - XSL
    - YAML
- 开发工具
    - Vue
    - Nuxt
    - Vite
    - npm
    - pnpm
    - yarn
- 后端开发
    - ASP.NET Boilerplate
    - Abp vNext
    - Entity Framework Core
    - Elasticsearch
    - Graphql
    - Hangfire
    - JWT
    - MinIO
    - .Net
    - .Net Core
    - Nuget
    - OAuth
    - Prisma
    - Quartz
    - RabbitMQ
    - Swagger
    - TypeORM
    - WebSocket
`;

const svgRef = ref();
const value = ref(initValue);
let mm: any;

const update = () => {
  const { root } = transformer.transform(value.value);
  mm.setData(root);
  mm.fit();
};

onMounted(() => {
  loadCSS(styles!);
  loadJS(scripts!);
  mm = Markmap.create(svgRef.value);
  update();
});
onUpdated(update);
</script>

<style>
/* Add any necessary styling here */

.dark .markmap {
  --markmap-text-color: #fff;
}
</style>
