---
name: canvas
title: Canvas
icon: simple-icons:canvas
description: Canvas 是一个功能强大且灵活的图形绘制工具，适用于需要高性能和细粒度控制的图形应用。
date: 2024-07-02
---

## Canvas

:Icon{name=simple-icons:canvas .size-32}

Canvas 是一种用于在网页上绘制图形的 HTML 元素。它提供了一种通过 JavaScript 绘制图形、动画和其他渲染内容的方法。以下是关于 Canvas 的一些关键点：

### 特点

1. **基于像素**：Canvas 是一个逐像素进行绘制的图形表面，与 SVG 的矢量图形不同。
2. **高性能**：适用于需要频繁更新的图形内容，如游戏和动态数据可视化。
3. **广泛支持**：被所有现代浏览器支持，适用于各种设备和平台。

### 基本用法

使用 Canvas 绘图通常分两步：

1. 在 HTML 中定义一个`<canvas>`元素。
2. 使用 JavaScript 来访问和操作这个 Canvas 元素的绘图上下文。

### 示例

以下是一个简单的例子，展示如何在 Canvas 上绘制一个矩形：

**HTML**：

```html
<canvas
  id="myCanvas"
  width="200"
  height="100"
  style="border:1px solid #000000;"
></canvas>
```

**JavaScript**：

```javascript
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// 绘制一个填充的矩形
ctx.fillStyle = '#FF0000';
ctx.fillRect(20, 20, 150, 100);
```

在这个例子中：

- `<canvas>`元素在 HTML 中定义了一个宽 200 像素、高 100 像素的绘图区域，并添加了一个边框。
- JavaScript 代码中，`getContext('2d')`方法获取了 2D 绘图上下文，它提供了许多用于绘图的方法。
- `fillStyle`属性设置了填充颜色。
- `fillRect`方法绘制了一个填充矩形，位置为(20, 20)，尺寸为 150x100 像素。

### 常用方法

Canvas 的 2D 上下文提供了许多绘图方法，包括：

- `fillRect(x, y, width, height)`：绘制填充矩形。
- `strokeRect(x, y, width, height)`：绘制矩形边框。
- `clearRect(x, y, width, height)`：清除矩形区域内容。
- `beginPath()`：开始新的路径。
- `moveTo(x, y)`：将路径的起点移动到指定位置。
- `lineTo(x, y)`：添加一个新点，并创建从该点到画布中最后指定点的线条。
- `arc(x, y, radius, startAngle, endAngle, anticlockwise)`：绘制弧线或圆。

### 动画

Canvas 还可以用来创建动画，通过定期重绘图像来实现。例如，使用`requestAnimationFrame`来创建平滑的动画效果。

```javascript
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // 绘制动画帧
  requestAnimationFrame(draw);
}

draw();
```

Canvas 是一个功能强大且灵活的图形绘制工具，适用于需要高性能和细粒度控制的图形应用。
