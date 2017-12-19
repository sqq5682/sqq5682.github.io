---
layout: post
title: CSS3实现经过图片闪光的效果
categories: [blog ]
tags: [Tool, ]
description: CSS3实现经过图片闪光的效果
---

html部分

	<p>
	   <a><img src='http://www.nowamagic.net/librarys/images/201402/2014_02_15_01.jpg'></a>
	   <i></i>
	</p>

css3部分

	.overimg{
	   position: relative;
	   display: block;
	   /* overflow: hidden; */
	   box-shadow: 0 0 10px #FFF;
	}
	.light{
	   cursor:pointer;
	   position: absolute;
	   left: -180px;
	   top: 0;
	   width: 180px;
	   height: 90px;
	   background-image: -moz-linear-gradient(0deg,rgba(255,255,255,0),rgba(255,255,255,0.5),rgba(255,255,255,0));
	   background-image: -webkit-linear-gradient(0deg,rgba(255,255,255,0),rgba(255,255,255,0.5),rgba(255,255,255,0));
	   transform: skewx(-25deg);
	   -o-transform: skewx(-25deg);
	   -moz-transform: skewx(-25deg);
	   -webkit-transform: skewx(-25deg);

	}
	.overimg:hover .light{
	   left:180px;
	   -moz-transition:0.5s;
	   -o-transition:0.5s;
	   -webkit-transition:0.5s;
	   transition:0.5s;
	}
