---
name: momentjs
title: Moment.js
icon: logos:momentjs
description: Moment.js 是一个强大的 JavaScript 库，用于解析、验证、操作和显示日期和时间。它提供了丰富的 API，使得日期和时间处理变得简单和直观。尽管 Moment.js 已经宣布进入维护模式，并建议使用替代库（如 Luxon 或 date-fns），它仍然在许多项目中广泛使用。以下是对 Moment.js 的详细介绍，包括其安装、基本用法和一些常见功能。
---

## Moment.js

:Icon{name=logos:momentjs .size-32}

Moment.js 是一个强大的 JavaScript 库，用于解析、验证、操作和显示日期和时间。它提供了丰富的 API，使得日期和时间处理变得简单和直观。尽管 Moment.js 已经宣布进入维护模式，并建议使用替代库（如 Luxon 或 date-fns），它仍然在许多项目中广泛使用。以下是对 Moment.js 的详细介绍，包括其安装、基本用法和一些常见功能。

### 安装 Moment.js

#### 使用 npm 安装

```bash
npm install moment
```

#### 使用 yarn 安装

```bash
yarn add moment
```

#### 在浏览器中使用

通过 CDN 引入 Moment.js：

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js"></script>
```

### 基本用法

#### 导入 Moment.js

在 Node.js 或使用模块化的前端项目中，可以这样导入 Moment.js：

```javascript
const moment = require('moment'); // CommonJS

import moment from 'moment'; // ES6 Module
```

#### 创建日期对象

使用 Moment.js 创建日期对象非常简单，可以使用当前日期、指定日期字符串、时间戳等多种方式创建。

```javascript
// 当前日期和时间
const now = moment();

// 指定日期字符串
const specificDate = moment('2023-06-25');

// 时间戳
const fromTimestamp = moment(1624896000000);
```

#### 格式化日期

Moment.js 提供了丰富的格式化选项，可以使用 `format` 方法将日期对象格式化为指定的字符串格式。

```javascript
const now = moment();
console.log(now.format('YYYY-MM-DD')); // 输出: 2023-06-25
console.log(now.format('MMMM Do YYYY, h:mm:ss a')); // 输出: June 25th 2023, 3:24:12 pm
```

#### 解析日期

Moment.js 可以解析多种格式的日期字符串，并将其转换为日期对象。

```javascript
const date1 = moment('2023-06-25', 'YYYY-MM-DD');
const date2 = moment('25-06-2023', 'DD-MM-YYYY');
```

#### 操作日期

Moment.js 提供了许多方法来操作日期对象，例如加减天数、月数、年数等。

```javascript
const now = moment();

// 加 7 天
const nextWeek = now.add(7, 'days');

// 减 1 个月
const lastMonth = now.subtract(1, 'months');

// 开始和结束时间
const startOfMonth = now.startOf('month');
const endOfMonth = now.endOf('month');
```

#### 比较日期

Moment.js 提供了多种比较日期的方法，可以方便地进行日期比较。

```javascript
const date1 = moment('2023-06-25');
const date2 = moment('2023-07-01');

console.log(date1.isBefore(date2)); // 输出: true
console.log(date1.isAfter(date2)); // 输出: false
console.log(date1.isSame(date2)); // 输出: false
```

#### 处理时区

Moment.js 还有一个扩展库 `moment-timezone`，可以方便地处理时区。

```bash
npm install moment-timezone
```

使用 `moment-timezone`：

```javascript
const moment = require('moment-timezone');

const now = moment();
const newYorkTime = now.tz('America/New_York');
console.log(newYorkTime.format()); // 输出: 2023-06-25T10:24:12-04:00
```

### 常用功能示例

#### 计算日期间隔

计算两个日期之间的间隔天数、月数或年数。

```javascript
const start = moment('2023-01-01');
const end = moment('2023-06-25');

const days = end.diff(start, 'days'); // 175 天
const months = end.diff(start, 'months'); // 5 个月
const years = end.diff(start, 'years'); // 0 年
```

#### 转换日期格式

将日期字符串从一种格式转换为另一种格式。

```javascript
const dateStr = '25-06-2023';
const formattedDate = moment(dateStr, 'DD-MM-YYYY').format('YYYY/MM/DD');
console.log(formattedDate); // 输出: 2023/06/25
```

#### 获取相对时间

获取相对时间描述，例如 “2 天前” 或 “刚刚”。

```javascript
const now = moment();
const pastDate = moment('2023-06-20');

console.log(pastDate.from(now)); // 输出: 5 days ago
console.log(now.to(pastDate)); // 输出: in 5 days
```

### 总结

Moment.js 是一个功能强大的日期处理库，虽然它已经进入维护模式，但其丰富的功能和简单的 API 仍然使它在许多项目中被广泛使用。通过本文介绍的安装方法、基本用法和常用功能示例，你可以轻松地在你的项目中集成和使用 Moment.js 来处理各种日期和时间需求。考虑到 Moment.js 的维护状态，如果你正在开始一个新项目，可能会考虑使用更现代的替代库如 Luxon 或 date-fns。
