---
name: dayjs
title: Day.js
icon: logos:momentjs
description: Day.js 是一个轻量级的 JavaScript 库，用于解析、验证、操作和显示日期和时间。它的 API 设计与 Moment.js 十分相似，但其大小仅为 2KB（gzip 压缩后），因此在性能和包大小方面具有明显优势。Day.js 是一个现代替代方案，适合那些需要高性能和小体积日期处理库的项目。
---

:Icon{name=logos:momentjs .size-32}

Day.js 是一个轻量级的 JavaScript 库，用于解析、验证、操作和显示日期和时间。它的 API 设计与 Moment.js 十分相似，但其大小仅为 2KB（gzip 压缩后），因此在性能和包大小方面具有明显优势。Day.js 是一个现代替代方案，适合那些需要高性能和小体积日期处理库的项目。

### 安装 Day.js

#### 使用 npm 安装

```bash
npm install dayjs
```

#### 使用 yarn 安装

```bash
yarn add dayjs
```

#### 在浏览器中使用

通过 CDN 引入 Day.js：

```html
<script src="https://unpkg.com/dayjs"></script>
```

### 基本用法

#### 导入 Day.js

在 Node.js 或使用模块化的前端项目中，可以这样导入 Day.js：

```javascript
const dayjs = require('dayjs'); // CommonJS

import dayjs from 'dayjs'; // ES6 Module
```

#### 创建日期对象

使用 Day.js 创建日期对象非常简单，可以使用当前日期、指定日期字符串、时间戳等多种方式创建。

```javascript
// 当前日期和时间
const now = dayjs();

// 指定日期字符串
const specificDate = dayjs('2023-06-25');

// 时间戳
const fromTimestamp = dayjs(1624896000000);
```

#### 格式化日期

Day.js 提供了 `format` 方法将日期对象格式化为指定的字符串格式。

```javascript
const now = dayjs();
console.log(now.format('YYYY-MM-DD')); // 输出: 2023-06-25
console.log(now.format('MMMM D, YYYY h:mm A')); // 输出: June 25, 2023 3:24 PM
```

#### 解析日期

Day.js 可以解析多种格式的日期字符串，并将其转换为日期对象。

```javascript
const date1 = dayjs('2023-06-25', 'YYYY-MM-DD');
const date2 = dayjs('25-06-2023', 'DD-MM-YYYY');
```

#### 操作日期

Day.js 提供了许多方法来操作日期对象，例如加减天数、月数、年数等。

```javascript
const now = dayjs();

// 加 7 天
const nextWeek = now.add(7, 'day');

// 减 1 个月
const lastMonth = now.subtract(1, 'month');

// 开始和结束时间
const startOfMonth = now.startOf('month');
const endOfMonth = now.endOf('month');
```

#### 比较日期

Day.js 提供了多种比较日期的方法，可以方便地进行日期比较。

```javascript
const date1 = dayjs('2023-06-25');
const date2 = dayjs('2023-07-01');

console.log(date1.isBefore(date2)); // 输出: true
console.log(date1.isAfter(date2)); // 输出: false
console.log(date1.isSame(date2)); // 输出: false
```

### 插件支持

Day.js 的核心非常小巧，但是可以通过插件来扩展其功能。常用插件包括时区支持、相对时间、ISO 8601 解析等。

#### 安装插件

例如安装相对时间插件：

```bash
npm install dayjs-plugin-relativeTime
```

#### 使用插件

使用插件时需要先加载并扩展 Day.js：

```javascript
import dayjs from 'dayjs';
import relativeTime from 'dayjs-plugin-relativeTime';

dayjs.extend(relativeTime);

const now = dayjs();
const pastDate = dayjs('2023-06-20');

console.log(pastDate.from(now)); // 输出: 5 days ago
console.log(now.to(pastDate)); // 输出: in 5 days
```

### 常用功能示例

#### 计算日期间隔

计算两个日期之间的间隔天数、月数或年数。

```javascript
const start = dayjs('2023-01-01');
const end = dayjs('2023-06-25');

const days = end.diff(start, 'day'); // 175 天
const months = end.diff(start, 'month'); // 5 个月
const years = end.diff(start, 'year'); // 0 年
```

#### 转换日期格式

将日期字符串从一种格式转换为另一种格式。

```javascript
const dateStr = '25-06-2023';
const formattedDate = dayjs(dateStr, 'DD-MM-YYYY').format('YYYY/MM/DD');
console.log(formattedDate); // 输出: 2023/06/25
```

#### 获取相对时间

获取相对时间描述，例如 “2 天前” 或 “刚刚”。

```javascript
import dayjs from 'dayjs';
import relativeTime from 'dayjs-plugin-relativeTime';

dayjs.extend(relativeTime);

const now = dayjs();
const pastDate = dayjs('2023-06-20');

console.log(pastDate.from(now)); // 输出: 5 days ago
console.log(now.to(pastDate)); // 输出: in 5 days
```

#### 处理时区

使用 Day.js 处理时区需要引入 `timezone` 插件和 `utc` 插件：

```bash
npm install dayjs-plugin-timezone dayjs-plugin-utc
```

然后在代码中使用：

```javascript
import dayjs from 'dayjs';
import utc from 'dayjs-plugin-utc';
import timezone from 'dayjs-plugin-timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

const now = dayjs();
const newYorkTime = now.tz('America/New_York');
console.log(newYorkTime.format()); // 输出: 2023-06-25T10:24:12-04:00
```

### 总结

Day.js 是一个轻量级、高性能的日期处理库，其 API 与 Moment.js 类似，便于迁移和使用。通过丰富的插件支持，Day.js 可以灵活地扩展功能，以满足各种日期和时间处理需求。如果你正在寻找一个小体积、快速的日期处理库，Day.js 是一个值得考虑的选择。
