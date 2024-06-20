Day.js 是一个轻量级的 JavaScript 日期库，提供类似于 Moment.js 的API。它体积小（约2KB），性能高，支持链式操作，并且支持插件扩展。Day.js 主要用于解析、验证、操作和显示日期和时间。

### 安装

可以通过 npm 或 yarn 安装 Day.js：

```bash
npm install dayjs
```

或者

```bash
yarn add dayjs
```

### 基本用法

以下是 Day.js 的一些基本用法示例：

#### 导入 Day.js

```javascript
const dayjs = require('dayjs'); // CommonJS
// import dayjs from 'dayjs'; // ES6
```

#### 获取当前日期和时间

```javascript
const now = dayjs();
console.log(now.format()); // 输出当前日期和时间
```

#### 解析日期

```javascript
const date = dayjs('2024-06-20');
console.log(date.format('YYYY-MM-DD')); // 2024-06-20
```

#### 格式化日期

```javascript
const formattedDate = dayjs().format('YYYY-MM-DD HH:mm:ss');
console.log(formattedDate); // 格式化后的当前日期和时间
```

#### 操作日期

```javascript
const tomorrow = dayjs().add(1, 'day');
console.log(tomorrow.format('YYYY-MM-DD')); // 明天的日期

const lastMonth = dayjs().subtract(1, 'month');
console.log(lastMonth.format('YYYY-MM')); // 上个月的日期
```

#### 比较日期

```javascript
const date1 = dayjs('2024-06-20');
const date2 = dayjs('2024-06-21');

console.log(date1.isBefore(date2)); // true
console.log(date1.isAfter(date2)); // false
console.log(date1.isSame(date2)); // false
```

### 使用插件

Day.js 提供了多种插件，可以扩展其功能。使用插件前需要加载并使用它们。

#### 加载插件

```javascript
const dayjs = require('dayjs');
const relativeTime = require('dayjs/plugin/relativeTime');

dayjs.extend(relativeTime);

console.log(dayjs().from(dayjs('2023-06-20'))); // 输出相对时间，如 "in a year"
```

#### 常用插件

- **Advanced Format**: 提供更多的日期格式化选项。
- **Relative Time**: 支持相对时间显示（如 "3 hours ago"）。
- **UTC**: 提供 UTC 时间支持。
- **Timezone**: 提供时区支持。
- **Duration**: 提供时间间隔的支持。

### 示例

#### 使用 Advanced Format 插件

```javascript
const advancedFormat = require('dayjs/plugin/advancedFormat');
dayjs.extend(advancedFormat);

console.log(dayjs().format('Q Do k kk X x')); // 输出季度、天、小时、Unix时间戳等
```

#### 使用 UTC 插件

```javascript
const utc = require('dayjs/plugin/utc');
dayjs.extend(utc);

const utcDate = dayjs().utc();
console.log(utcDate.format()); // 输出 UTC 时间
```

#### 使用 Timezone 插件

```javascript
const timezone = require('dayjs/plugin/timezone');
const utc = require('dayjs/plugin/utc');
dayjs.extend(utc);
dayjs.extend(timezone);

const zonedDate = dayjs().tz('America/New_York');
console.log(zonedDate.format()); // 输出指定时区的时间
```

### 注意事项

- Day.js 默认是不可变的，这意味着每次操作都会返回一个新的 Day.js 对象，而不是修改原来的对象。
- Day.js 不支持本地化的时间差（`local`），可以使用插件来实现这类功能。

Day.js 提供了丰富的功能和灵活的插件机制，使其成为处理日期和时间的强大工具，同时保持了库的轻量级和高性能。