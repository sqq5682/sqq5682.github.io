---
layout: post
title: css中hideFocus的用法
categories: [blog ]
tags: [ ]
description: css中hideFocus的用法
---

**简单说：hideFocus是对超链接外虚线框的设定！**

hideFocus即隐藏聚焦，具有使对象聚焦失效的功能，其功能相当于：

	onFocus="this.blur()"

它的值是一个布尔值，如hideFocus=true。也可省略赋值直接写hideFocus。
你给的代码如果没有hideFocus,那么鼠标点击该超链接，则外面出现一个虚线框，即为聚焦。而使用了hideFocus则不会有虚线框。

在IE下，需要在标签 a 的结构中加入 hidefocus="true" 属性。

演示：

	<a href="#" hidefocus="true" title="XX">没有虚线框</a>
	<a href="#" title="XX">有虚线框</a>

而在FF等浏览器中则相对比较容易，直接给标签 a 定义样式 outline:none; 就可以了，即：

	a {outline:none;}

或者

	a{blr:expression(this.onFocus=this.blur());outline:none;}//IE
	