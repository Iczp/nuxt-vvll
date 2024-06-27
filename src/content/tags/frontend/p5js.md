---
name: p5js
title: p5js
icon: skill-icons:p5js
description: p5.js 是一个强大且易于使用的 JavaScript 库，专为创意编程和艺术项目设计。它简化了图形绘制、交互处理和动画制作，使得即使是编程初学者也能快速上手并创作出丰富多彩的作品。通过其广泛的功能和社区支持，p5.js 成为创意编码领域的重要工具。
---

## p5js

:Icon{name=logos:p5js .size-32}

p5.js 是一个开源的 JavaScript 库，旨在通过简化 HTML5 Canvas 的操作，帮助艺术家、设计师、教育者和初学者更轻松地创建图形、交互和动画作品。p5.js 是 Processing 项目的 JavaScript 版本，它继承了 Processing 易于使用的理念，使得编程艺术和创意编码变得更加直观和有趣。

### 主要特点和功能

1. **简化的图形绘制**：
   p5.js 提供了一组易于使用的函数，用于绘制基本的图形和形状，如线条、矩形、椭圆、弧形等。它隐藏了复杂的 Canvas API，使得绘图变得简单。

   ```javascript
   function setup() {
     createCanvas(400, 400);
   }

   function draw() {
     background(220);
     ellipse(200, 200, 50, 50);
   }
   ```

2. **丰富的交互功能**：
   p5.js 提供了大量的事件处理函数，使得处理用户交互（如鼠标、键盘）变得容易。

   ```javascript
   function setup() {
     createCanvas(400, 400);
   }

   function draw() {
     background(220);
   }

   function mousePressed() {
     ellipse(mouseX, mouseY, 50, 50);
   }
   ```

3. **动画和实时更新**：
   使用 `setup` 和 `draw` 函数，可以轻松创建动画。`draw` 函数会被连续调用，从而更新画面。

   ```javascript
   function setup() {
     createCanvas(400, 400);
   }

   function draw() {
     background(220);
     ellipse(mouseX, mouseY, 50, 50);
   }
   ```

4. **支持多媒体**：
   p5.js 支持加载和操作图像、视频、音频等多媒体内容，适用于创意多媒体项目。

   ```javascript
   let img;

   function preload() {
     img = loadImage('path/to/image.jpg');
   }

   function setup() {
     createCanvas(400, 400);
   }

   function draw() {
     image(img, 0, 0);
   }
   ```

5. **扩展和插件**：
   p5.js 拥有大量的插件和扩展库，如 p5.sound、p5.dom 等，提供了更多的功能和特性。

### 使用方法

1. **引入 p5.js**：
   可以通过 HTML 文件中的 `<script>` 标签引入 p5.js：

   ```html
   <!DOCTYPE html>
   <html>
     <head>
       <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.js"></script>
     </head>
     <body>
       <script>
         function setup() {
           createCanvas(400, 400);
         }

         function draw() {
           background(220);
         }
       </script>
     </body>
   </html>
   ```

2. **基本结构**：
   p5.js 程序通常包含 `setup` 和 `draw` 两个主要函数：
   - `setup`：在程序开始时运行一次，用于初始化设置。
   - `draw`：连续运行，用于绘制和更新画面。

### 常用功能示例

1. **绘制基本形状**：

   ```javascript
   function setup() {
     createCanvas(400, 400);
     background(220);
     // 画线
     line(50, 50, 350, 50);
     // 画矩形
     rect(50, 100, 300, 200);
     // 画椭圆
     ellipse(200, 350, 100, 50);
   }
   ```

2. **处理用户输入**：

   ```javascript
   function setup() {
     createCanvas(400, 400);
   }

   function draw() {
     background(220);
   }

   function keyPressed() {
     if (key == 'a') {
       background('red');
     } else if (key == 'b') {
       background('blue');
     }
   }
   ```

3. **加载和显示图像**：

   ```javascript
   let img;

   function preload() {
     img = loadImage('path/to/image.jpg');
   }

   function setup() {
     createCanvas(400, 400);
   }

   function draw() {
     background(220);
     image(img, 0, 0, width, height);
   }
   ```

### 总结

p5.js 是一个强大且易于使用的 JavaScript 库，专为创意编程和艺术项目设计。它简化了图形绘制、交互处理和动画制作，使得即使是编程初学者也能快速上手并创作出丰富多彩的作品。通过其广泛的功能和社区支持，p5.js 成为创意编码领域的重要工具。
