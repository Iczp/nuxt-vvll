---
name: axios
title: Axios
icon: devicon-plain:axios
description: Axios 提供了简洁而强大的 API，使得发送 HTTP 请求和处理响应变得非常容易。无论是在前端还是在后端开发中，Axios 都是一个非常有用的工具。
---

:Icon{name=logos:axios .size-32}

## Axios

Axios 是一个基于 Promise 的 HTTP 客户端，用于在浏览器和 Node.js 中发送 HTTP 请求。它的设计简单且易于使用，能够处理多种类型的请求和响应。以下是一些关于 Axios 的关键特性和使用方法：

### 关键特性

1. **支持所有的请求类型**：GET、POST、PUT、DELETE、PATCH 等。
2. **自动转换 JSON 数据**：Axios 会自动将响应数据转换为 JSON 格式。
3. **拦截请求和响应**：允许在请求或响应被处理之前拦截它们。
4. **取消请求**：使用取消令牌来取消请求。
5. **支持并发请求**：可以使用 `axios.all` 来处理并发请求。
6. **请求和响应的转换**：允许在请求发送到服务器之前或收到响应之后对其进行转换。
7. **防止 CSRF**：可以方便地配置和发送 CSRF 令牌。

### 安装

在项目中使用 Axios，可以通过 npm 或 yarn 安装：

```sh
npm install axios
```

或者

```sh
yarn add axios
```

### 基本用法

以下是一些基本的用法示例：

#### 发送 GET 请求

```javascript
const axios = require('axios');

axios
  .get('https://api.example.com/data')
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
```

#### 发送 POST 请求

```javascript
const axios = require('axios');

axios
  .post('https://api.example.com/data', {
    key1: 'value1',
    key2: 'value2',
  })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
```

#### 设置请求头

```javascript
const axios = require('axios');

axios
  .get('https://api.example.com/data', {
    headers: {
      Authorization: 'Bearer token',
      'Content-Type': 'application/json',
    },
  })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
```

#### 拦截请求和响应

```javascript
const axios = require('axios');

// 添加请求拦截器
axios.interceptors.request.use(
  (config) => {
    console.log('请求发送前：', config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
axios.interceptors.response.use(
  (response) => {
    console.log('响应收到后：', response);
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
```

### 并发请求

```javascript
const axios = require('axios');

function getUserAccount() {
  return axios.get('/user/12345');
}

function getUserPermissions() {
  return axios.get('/user/12345/permissions');
}

axios.all([getUserAccount(), getUserPermissions()]).then(
  axios.spread((account, permissions) => {
    // 两个请求都完成后执行这里
    console.log('用户账户信息：', account);
    console.log('用户权限信息：', permissions);
  })
);
```

### 取消请求

```javascript
const axios = require('axios');
const CancelToken = axios.CancelToken;
let cancel;

axios
  .get('/user/12345', {
    cancelToken: new CancelToken(function executor(c) {
      cancel = c;
    }),
  })
  .catch(function (thrown) {
    if (axios.isCancel(thrown)) {
      console.log('请求已取消', thrown.message);
    } else {
      console.error(thrown);
    }
  });

// 取消请求
cancel('请求取消原因');
```

### 总结

Axios 提供了简洁而强大的 API，使得发送 HTTP 请求和处理响应变得非常容易。无论是在前端还是在后端开发中，Axios 都是一个非常有用的工具。
