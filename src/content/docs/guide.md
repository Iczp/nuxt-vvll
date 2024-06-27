---
title: VVLL.NET 部署指南
tags: github
---

## 指南

### 静态部署

打开更目录（目录下有 `package.json`），并不是`/src`

#### 1. 生成网站

```sh
npm run generate
```

#### 2. 推送到 Github Action

```sh
npm run deploy
```

```sh
> vvll.net@0.0.1 deploy
> gh-pages -d dist --repo https://github.com/Iczp/Iczp.github.io.git

Published
(base) PS F:\Dev\VVLL\nuxt-vvll>
```

### 服务器部署(服务端渲染 SSR)

```sh
npm run build
```

之后

```
npx serve .output/public
```

### 预览

```sh
npm run preview
```

或

```sh
npx serve .output/public
```

## 部署到 Vercel

打开 https://vercel.com 注册或是用 Github 登录



