---
layout: post
title: vite打包后cdn js文件的跨域问题
categories: [blog]
tags: [vite, bolb, base64]
description: vite打包后cdn js文件的跨域问题
---

## 问题

vite 打包后访问出现跨域问题

```
Access to script at 'https://fe-sta.aixuexi.com/partner/app-h5/static/js/vendors~main-a5ffb745ef10a734101a.js?a5ffb745ef10a734101a' from origin 'https://coin.aixuexi.com' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
```

首先从vite打包流程下手

### vite 打包流程和优点

1.当声明一个 `script` 标签类型为 `module` 时,如

```js
<script type="module" src="/src/main.js"></script>
```

2.当浏览器解析资源时，会往当前域名发起一个`GET`请求`main.js`文件

```js
// main.js
import { createApp } from 'vue'
import App from './App.vue'
createApp(App).mount('#app')
```

3.请求到了 `main.js` 文件，会检测到内部含有 `import` 引入的包，又会 `import` 引用发起 `HTTP` 请求获取模块的内容文件，如 `App.vue` 、 `vue` 文件

Vite其核心原理是利用浏览器现在已经支持 `ES6` 的 `import` ,碰见 `import` 就会发送一个 `HTTP` 请求去加载文件， `Vite` 启动一个 `koa`  服务器拦截这些请求，并在后端进行相应的处理将项目中使用的文件通过简单的分解与整合，然后再以ESM格式返回返回给浏览器。Vite整个过程中没有对文件进行打包编译，做到了真正的按需加载，所以其运行速度比原始的webpack开发编译速度快出许多。

### type="module" 和 crossorigin 的使用

从上面可以看到Vite利用浏览器现在已经支持 `ES6` 的 `import`，所以这里打包生产环境的包会有 `type="module"` ，如下：

```html
<script type="module" crossorigin src="https://fe-sta.aixuexi.com/partner/app-h5/static/index.0fd2785d.js"></script>
```

这里有两处设置 `type="module"` 和 `crossorigin`

1、`type="module"`

+ `script` 标签内部默认是严格模式
+ `script` 标签内的变量，是这个script标签的私有变量
+ `script` 标签内的js会延迟执行。
+ `script` 标签通过src属性引入的js代码需要服务端支持cors跨域。
+ `script` 标签只有在支持es6的浏览器中才执行。

2、`crossorigin`

script标签去请求资源   

+ script标签去请求资源的时候，request是没有origin头的。
+ script标签请求跨域资源的时候，内部运行如果报错的话，window.onerror 捕获的时候，内部的error.message只能看到Script error.看不到完整的错误内容。这个应该是浏览器的安全策略。

```js
window.addEventListener('error', function(msg, url, lineno, colno, error) {
    console.log('error catch:', msg.message);
    return false
})
```

`script` 标签 `crossorigin` 属性

+ 设置 `crossorigin` 属性后，`script` 标签去请求资源的时候，`request` 会带上 `origin` 头，然后会要求服务器进行 `cors` 校验，跨域的时候如果 `response header` 没有 `Access-Control-Allow-Origin` 是不会拿到资源的。`cors` 验证通过后，拿到的 `script` 运行内部报错的话，，`window.onerror` 捕获的时候，内部的 `error.message` 可以看到完整的错误信息。
+ `crossorigin` 的属性值分为 `anonymous` 和 `use-credentials` 。如果设置了 `crossorigin` 属性，但是属性值不正确的话，默认是 `anonymous` 。
+ `anonymous` 代表同域会带上 `cookie` ，跨域则不带上 `cookie` ，相当于  `fecth` 请求的 `credentials: 'same-origin'` 。
+ `use-credentials` 跨域也会带上 `cookie` ，相当于 `fetch` 请求的 `credentials: 'include'`，这种情况下跨域的`response header` 需要设置`'Access-Control-Allow-Credentials' = true` ，否则 `cors` 失败。

这里的 `cors` ( `Cross-Origin Resource Sharing` ) 跨域资源共享标准，即是允许浏览器向跨源服务器，发出跨域请求，从而克服了AJAX只能同源使用的限制。

一般浏览器直接发出一个CORS请求，并在请求头中加入一个 Origin 段来描述本次请求来自哪个源（协议 + 域名 + 端口）。如下就是一个简单请求的请求头：

```
GET /resources/public-data/ HTTP/1.1
Host: bar.other
User-Agent: Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.5; en-US; rv:1.9.1b3pre) Gecko/20081130 Minefield/3.1b3pre
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-us,en;q=0.5
Accept-Encoding: gzip,deflate
Accept-Charset: ISO-8859-1,utf-8;q=0.7,*;q=0.7
Connection: keep-alive
Referer: http://foo.example/examples/access-control/simpleXSInvocation.html
Origin: http://foo.example
```

而服务器则需要在返回头中包含 `Access-Control-Allow-Origin` 段，来表明哪些外域可以访问。如下是一个返回头

```
HTTP/1.1 200 OK
Date: Mon, 01 Dec 2008 00:23:53 GMT
Server: Apache/2.0.61
Access-Control-Allow-Origin: *
Keep-Alive: timeout=2, max=100
Connection: Keep-Alive
Transfer-Encoding: chunked
Content-Type: application/xml
```

其中 `Access-Control-Allow-Origin:*` 表明该资源可以被任意外域访问。如果服务端仅允许来自 http://foo.example 的访问，该首部字段的内容如下：`Access-Control-Allow-Origin: http://foo.example`。现在，除了 http://foo.example，其它外域均不能访问该资源。

## 总结

最后总结一句话，vite 由于支持 `ES6` 的 `import`， 打包后 `script` 需带 `type="module"` 、 `crossorigin` 属性，`script` 标签去请求资源的时候，`request` 会带上 `origin` 头，浏览器同源策略验证，然后会要求服务器进行 `cors` 校验，这里需要访问的cdn服务器支持 `cors` 设置就可以了。

