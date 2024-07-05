---
title: ClientJS 和 FingerprintJS 区别
tags: js,ts,npm
author: iczp
date: 2024-07-05
description: 如何使用 ClientJS 和 FingerprintJS 生成设备指纹。
---

ClientJS 和 FingerprintJS 是两个用于设备指纹识别的 JavaScript 库。虽然它们的目的相似，都用于在不使用 cookies 的情况下识别用户设备，但它们有一些关键的区别：

## ClientJS

### ClientJS 介绍

1. **开发者**：ClientJS 由 Jack D. Nance 开发。
2. **特点**：
   - **功能范围**：ClientJS 提供了一系列方法来收集浏览器和设备信息，包括操作系统、浏览器版本、用户代理、屏幕分辨率、语言设置等。
   - **实现**：它通过收集这些信息并生成一个唯一的设备指纹来识别用户。
   - **易用性**：ClientJS 相对简单，易于集成和使用，但可能在某些情况下其唯一性和准确性不如 FingerprintJS 高。
   - **库大小**：通常较小，适合不需要高度复杂指纹的应用。

### ClientJS 使用方法

1. **安装 ClientJS**：
   你可以直接从 CDN 引入 ClientJS，也可以使用 npm 安装它。

   #### **使用 CDN**：

   ```html
   <script src="https://cdn.jsdelivr.net/npm/clientjs@0.1.11/dist/client.min.js"></script>
   ```

   #### **使用 npm**：

   ```bash
   npm install clientjs
   ```

2. **生成设备指纹**：
   使用 ClientJS 生成设备指纹非常简单。以下是一个示例：

   #### **HTML 示例**：

   ```html
   <!DOCTYPE html>
   <html>
     <head>
       <title>ClientJS Example</title>
       <script src="https://cdn.jsdelivr.net/npm/clientjs@0.1.11/dist/client.min.js"></script>
     </head>
     <body>
       <script>
         // 创建 ClientJS 对象
         var client = new ClientJS();

         // 获取设备指纹
         var fingerprint = client.getFingerprint();

         // 显示设备指纹
         console.log('Device Fingerprint:', fingerprint);
       </script>
     </body>
   </html>
   ```

   #### **Node.js 示例**：

   ```javascript
   const ClientJS = require('clientjs');

   // 创建 ClientJS 对象
   const client = new ClientJS();

   // 获取设备指纹
   const fingerprint = client.getFingerprint();

   // 显示设备指纹
   console.log('Device Fingerprint:', fingerprint);
   ```

## FingerprintJS

### FingerprintJS 介绍

1. **开发者**：FingerprintJS 是由 Valentin Vasilyev 和团队开发，并由 FingerprintJS, Inc. 维护。
2. **特点**：
   - **功能范围**：FingerprintJS 提供了更为复杂和全面的指纹识别功能。它不仅收集浏览器和设备信息，还使用多种技术（如 canvas 指纹、WebGL 指纹、音频指纹等）来提高指纹的唯一性和准确性。
   - **实现**：它利用多种复杂技术生成高度唯一的设备指纹，从而能够更准确地识别用户。
   - **商业支持**：FingerprintJS 提供了开源版本和商业版本。商业版本（Fingerprint Pro）提供了额外的功能，如更高的准确性、更好的隐私保护以及技术支持。
   - **库大小**：由于其功能的复杂性，FingerprintJS 通常比 ClientJS 更大，但也更强大。

### FingerprintJS 使用方法

1. **安装 FingerprintJS**：
   你可以直接从 CDN 引入 FingerprintJS，也可以使用 npm 安装它。

   #### **使用 CDN**：

   ```html
   <script src="https://cdn.jsdelivr.net/npm/@fingerprintjs/fingerprintjs@3/dist/fp.min.js"></script>
   ```

   #### **使用 npm**：

   ```bash
   npm install @fingerprintjs/fingerprintjs
   ```

2. **生成设备指纹**：
   使用 FingerprintJS 生成设备指纹的方法如下：

   #### **HTML 示例**：

   ```html
   <!DOCTYPE html>
   <html>
     <head>
       <title>FingerprintJS Example</title>
       <script src="https://cdn.jsdelivr.net/npm/@fingerprintjs/fingerprintjs@3/dist/fp.min.js"></script>
     </head>
     <body>
       <script>
         // 初始化 FingerprintJS
         const fpPromise = FingerprintJS.load();

         // 获取设备指纹
         fpPromise
           .then((fp) => fp.get())
           .then((result) => {
             // 显示设备指纹
             console.log('Device Fingerprint:', result.visitorId);
           });
       </script>
     </body>
   </html>
   ```

   #### **Node.js 示例**：

   ```javascript
   const FingerprintJS = require('@fingerprintjs/fingerprintjs');

   // 初始化 FingerprintJS
   const fpPromise = FingerprintJS.load();

   // 获取设备指纹
   fpPromise
     .then((fp) => fp.get())
     .then((result) => {
       // 显示设备指纹
       console.log('Device Fingerprint:', result.visitorId);
     });
   ```

## 主要区别总结

- **复杂性与功能**：FingerprintJS 比 ClientJS 更复杂，提供了更多的识别技术和更高的准确性。
- **使用场景**：如果需要简单的设备识别，ClientJS 可能已经足够。如果需要高度准确和唯一的识别，特别是在安全性要求高的场景下，FingerprintJS 是更好的选择。
- **商业支持**：FingerprintJS 提供了商业支持和高级功能，而 ClientJS 则是一个简单的开源项目。

选择使用哪个库应根据具体需求来决定。如果项目对设备指纹的准确性和唯一性有较高要求，可以考虑使用 FingerprintJS；如果只是需要基本的设备识别功能，可以选择 ClientJS。
