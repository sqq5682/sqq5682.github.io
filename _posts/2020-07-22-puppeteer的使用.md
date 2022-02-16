---
layout: post
title: puppeteer的使用
categories: [blog ]
tags: [puppeteer,node.js ]
description: puppeteer的使用
---


### Puppeteer是什么？

Puppeteer 是 Chrome开发团队2017年发布的一个 Node.js包，提供了一组用来操纵Chrome的API，通俗来说就是一个Headless Chrome浏览器，这Headless Chrome也可以配置成有UI的 。利用Puppeteer可以做到爬取页面数据，页面截屏或者生成PDF文件，前端自动化测试（模拟输入/点击/键盘行为）以及捕获站点的时间线，分析网站性能问题。

### Puppeteer能做什么?

你可以在浏览器中手动执行的绝大多数操作都可以使用 Puppeteer 来完成！ 下面是一些示例：

> 生成页面 PDF。
> 抓取 SPA（单页应用）并生成预渲染内容（即“SSR”（服务器端渲染））。
> 自动提交表单，进行 UI 测试，键盘输入等。
> 创建一个时时更新的自动化测试环境。 使用最新的 JavaScript 和浏览器功能直接在最新版本的Chrome中执行测试。
> 捕获网站的 timeline trace，用来帮助分析性能问题。
> 测试浏览器扩展。


### puppeteer环境准备


1、Puppeteer环境要求

> Puppeteer要求node版本不低于v6.4.0，但是async/await只在Node v7.6.0或更高的版本支持。
> 需要最近版本的Chromium浏览器

2、Puppeteer环境准备

> Node.js 安装配置
> Puppeteer安装(通过npm安装：npm install puppeteer --save)

由于封网，直接下载 Chromium 会失败,包也比较大，我们可以使用puppeteer-core配合本地的Chrome或者Chrome Canary来使用：
首先安装puppeteer-core和Carlo(会用到Carlo的find_chrome模块,可以在node_modules/carlo/lib/目录下找到)

这里需要安装

> npm install puppeteer-core
> npm i carlo

    const puppeteer = require('puppeteer-core');
    //find_chrome模块来源于GoogleChromeLabs的Carlo,可以查看本机安装Chrome目录，详细请查看底部博客,

    const findChrome = require('./node_modules/carlo/lib/find_chrome');

    (async () => {
    let findChromePath = await findChrome({});
    let executablePath = findChromePath.executablePath;
    console.log(executablePath)
    const browser = await puppeteer.launch({
        executablePath,
        headless: false
    });

    const page = await browser.newPage();
    await page.goto('http://baidu.com');
    /*
        dosomeThing
    */

    await browser.close();
    })();


### puppeteer常用方法

知识点

    page.type 获取输入框焦点并输入文字

    page.keyboard.press 模拟键盘按下某个按键，目前mac上组合键无效为已知bug

    page.waitFor 页面等待，可以是时间、某个元素、某个函数

    page.frames() 获取当前页面所有的 iframe，然后根据 iframe 的名字精确获取某个想要的 iframe

    iframe.$('.srchsongst') 获取 iframe 中的某个元素

    iframe.evaluate() 在浏览器中执行函数，相当于在控制台中执行函数，返回一个 Promise

    Array.from 将类数组对象转化为对象

    page.click() 点击一个元素

    iframe.$eval() 相当于在 iframe 中运行 document.queryselector 获取指定元素，并将其作为第一个参数传递

    iframe.$$eval 相当于在 iframe 中运行 document.querySelectorAll 获取指定元素数组，并将其作为第一个参数传递

### 一些默认的设置和开发调试建议

1.使用Headless模式

Puppeteer默认以Headless模式加载Chromium，如果想加载完整的Chromium（这样方便观察网页加载的效果究竟是怎么样的），可以执行以下命令

    const browser = await puppeteer.launch({headless: false}); // default is true

2.使执行本地版本的Chrome或者Chromium

    const browser = await puppeteer.launch({executablePath: '/path/to/Chrome'});

3.延迟执行Puppeteer

    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 250 // slow down by 250ms
    });

4.获取控制台输出

可以监听console的事件，也可以通过evaluate来执行console

    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    await page.evaluate(() => console.log(`url is ${location.href}`));

5.设置页面视窗大小

    await page.setViewport({
        width: 1366,
        height: 768 * 2
    });

#### 导航到某个页面

    page = await browser.newPage();
    await page.goto('https://baidu.com');

上述代码会开启一个新页面，并将其导航到 https://baidu.com 。

#### 等待某个 DOM 节点出现

在进行某些页面操作前，我们必须要等待指定的 DOM 加载完成后才能操作，比如，一个 Input 没有加载出来时，你是无法在里面输入字符的等等。在 Puppeteer 中，你可以使用 page.waitForSelector 和选择器来等待某个 DOM 节点出现：

    await page.waitForSelector('#loginForm');

上述代码会等待 ID 为 loginForm 的节点出现。

#### 等待几毫秒

有时候，你找不到某个特定的时刻，只能通过时间间隔来确定，那么此时你可以使用 page.waitFor(number) 来实现：

    await page.waitFor(500);

上述代码会等待 500 毫秒。

#### 等待某个 JavaScript 函数返回 true

有时候，你需要等待某个复杂的时刻，这个时刻只能通过一些复杂的 JavaScript 函数来判断，那么此时你可以使用 page.waitFor(Function) 来实现：

    await page.waitFor(()=> !document.querySelector('.ant-spin.ant-spin-spinning'));

上述代码会等待 Antd 中的旋转图标消失。

#### 向某个 Input 中输入字符

为了模拟用户登陆或仅仅就是输入某个表单，我们经常会向某个 Input 中输入字符，那么我们可以使用这个方法：

    await page.type('#username', 'lewis');

上述代码向 ID 为 username 的 Input 中输入了 lewis 。值得一提的是，该方法还会触发 Input 的 keydown 、 keypress , 和 keyup 事件，所以如果你有该事件的相关功能，也会被测试到哦，是不是很强大？

#### 点击某个节点

在 Puppeteer 中模拟点击某个节点，非常简单，只需要：

    await page.click('#btn-submit');

上述代码点击了 ID 为 btn-submit 的节点。

#### 在浏览器中执行一段 JavaScript 代码

有时候我们需要在浏览器中执行一段 JavaScript 代码，此时你可以这样写：

    page.evaluate(()=> alert('1'));

上述代码会在浏览器执行 alert('1') 。

#### 获取某一个节点的某个属性

有时候我们需要获取某个 Input 的 value ，某个链接的 href ，某个节点的文本 textContent ，或者 outerHTML ，那么你可以使用这个方法：

    const searchValue = await page.$eval('#search', el => el.value);
    const preloadHref = await page.$eval('link[rel=preload]', el => el.href);
    const text = await page.$eval('.text', el => el.textContent);
    const html = await page.$eval('.main-container', e => e.outerHTML);

#### 获取某一类节点的某个属性集合

有时候我们需要获取某一类节点的某个属性集合，那么你可以这么写：

    const textArray = await page.$$eval('.text', els => Array.from(els).map(el=> el.textContent));

上述代码将页面中所有类为 text 的节点中的文本拼装为数组放到了 textArray 中。


