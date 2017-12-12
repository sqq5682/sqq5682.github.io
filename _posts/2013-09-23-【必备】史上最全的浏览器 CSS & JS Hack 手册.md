---
layout: post
title: 【必备】史上最全的浏览器 CSS & JS Hack 手册
categories: [blog ]
tags: [Hack ]
description: 【必备】史上最全的浏览器 CSS & JS Hack 手册
---


浏览器渲染页面的方式各不相同，甚至同一浏览器的不同版本（“杰出代表”是IE）也有差异。因此，浏览器兼容成为前端开发人员的必备技能。如果有一份浏览器 Hack手册，那查询起来就方便多了。这篇文章就向大家分享Browserhacks帮我们从网络上收集的各个浏览器特定的 CSS & JavaScript Hack，记得推荐和分享啊！

IE选择器 Hack

	/* IE 6 and below */
	* html .selector {}
	.suckyie6.selector {} /* .suckyie6 can be any unused class */

	/* IE 7 and below */
	.selector, {}

	/* IE 7 */
	*:first-child+html .selector {}
	.selector, x:-IE7 {}
	*+html .selector {}

	/* Everything but IE 6 */
	html > body .selector {}

	/* Everything but IE 6/7 */
	html > /**/ body .selector {}
	head ~ /* */ body .selector {}

	/* Everything but IE 6/7/8 */
	:root *> .selector {}
	body:last-child .selector {}
	body:nth-of-type(1) .selector {}
	body:first-of-type .selector {}

IE属性/值 Hack

	/* IE 6 */
	.selector { _color: blue; }
	.selector { -color: blue; }

	/* IE 6/7 - acts as an !important */
	.selector { color: blue !ie; }
	/* string after ! can be anything */

	/* IE 6/7 - any combination of these characters:
	! $ & * ( ) = % + @ , . / ` [ ] # ~ ? : < > | */
	.selector { !color: blue; }
	.selector { $color: blue; }
	.selector { &color: blue; }
	.selector { *color: blue; }
	/* ... */

	/* IE 8/9 */
	.selector { color: blue\0/; }
	/* must go at the END of all rules */

	/* IE 8/9 */
	.selector { color: blue\0/; }
	/* must go at the END of all rules */

	/* IE 9/10 */
	.selector:nth-of-type(1n) { color: blue\9; }

	/* IE 6/7/8/9/10 */
	.selector { color: blue\9; }
	.selector { color/*\**/: blue\9; }

	/* Everything but IE 6 */
	.selector { color/**/: blue; }

	IE Media Query Hack

	/* IE 6/7 */
	@media screen\9 {}

	/* IE 8 */
	@media \0screen {}

	/* IE 9/10, Firefox 3.5+, Opera */
	@media screen and (min-resolution: +72dpi) {}

	/* IE 10+ */
	@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {}

	/* IE 6/7/8 */
	@media \0screen\,screen\9 {}

	/* IE 8/9/10 & Opera */
	@media screen\0 {}

	/* IE 9/10 */
	@media screen and (min-width:0\0) {}

	/* Everything but IE 6/7/8 */
	@media screen and (min-width: 400px) {}

IE Javascript Hack

	/* IE 6 */
	(checkIE = document.createElement("b")).innerHTML = "";
	var isIE = checkIE.getElementsByTagName("i").length == 1;

	/* IE 7 */
	(checkIE = document.createElement("b")).innerHTML = "";
	var isIE = checkIE.getElementsByTagName("i").length == 1;
	navigator.appVersion.indexOf("MSIE 7.")!=-1

	/* IEvar isIE = '\v'=='v';

	/* IE 8 */
	(checkIE = document.createElement("b")).innerHTML = "";
	var isIE = checkIE.getElementsByTagName("i").length == 1;

	/* IE 9 */
	(checkIE = document.createElement("b")).innerHTML = "";
	var isIE = checkIE.getElementsByTagName("i").length == 1;

	/* IE 10 */
	var isIE = eval("/*@cc_on!@*/false") && document.documentMode === 10;

	/* IE 10 */
	var isIE = document.body.style.msTouchAction != undefined;

Firefox 浏览器

选择器Hack

	/* Firefox 1.5 */
	body:empty .selector {}

	/* Firefox 2+ */
	.selector, x:-moz-any-link {}

	/* Firefox 3+ */
	.selector, x:-moz-any-link; x:default {}

	/* Firefox 3.5+ */
	body:not(:-moz-handler-blocked) .selector {}

	媒体查询 Hack

	/* Firefox 3.5+, IE 9/10, Opera */
	@media screen and (min-resolution: +72dpi) {}

	/* Firefox 3.6+ */
	@media screen and (-moz-images-in-menus:0) {}

	/* Firefox 4+ */
	@media screen and (min--moz-device-pixel-ratio:0) {}

	Javascript Hack

	/* Firefox */
	var isFF = !!navigator.userAgent.match(/firefox/i);

	/* Firefox 2 - 13 */
	var isFF = Boolean(window.globalStorage);

	/* Firefox 2/3 */
	var isFF = /a/[-1]=='a';

	/* Firefox 3 */
	var isFF = (function x(){})[-5]=='x';

Chrome浏览器

选择器 Hack

	/* Chrome 24- and Safari 5- */
	::made-up-pseudo-element, .selector {}

	媒体查询 Hack

	/* Chrome, Safari 3+ */
	@media screen and (-webkit-min-device-pixel-ratio:0) {}

	Javascript Hack

	/* Chrome */
	var isChrome = Boolean(window.chrome);

Safari浏览器

选择器Hack

	/* Safari 2/3 */
	html[xmlns*=""] body:last-child .selector {}
	html[xmlns*=""]:root .selector {}

	/* Safari 2/3.1, Opera 9.25 */
	*|html[xmlns*=""] .selector {}

	/* Safari 5- and Chrome 24- */
	::made-up-pseudo-element, .selector {}

媒体查询Hack

	/* Safari 3+, Chrome */
	@media screen and (-webkit-min-device-pixel-ratio:0) {}

	Javascript Hack

	/* Safari */
	var isSafari = /a/.__proto__=='//';

Opera浏览器

选择器Hack

	/* Opera 9.25, Safari 2/3.1 */
	*|html[xmlns*=""] .selector {}

	/* Opera 9.27 and below, Safari 2 */
	html:first-child .selector {}

	/* Opera 9.5+ */
	noindex:-o-prefocus, .selector {}

媒体查询Hack

	/* Opera 7 */
	@media all and (min-width: 0px){}

	/* Opera 12- */
	@media all and (-webkit-min-device-pixel-ratio:10000), not all and (-webkit-min-device-pixel-ratio:0) {}

	/* Opera, Firefox 3.5+, IE 9/10 */
	@media screen and (min-resolution: +72dpi) {}

	/* Opera, IE 8/9/10 */
	@media screen {}

Javascript Hack

	/* Opera 9.64- */
	var isOpera = /^function \(/.test([].sort);

	/* Opera 12- */
	var isOpera = Boolean(window.opera);

