---
layout: post
title: HTML5--本地存储Web Storage
categories: [blog ]
tags: [Web Storage ]
description: HTML5--本地存储Web Storage
---


Web Storage功能，顾名思义，就是在Web上针对客户端本地储存数据的功能，具体来说Web Storage分为两种；

**sessionStorage：**将数据保存在session对象中，所谓session是指用户在浏览某个网站时，从进入网站到浏览器关闭所经过的这段时间，也就是用户浏览这个网站所花费的时间。session对象可以用来保存在这段时间内所要求保存的任何数据。

**localStorage：**将数据保存在客户端本地的硬件设备（通常指硬盘，当然可以是其他的硬件设备）中，即是浏览器被关闭了，该数据仍然存在，下次打开浏览器访问网站时，仍然可以继续使用。

sessionStorage与localStorage区别：
这两者的区别在于sessionStorage为临时保存，而localStorage为永久保存。

接下来我们一起看一下：
**SessionStorage：**将数据保存在session对象中，所谓session是指用户在浏览某个网站时，从进入网站到浏览器关闭所经过的这段时间会话，也就是用户浏览这个网站所花费的时间就是session的生命周期。session对象可以用来保存在这段时间内所要求保存的任何数据。

此对象主要有两个方法：

保存数据：sessionStorage.setItem(Key, value);
读取数据：sessionStorage.getItem(Key);

Key：表示你要存入的键名称，此名称可以随便命名，可以按照变量的意思来理解。
Value：表示值，也就是你要存入Key中的值，可以按照变量赋值来理解。

使用方法：

保存数据：sessionStorage.setItem("website", "websqq.com");
读取数据：sessionStorage.getItem("website");

代码案例：

	<!DOCTYPE HTML>
	<html>
	<head>
	<meta charset="gb2312">
	<title>HTML5--本地存储SessionStorage</title>
	<script type="text/javascript">
	window.onload = function()
	{
	alert("当你关闭此页面或者关闭浏览器的时候，sessionStorage中保存的数据才会消失，也就是说重新打开此页面的时候，点击获取数据
	，将不会显示任何数据，刷新页面无效。\r\n由此可以证明，sessionStorage的生命周期为，某个用户浏览网站时，从进入到离开的这段时间。")

	//首先获得body中的3个input元素
	var msg = document.getElementById("msg");
	var getData = document.getElementById("getData");
	var setData = document.getElementById("setData");

	setData.onclick = function()//存入数据
		{
			if(msg.value){
				sessionStorage.setItem("data", msg.value);
				alert("信息已保存到data字段中");
			}else{
				alert("信息不能为空");
			}
		}

	getData.onclick = function()//获取数据
		{
			var msg = sessionStorage.getItem("data");
			if(msg){
				alert("data字段中的值为：" + msg);
			}else{
				alert("data字段无值！");
			}
		}
	}
	</script>
	</head>

	<body>
	<input id="msg" type="text"/>
	<input id="setData" type="button" value="保存数据"/>
	<input id="getData" type="button" value="获取数据"/>
	</body>
	</html>

**LocalStorage**

使用方法与SessionStorage如出一辙，如下代码所示：

此对象主要有两个方法：

保存数据：localStorage.setItem(Key, value);
读取数据：localStorage.getItem(Key);
Key：表示你要存入的键名称，此名称可以随便命名，可以按照变量的意思来理解。
Value：表示值，也就是你要存入Key中的值，可以按照变量赋值来理解。

使用方法：

保存数据：localStorage.setItem("website", "websqq.com");
读取数据：localStorage.getItem("website");

案例如下：

	<!DOCTYPE HTML>
	<html>
	<head>
	<meta charset="gb2312">
	<title>HTML5--本地存储LocalStorage</title>
	<script type="text/javascript">
	window.onload = function()
	{
	alert("当你关闭此页面或者关闭浏览器的时候，localStorage中保存的数据才会消失，也就是说重新打开此页面的时候，点击获取数据，
	可以取到数据。")

	//首先获得body中的3个input元素
	var msg = document.getElementById("msg");
	var getData = document.getElementById("getData");
	var setData = document.getElementById("setData");

	setData.onclick = function()//存入数据
		{
			if(msg.value){
				localStorage.setItem("data", msg.value);
				alert("信息已保存到data字段中");
			}else{
				alert("信息不能为空");
			}
		}

	getData.onclick = function()//获取数据
		{
			var msg = localStorage.getItem("data");
			if(msg)
			{
				alert("data字段中的值为：" + msg);
			}else{
				alert("data字段无值！");
			}
		}
	}
	</script>
	</head>

	<body>
	<input id="msg" type="text"/>
	<input id="setData" type="button" value="保存数据"/>
	<input id="getData" type="button" value="获取数据"/>
	</body>
	</html>
