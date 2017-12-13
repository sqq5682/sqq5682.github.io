---
layout: post
title: 自适应布局webkit-box的用法
categories: [blog ]
tags: [webkit-box ]
description: 自适应布局webkit-box的用法
---

#### Flexible Box Model(灵活盒子模型)

在平常的web横排布局中，会经常用到float或display:inline-block，但是在多种不同宽度的移动设备的自适应布局中用的话，还得设置百分比宽度和考虑清除浮动。而Flexible Box Model可以自动计算宽度和自适应，更加方便。

Flexible Box Model有几个属性：

> 1、box-orient 在父元素上设置   子元素排列 vertical (垂直) or horizontal（水平）> 

> 2、box-flex 在子元素上设置   兄弟元素之间比例，仅作一个系数> 

> 3、box-align 在父元素上设置    box 排列> 

> 4、box-direction 在父元素上设置    box 方向  可设置reverse排序相反> 

> 5、box-flex-group 在子元素上设置   以组为单位的流体系数> 

> 6、box-ordinal-group 以组为单位的子元素排列方向> 

> 7、box-pack 在父元素上设置   可设置center和vertically


演示效果如图：

![](../img/uploads/2013/01/XB3PFC1S0T_UH8ZIK5T.jpg)


下面是效果图的html结构：

	<div class="main">
	    <div class="div left">
	        自适应布局webkit-box
	    </div>
	    <div class="div center">
	        自适应布局webkit-box
	    </div>
	    <div class="div right">
	        自适应布局webkit-box
	    </div>
	</div>


对应上面的css代码：

	*{padding:0px;margin:0px;}/*不建议添加，这里为了方便测试*/
	.main{width:100%;margin:0 auto;background: #dadada;display: box;display: -webkit-box;display: -moz-box;}
	.div{height:300px;color:#fff;-webkit-box-flex:1;-moz-box-flex:1;box-flex:1;}
	.left{background: #333;}
	.right{background: #999;}
	.center{background: #666;}


这里只做一个例子，其他的有兴趣的可以试一下！