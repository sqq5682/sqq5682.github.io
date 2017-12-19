---
layout: post
title: DD_belatedPNG解决IE6下PNG不透明问题
categories: [blog ]
tags: [Float ]
description: DD_belatedPNG解决IE6下PNG不透明问题
---


众所周知IE6不支持透明的PNG图片,而PNG图片在Web设计方面表现力上，具有其它图形格式所达不到的效果，IE6这一致命缺陷极大地限制了Web设计的创意发挥。虽然解决IE6的透明PNG的方法也很多,从使用IE特有的滤镜或是e­xpression,再到javascript+透明 GIF替代.但是这些方法都有一个缺点,就是不支持CSS中backgrond-position与background-repeat属性。

而使用DD_belatedPNG.js可完美的解决IE6下PNG图片透明问题，并且支持backgrond-position与background-repeat. 这是其他方法所不具备的，同时DD_belatedPNG还支持a:hover属性,以及img。

首先在网上下载JS文件：0.0.8a-min.js (压缩版) 之后在页面中引用代码如下：

	<!--[if IE 6]>

	<script type="text/javascript" src="js/0.0.8a-min.js"></script>

	<script type="text/javascript"> DD_belatedPNG.fix(‘CSS选择器, 应用类型’); </script>

	<![endif]-->

引用函数是 DD_belatedPNG.fix() , 括号里分别填写应用PNG的CSS选择器（可使用ID选择器和类选择器）和应用类型（分为img和background两种）。

如DD_belatedPNG.fix(‘#box-one, img’) 或者 DD_belatedPNG.fix(‘.header, background’) 等。 这些可以简写成 DD_belatedPNG.fix(‘#box-one, .header, img,background’); 更多选择器的如 DD_belatedPNG.fix(‘#box-one, .header,#footer,.box-two a:hover, img,background’);