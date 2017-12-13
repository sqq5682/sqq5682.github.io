---
layout: post
title: CSS计数器：counter-increment与counter-reset
categories: [blog ]
tags: [counter-increment,counter-reset ]
description: CSS计数器：counter-increment与counter-reset
---

css3动画示例页面当中使用了counter-reset属性和counter-increment属性来对a标签进行自动排序输出，这两个属性是css属性当中的计数器，可以按照设定的方式自动计算出数值，在很多场景下具有很大的灵活性，具体的功能代码如下： 

	.main {counter-reset:demo;} 
	.main a {counter-increment:demo;} 
	.main a:before {content:counter(demo, decimal);} 

#### counter-reset 属性

**用法：**counter-reset 属性设置某个选择器出现次数的计数器的值。默认为 0。
**说明：**利用这个属性，计数器可以设置或重置为任何值，可以是正值或负值。如果没有提供 number，则默认为 0。
**注释：**如果使用 “display: none”，则无法重置计数器。如果使用 “visibility: hidden”，则可以重置计数器。

#### counter-increment 属性

**用法：**counter-increment 属性设置某个选取器每次出现的计数器增量。默认增量是 1。
**说明：**利用这个属性，计数器可以递增（或递减）某个值，这可以是正值或负值。如果没有提供 number 值，则默认为 1。
**注释：**如果使用了 “display: none”，则无法增加计数。如使用 “visibility: hidden”，则可增加计数。

#### 1、CSS代码

	body {
		counter-reset:jiawin;
	}
	h1 {
		counter-reset:subjiawin;
	}
	h1:before {
		content:"类别 " counter(jiawin) ". ";
		counter-increment:jiawin;
	}
	h2:before {
		counter-increment:subjiawin;
		content:counter(jiawin) "." counter(subjiawin) " ";
	}

	/** 以下为页面装饰代码 **/
	body, h1, h2 {padding:0; margin:0;}
	body {background-color:#fee0ef;}
	.main {width:600px; margin:100px auto; border-radius:5px; height:auto; overflow:hidden; box-shadow:0px 1px 5px rgba(0,0,0,0.5);}
	.main h1 {background:#936; color:#FFF; padding:5px; border-top:1px solid #df94b9; border-bottom:1px solid #df94b9;}
	.main h2 {background-color:#c47da0; color:#FFF; padding:5px; border-bottom:1px solid #cd8fae;}


#### 2、HTML代码

	<h1></h1>
	<h2></h2>
	<h2></h2>
	<h1></h1>
	<h2></h2>
	<h2></h2>
	<h2></h2>
	<h1></h1>
	<h2></h2>
	<h2></h2>

在这个示例中，我们不单单运用了counter-reset属性和counter-increment属性而且还配合了content属性的运用，这三个属性配合起来使用也是挺不错的，在布局当中有很大的灵活性。关于content属性，相信大家也是比较熟悉的，大概的用法如下：

	content:string|url|counter(name)|counter(name, list-style-type)|counters(name, string)|counters(name, string, list-style-type)|attr(X)|open-quote|close-quote|no-open-quote|no-close-quote;

