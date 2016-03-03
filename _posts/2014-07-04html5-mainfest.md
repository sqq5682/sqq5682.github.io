---
layout: post
title: html5中创建manifest缓存以及更新方法
categories: [blog ]
tags: [Tool, ]
description: html5中创建manifest缓存以及更新方法
---

####一、什么是 Cache Manifest####

	MIME TYPE：text/cache-manifest

需要由你创建的：NAME.manifest,作用：主要是配置需要缓存的文件

####二、如何实现####

#####1.在服务器上添加MIME TYPE支:#####

比如 Apache 中可在 .htaccess 中添加：
AddType text/cache-manifest manifest

#####2.创建 NAME.manifest:#####

其中第一行的 CACHE MANIFEST 标识是一定要有的（测试时发现火狐不加也能缓存成功，但不知是否有其他影响）；
CACHE / NETWORK / FACKBACK 三个关键字用于不同功能，CACHE 缓存；NETWORK指不想缓存的页面；FALLBACK是指当没有响应时的替代方案，比如我想请求某个页面，但这个页面的服务器挂了，那么，我可以显示另外一个指定的页面文件编码最好使用utf-8；行开头“#”是注释；

	CACHE MANIFEST
	# VERSION 0.3

	# 直接缓存的文件d
	CACHE:
	m.js
	m1.js

	# 需要在时间在线的文件
	NETWORK:
	cache.html

	# 替代方案
	FALLBACK:
	#/ajax/ ajax.html

至于如何更新这个配置文件？只要改变文件的内容即可，上面的 # VERSION 0.3 其实只是一行注释，但改变文件可以重新缓存，这样写上版本号，想更新的时候修改版本号来重新缓存，是一种比较推荐的方法，甚至可以是最佳实践。

#####3. 给 <html> 标签加 manifest 属性：#####

	<html manifest="path/to/NAME.manifest">

####三、测试####

chrome的开发者工具 》Console 会显示创建缓存的情况

	Document was loaded from Application Cache with manifest http://127.0.0.1/work/html5/manifest/m.manifest
	Application Cache Checking event
	Application Cache Downloading event
	Application Cache Progress event (0 of 4) http://127.0.0.1/work/html5/manifest/m.js
	Application Cache Progress event (1 of 4) http://127.0.0.1/work/html5/manifest/m1.js
	Application Cache Progress event (2 of 4) http://127.0.0.1/work/html5/manifest/cache.html
	Application Cache Progress event (3 of 4) http://127.0.0.1/work/html5/manifest/cache1.html
	Application Cache Progress event (4 of 4)
	Application Cache UpdateReady event

####四、关于更新####

1.自动更新：浏览器除了在第一次访问 Web 应用时缓存资源外，只会在 cache manifest 文件本身发生变化（即使是注释变化）时更新缓存。而 cache manifest中的资源文件发生变化并不会触发更新。

2.手动更新：开发者也可以使用 window.applicationCache 的接口更新缓存。方法是检测 window.applicationCache.status 的值，如果是 UPDATEREADY，那么可以调用 window.applicationCache.update() 更新缓存。示范代码如下。

	if (window.applicationCache.status == window.applicationCache.UPDATEREADY) ｛
	window.applicationCache.update();
	｝

####五、在线状态检测和监视####

1.检测：navigator.onLine 属性表示当前是否在线。如果为 true, 表示在线；如果为 false, 表示离线。

2.监视：当在线 / 离线状态切换时会触发online/offline 事件，这两个事件触发在 body 元素上，并且沿着 document.body、document 和 window 的顺序冒泡。

(后续添加中...)