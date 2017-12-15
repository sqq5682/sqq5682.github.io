---
layout: post
title: github pages博客Jekyll添加Gitment评论系统
categories: [blog ]
tags: [Gitment ]
description: github pages博客Jekyll添加Gitment评论系统
---


前一段时间在Github Pages上使用Jekyll搭建了个人博客[sqq5682.github.io](http://sqq5682.github.io//cn)，现在把之前的wordpress博客上的内容搬了过来，添加评论系统时，找了几个国内的，有的需要备案的，搜了一下找了gitment，gitment是imsun利用github上的issues做的评论系统，项目地址为[https://github.com/imsun/gitment](https://github.com/imsun/gitment)，然后着手开始自己的博客评论系统迁移，同时也写一下。

**注册OAuth Application**

首先登录自己的github，在Github头像下拉菜单 > Settings > 左边Developer settings下的OAuth Application > Register a new application，填写下面信息，如下：

![](../img/uploads/2017/12/15.jpg)

> Authorization callback URL  一定要写自己Github Pages的URL  比如我填的是http://sqq5682.github.io  

填写完上述信息后按Register application按钮，会得一个得到Client ID和Client Secret，这个将被用于之后的用户登录


**在jekyll博客引用gitment代码**

	<div id="container"></div>
	<link rel="stylesheet" href="https://imsun.github.io/gitment/style/default.css">
	<script src="https://imsun.github.io/gitment/dist/gitment.browser.js"></script>
	<script>
	var gitment = new Gitment({
	  id: '页面 ID', // 可选。默认为 location.href  比如我本人的就删除了
	  owner: '你的 GitHub Name',              //比如我的叫anTtutu
	  repo: '存储评论的 repo',                 //比如我的叫anTtutu.github.io
	  oauth: {
	    client_id: '你的 client ID',          //比如我的828***********
	    client_secret: '你的 client secret',  //比如我的49e************************
	  },
	})
	gitment.render('container')
	</script>

为了灵活和方便管理，可以在_config.yml中配置好全局参数：

	# Gitment
	gitment
		id:ebd2bxxxxxxxx
		secret:701e6d334e75xxxxxxxxxxxxxx


