---
title: 在 Vercel 部署 Nuxt.js 应用程序
icon: material-symbols:deployed-code
tags: vercel,nuxtjs
date: 2024-06-27
description: 在 Vercel 部署 Nuxt.js 应用程序
---

在 Vercel 部署 Nuxt.js 应用程序可以通过几个简单的步骤完成。以下是详细的步骤指南：

### 准备 Nuxt.js 项目

1. **创建一个 Nuxt.js 项目**：
   如果你还没有 Nuxt.js 项目，可以使用以下命令创建一个新项目：

   ```bash
   npx create-nuxt-app my-nuxt-app
   cd my-nuxt-app
   ```

2. **安装依赖**：
   确保所有依赖都已安装：
   ```bash
   npm install
   ```

### 配置 Nuxt.js 项目

1. **更新 `nuxt.config.js`**：
   确保你的 `nuxt.config.js` 文件中包含以下配置，以便 Nuxt.js 以静态站点生成模式运行：
   ```javascript
   export default {
     target: 'static', // default is 'server'
     ssr: true, // default is true
   };
   ```

### 部署到 Vercel

1. **安装 Vercel CLI**：
   如果你还没有安装 Vercel CLI，可以使用以下命令安装：

   ```bash
   npm install -g vercel
   ```

2. **登录 Vercel**：
   使用你的 Vercel 账户登录：

   ```bash
   vercel login
   ```

3. **部署到 Vercel**：
   在你的 Nuxt.js 项目目录中运行以下命令：

   ```bash
   vercel
   ```

   你将会被提示输入一些配置信息，比如项目名称和是否与现有项目关联。按照提示完成配置。

4. **更新项目设置**：
   你可能需要更新一些默认的设置以确保项目正确部署。Vercel 会自动检测并配置你的 Nuxt.js 项目，但是你可以在 Vercel 仪表盘中检查并修改配置。

### 配置 Nuxt.js 应用程序以适应 Vercel 平台

1. **添加构建和输出目录配置**：
   更新 `nuxt.config.js` 以确保构建和输出目录正确配置：

   ```javascript
   export default {
     target: 'static',
     ssr: true,
     generate: {
       dir: 'public', // for Vercel
     },
   };
   ```

2. **创建 `vercel.json` 文件**：
   在项目根目录下创建一个 `vercel.json` 文件，配置构建和输出设置：
   ```json
   {
     "builds": [
       {
         "src": "nuxt.config.js",
         "use": "@vercel/static-build",
         "config": {
           "distDir": "public"
         }
       }
     ],
     "routes": [
       {
         "src": "/(.*)",
         "dest": "/index.html"
       }
     ]
   }
   ```

### 验证部署

1. **访问 Vercel 项目 URL**：
   部署完成后，你会得到一个 Vercel 提供的项目 URL。访问这个 URL，确保你的 Nuxt.js 应用程序正确运行。

### 其他注意事项

- **环境变量**：如果你的项目使用环境变量，确保在 Vercel 仪表盘上正确配置这些变量。
- **自定义域名**：如果你有自定义域名，可以在 Vercel 仪表盘中进行配置。

通过上述步骤，你应该能够成功地在 Vercel 上部署你的 Nuxt.js 应用程序。如果遇到任何问题，可以参考 Vercel 和 Nuxt.js 的官方文档以获得更多帮助。

### 参考

> https://vercel.com

> https://nuxt.com

> http://nuxt-vvll.vercel.com
