---
name: animate-css
title: Animate.css
icon: logos:css-3
description: Animate.css 是一个简单易用的 CSS 动画库，为网页设计师和开发者提供了丰富的动画效果，能够快速增添页面的视觉吸引力和交互性。通过 Animate.css，用户可以轻松地实现各种动态效果，改善用户体验，使网页内容更加生动和引人注目。
---

## Animate.css

:Icon{name=logos:css-3 .size-32}

Animate.css 是一个轻量级的 CSS 动画库，专门用于在网页上添加各种动画效果。它提供了一组预先定义好的动画类，通过简单地将这些类应用到 HTML 元素上，即可实现各种动态效果，无需编写复杂的 JavaScript 或 CSS 动画代码。以下是对 Animate.css 的详细介绍：

### 主要特点和功能

1. **预定义的动画效果**：
   Animate.css 包含了多种预定义的 CSS 动画效果，涵盖了常见的入场（进入）和出场（退出）动画，以及其他一些特效，如旋转、抖动、弹跳等。

2. **轻量级和易用性**：
   Animate.css 的文件大小较小，易于集成到现有的网页项目中。用户只需将需要的动画类应用到 HTML 元素上，即可快速实现动画效果，无需深入学习复杂的动画技术。

3. **跨浏览器兼容性**：
   Animate.css 经过广泛测试，能够在主流的现代浏览器（如 Chrome、Firefox、Safari、Edge 等）中良好运行，保证了动画效果的一致性和稳定性。

4. **自定义和扩展性**：
   尽管 Animate.css 提供了一组标准的动画效果，但用户仍可以通过修改现有的动画类或者添加自定义的 CSS 规则，来实现个性化的动画效果。

5. **适用于响应式设计**：
   Animate.css 的动画效果可以根据屏幕大小和设备类型进行调整和响应，使其在不同设备上都能呈现出优美的动态效果。

### 使用方法

1. **引入 Animate.css 文件**：
   在 HTML 文件中通过链接引入 Animate.css 文件，可以从官方网站直接下载或通过 CDN 获取：

   ```html
   <link
     rel="stylesheet"
     href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
   />
   ```

2. **应用动画类**：
   在需要添加动画效果的 HTML 元素上，添加相应的 Animate.css 类即可。例如，要为一个元素添加淡入动画效果，可以添加类名 `animate__animated animate__fadeIn`：

   ```html
   <div class="animate__animated animate__fadeIn">内容</div>
   ```

3. **触发动画**：
   Animate.css 的动画效果默认会在元素加载时自动触发。用户也可以通过 JavaScript 或添加特定的 CSS 类来手动触发或控制动画的开始和结束。

### 示例动画效果

Animate.css 提供了多种动画效果，以下是几个示例：

- `animate__fadeIn`：淡入动画效果，使元素逐渐显示。
- `animate__bounce`：弹跳效果，使元素以弹簧的方式反复弹跳。
- `animate__rotateIn`：旋转进入效果，使元素旋转并逐渐显示。
- `animate__slideOutLeft`：向左滑出效果，使元素向左侧滑动并消失。

### 总结

Animate.css 是一个简单易用的 CSS 动画库，为网页设计师和开发者提供了丰富的动画效果，能够快速增添页面的视觉吸引力和交互性。通过 Animate.css，用户可以轻松地实现各种动态效果，改善用户体验，使网页内容更加生动和引人注目。
