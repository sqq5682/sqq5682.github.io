---
layout: post
title: whistle跨平台web调试代理工具
categories: [blog]
tags: [whistle, node, mock]
description: whistle跨平台web调试代理工具
---

## whistle

[whistle](http://wproxy.org/whistle/)是基于`node`实现的跨平台web调试代理工具，主要用于查看、修改`http`、`https`、`websocket`的请求、响应，也可以作为`http`代理服务器使用。类似的工具有`Fiddler`，不同于`Fiddler`通过断点修改请求响应的方式，`whistle`采用的是类似配置系统`hosts`的方式，一切操作都可以通过配置实现，支持域名、路径、正则表达式、通配符、通配路径等多种匹配方式，配置使用起来非常简单。

`whistle`有以下优点：

> node环境下安装方便     
> 可以定义多个代理规则切换     
> 测试环境指向本地开发的地址调试   
> 通过配置，自动加载Vconsole、eruda等开发调试      
> 基于接口灵活设置mock数据调试     
> 利用weinre远程调试移动端网页

### node环境下安装方便 

`whistle`安装非常简单，支持v0.10.0以上版本的Node，为获取更好的性能，推荐安装最新版本的Node。

```
npm install -g whistle // 全局安装

w2 help

w2 -V // 查看版本

w2 start // 启动

w2 restart // 重启whsitle

w2 stop // 停止whistle

w2 run // 调试模式启动whistle(主要用于查看whistle的异常及插件开发)

```

### 可以定义多个代理规则切换 

如下图，在顶部菜单+create，可以快速创建Rules，多个Rules可以自由切换
![](../img/uploads/2023/0720/1.jpg)


### 测试环境指向本地开发的地址调试

首先，whistle有以下三种配置方式：

1.默认方式：默认是将匹配模式写在左边，操作uri写在右边
```
pattern operatorURI
```
whistle将请求url与pattern匹配，如果匹配到就执行operatorURI对应的操作

2.传统方式：传统方式指的是传统的hosts配置方式，操作URI写在左边

```
operatorURI pattern
```

如果pattern为路径或域名，且operatorURI为域名或路径

```
 www.test.com www.example.com/index.html
 http://www.test.com www.example.com/index.html
```

这种情况下无法区分pattern和operatorURI，whistle不支持这种传统的方式，只支持默认方式
3.组合方式：传统hosts的配置对多个域名对于同一个ip可以采用这种方式：

```
127.0.0.1  www.test1.com www.test2.com www.testN.com
```
whistle完全兼容传统hosts配置方式，且支持更多的组合方式：

```
 # 传统组合方式
 pattern operatorURI1 operatorURI2 operatorURIN

 # 如果pattern部分为路径或域名，且operatorURI为域名或路径
 # 这种情况下也支持一个操作对应多个pattern
 operatorURI pattern1 pattern2 patternN
```

综上所述，测试环境指向本地开发地址，在Rules设置可以这样写

![](../img/uploads/2023/0720/2.jpg)


### 通过配置，自动加载Vconsole、eruda等开发调试

`whistle`支持各种插件，其中的inspect是集成 vConsole、eruda、mdebug 等调试H5页面工具的插件。

安装方法如下

```
npm install whistle.inspect -g
or 
w2 i whistle.inspect
```

安装完毕后，可以在Plugins看到，如下图：

![](../img/uploads/2023/0720/3.jpg)

然后在Rules中对应设置一下，如下，就可以了

![](../img/uploads/2023/0720/4.jpg)

### 基于接口灵活设置mock数据调试 

基于接口灵活设置mock数据调试，可以在原有接口上设置mock数据，具体找到接口，右键：

![](../img/uploads/2023/0720/5.jpg)

![](../img/uploads/2023/0720/6.jpg)

![](../img/uploads/2023/0720/7.jpg)

保存完后，点右边Values栏，就可以看到保存demo了

![](../img/uploads/2023/0720/8.jpg)

### 移动端调试查看dom结构

`weinre`可以用于调试远程页面特别是移动端的网页，查看元素修改样式等，配置方式： pattern weinre://key key为任意的字符串，主要用于区分页面，如下图：

![](../img/uploads/2023/0720/9.jpg)

![](../img/uploads/2023/0720/10.jpg)

![](../img/uploads/2023/0720/11.jpg)

![](../img/uploads/2023/0720/12.jpg)

