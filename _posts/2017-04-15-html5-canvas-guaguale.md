---
layout: post
title: 刮刮卡刮奖html5中canva效果实现(转)
categories: [blog ]
tags: [Tool, ]
description: 刮刮卡刮奖html5中canva效果实现(转)
---

首先实例demo:[http://fiddle.jshell.net/artwl/L6D63/10/show/light/](http://fiddle.jshell.net/artwl/L6D63/10/show/light/)

1、原理

原理很简单，就是在刮奖区添加两个canvas，第一个canvas用于显示刮开后显示的内容，可以是一张图片或一个字符串，第二个canvas用于显示涂层，可以用一张图片或用纯色填充，第二个canvas覆盖在第一个canvas上面。

当在第二个canvas上点击或涂抹（点击然后拖动鼠标）时，把点击区域变为透明，这样就可以看到第一个canvas上的内容，即实现了刮奖效果。

2、实现

（1）定义Lottery类

	function Lottery(id, cover, coverType, width, height, drawPercentCallback) {
	   this.conId = id;
	   this.conNode = document.getElementById(this.conId);
	   this.cover = cover || '#CCC';
	   this.coverType = coverType || 'color';
	   this.background = null;
	   this.backCtx = null;
	   this.mask = null;
	   this.maskCtx = null;
	   this.lottery = null;
	   this.lotteryType = 'image';
	   this.width = width || 300;
	   this.height = height || 100;
	   this.clientRect = null;
	   this.drawPercentCallback = drawPercentCallback;
	}


对参数解释一下：

> id：刮奖容器的id
>
> cover：涂层内容，可以为图片地址或颜色值，可空，默认为 #ccc
>
> coverType：涂层类型，值为 image 或 color，可空，默认为 color
>
> width：刮奖区域宽度，默认为300px，可空
>
> height：刮奖区域高度，默认为100px，可空
>
> drawPercentCallback：刮开的区域百分比回调，可空
>


然后还定义了几个需要用到的变量：

> background：第一个canvas元素
>
> backCtx：background元素的2d上下文（context）
>
> mask：第二个canvas元素
>
> maskCtx：mask元素的2d上下文（context）
>
> lottery：刮开后显示的内容，可以为图片地址或字符串
>
> lotteryType：刮开后显示的内容类型，值为 image 或 text，要跟lottery匹配
>
> clientRect：用于记录mask元素的 getBoundingClientRect() 
值

（2）添加二个canvas到刮奖容器，并获取2d上下文

	this.background = this.background || this.createElement('canvas', {
	   style: 'position:absolute;left:0;top:0;'
	});
	this.mask = this.mask || this.createElement('canvas', {
	   style: 'position:absolute;left:0;top:0;'
	});

	if (!this.conNode.innerHTML.replace(/[\w\W]| /g, '')) {
	   this.conNode.appendChild(this.background);
	   this.conNode.appendChild(this.mask);
	   this.clientRect = this.conNode ? this.conNode.getBoundingClientRect() : null;
	   this.bindEvent();
	}

	this.backCtx = this.backCtx || this.background.getContext('2d');
	this.maskCtx = this.maskCtx || this.mask.getContext('2d');


这里用于了createElement工具方法，另外还绑定了事件，后面介绍。

（3）绘制第一个canvas

第一个canvas分两种类型，image 和 string，如果是图片直接用canvas的drawImage就可以了，如果是string，要先用白色填充，然后在上下左右居中的地方绘制字符串，代码如下：

	if (this.lotteryType == 'image') {
	   var image = new Image(),
	   _this = this;
	   image.onload = function () {
	   _this.width = this.width;
	   _this.height = this.height;
	   _this.resizeCanvas(_this.background, this.width, this.height);
	   _this.backCtx.drawImage(this, 0, 0);
	}
	image.src = this.lottery;
	} else if (this.lotteryType == 'text') {
	   this.width = this.width;
	   this.height = this.height;
	   this.resizeCanvas(this.background, this.width, this.height);
	   this.backCtx.save();
	   this.backCtx.fillStyle = '#FFF';
	   this.backCtx.fillRect(0, 0, this.width, this.height);
	   this.backCtx.restore();
	   this.backCtx.save();
	   var fontSize = 30;
	   this.backCtx.font = 'Bold ' + fontSize + 'px Arial';
	   this.backCtx.textAlign = 'center';
	   this.backCtx.fillStyle = '#F60';
	   this.backCtx.fillText(this.lottery, this.width / 2, this.height / 2 + fontSize / 2);
	   this.backCtx.restore();
	}

（4）绘制第二个canvas

第二个canvas也分 image 或 color 填充两种情况。

这里有一个难点，就是如何把鼠标点击区域变成透明的呢？答案在这里：https://developer.mozilla.org/en/docs/Web/Guide/HTML/Canvas_tutorial/Compositing

即我们要把 maskCtx的 globalCompositeOperation 设置为 destination-out ，详细的用法请参考上面给出的链接。

因此，绘制第二个canvas的代码如下：

	this.resizeCanvas(this.mask, this.width, this.height);
	   if (this.coverType == 'color') {
	      this.maskCtx.fillStyle = this.cover;
	      this.maskCtx.fillRect(0, 0, this.width, this.height);
	      this.maskCtx.globalCompositeOperation = 'destination-out';
	   } else if (this.coverType == 'image'){
	      var image = new Image(),
	      _this = this;
	      image.onload = function () {
	      _this.maskCtx.drawImage(this, 0, 0);
	      _this.maskCtx.globalCompositeOperation = 'destination-out';
	   }
	   image.src = this.cover;
	}

这里resizeCanvas是改变canvas大小的工具方法。

（5）绑定事件

绘制完成后，要给第二个canvas绑定事件。这里分了移动设备和PC-WEB两处情况。移动设备是 touchstart 和 touchmove 事件，对应的PC-WEB是keydown 和 mousemove事件，另外PC-WEB方式下，要给document绑定一个mouseup事件，用来判断鼠标是否按下。代码如下：

	bindEvent: function () {
	   var _this = this;
	   var device = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));
	   var clickEvtName = device ? 'touchstart' : 'mousedown';
	   var moveEvtName = device? 'touchmove': 'mousemove';
	   if (!device) {
	      var isMouseDown = false;
	      document.addEventListener('mouseup', function(e) {
	      isMouseDown = false;
	      }, false);
	   }
	   this.mask.addEventListener(clickEvtName, function (e) {
	         isMouseDown = true;
	         var docEle = document.documentElement;
	         if (!_this.clientRect) {
	            _this.clientRect = {
	            left: 0,
	            top:0
	         };
	      }
	      var x = (device ? e.touches[0].clientX : e.clientX) - _this.clientRect.left + docEle.scrollLeft - docEle.clientLeft;
	      var y = (device ? e.touches[0].clientY : e.clientY) - _this.clientRect.top + docEle.scrollTop - docEle.clientTop;
	      _this.drawPoint(x, y);
	   }, false);
	   this.mask.addEventListener(moveEvtName, function (e) {
	      if (!device &amp;&amp; !isMouseDown) {
	         return false;
	      }
	      var docEle = document.documentElement;
	         if (!_this.clientRect) {
	            _this.clientRect = {
	            left: 0,
	            top:0
	         };
	      }
	      var x = (device ? e.touches[0].clientX : e.clientX) - _this.clientRect.left + docEle.scrollLeft - docEle.clientLeft;
	      var y = (device ? e.touches[0].clientY : e.clientY) - _this.clientRect.top + docEle.scrollTop - docEle.clientTop;
	      _this.drawPoint(x, y);
	   }, false);
	}

注：(关于事件这一块有点问题是，原文的的滑动刮卡的时候有严重的延迟，添加下面代码解决此的问题，其中在执行事件的时候，同步判断刮奖的区域的大小)

	var t = this, n = device ? "touchstart" : "mousedown", i = device ? "touchmove" : "mousemove";
	if (device){
	   t.conNode.addEventListener("touchmove", function(t) {
	      a && t.preventDefault(), t.cancelable ? t.preventDefault() : window.event.returnValue = !1
	      }, !1), t.conNode.addEventListener("touchend", function() {
	      a = !1;
	      var e = t.getTransparentPercent(t.maskCtx, t.width, t.height);
	      if(e>88){xxxx}//判断刮奖的区域的大小
	   }, !1);
	}else {
	   var a = !1;
	   t.conNode.addEventListener("mouseup", function(e) {
	      e.preventDefault(), a = !1;
	      var n = t.getTransparentPercent(t.maskCtx, t.width, t.height);
	      if(n>88){xxxx}//判断刮奖的区域的大小
	   }, !1)
	}

这里在事件中取出了鼠标坐标，调用了drawPoint进行了绘制，下面会讲到。

（6）绘制点击和涂抹区域

这里用到了canvas的径向渐变，在鼠标从标处绘制一个圆形，代码如下：

	drawPoint: function (x, y) {
	   this.maskCtx.beginPath();
	   var radgrad = this.maskCtx.createRadialGradient(x, y, 0, x, y, 30);
	   radgrad.addColorStop(0, 'rgba(0,0,0,0.6)');
	   radgrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
	   this.maskCtx.fillStyle = radgrad;
	   this.maskCtx.arc(x, y, 30, 0, Math.PI * 2, true);
	   this.maskCtx.fill();
	   if (this.drawPercentCallback) {
	      this.drawPercentCallback.call(null, this.getTransparentPercent(this.maskCtx, this.width, this.height));
	   }
	}

注：（这一部分，部分安卓机子显示不了，解决代码如下）

	drawPoint: function (x, y) {
	   this.maskCtx.beginPath();
	   var radgrad = this.maskCtx.createRadialGradient(x, y, 0, x, y, 30);
	   radgrad.addColorStop(0, 'rgba(0,0,0,0.6)');
	   radgrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
	   this.maskCtx.fillStyle = radgrad;
	   this.maskCtx.arc(x, y, 20, 20, Math.PI * 2, true);
	   this.maskCtx.fill();
	   if (!this.conNode.innerHTML.replace(/[\w\W]| /g, '')) {
	      this.conNode.appendChild(this.background);
	      this.conNode.appendChild(this.mask);
	      this.clientRect = this.conNode ? this.conNode.getBoundingClientRect() : null;
	   }
	   if (this.drawPercentCallback) {
	      this.drawPercentCallback.call(null, this.getTransparentPercent(this.maskCtx, this.width, this.height));
	   }
	}

（7）涂抹区域百分比

在很多时候，我们还需要知道用户涂抹了多少然后进行下一步交互，如当用户涂抹了80%后，才允许下一张显示。

这个百分比如何计算呢？其实很简单，我们可以用getImageData方法到画布上指定矩形的像素数据，由于每个像素都是用rgba表示的，而涂抹过的区域是透明的，所以我们只需要判断alpha通道的值就可以知道是否透明。代码如下:

	getTransparentPercent: function(ctx, width, height) {
	   var imgData = ctx.getImageData(0, 0, width, height),
	   pixles = imgData.data,
	   transPixs = [];
	   for (var i = 0, j = pixles.length; i < j; i += 4) {
	      var a = pixles[i + 3];
	      if (a < 128) {
	         transPixs.push(i);
	      }
	   }
	   return (transPixs.length / (pixles.length / 4) * 100).toFixed(2);
	}

（8）调用入口init

最后再提供一个入口用来进行绘制和重置，代码如下：

	init: function (lottery, lotteryType) {
	   this.lottery = lottery;
	   this.lotteryType = lotteryType || 'image';
	   this.drawLottery();
	}

页面加载代码如下：

	window.onload = function () {
	   var lottery = new Lottery('lotteryContainer', '#CCC', 'color', 300, 100, drawPercent);
	   lottery.init('http://www.baidu.com/img/bdlogo.gif', 'image');
	   document.getElementById('freshBtn').onclick = function() {
	      drawPercentNode.innerHTML = '0%';
	      lottery.init(getRandomStr(10), 'text');
	   }
	   var drawPercentNode = document.getElementById('drawPercent');
	   function drawPercent(percent) {
	      drawPercentNode.innerHTML = percent + '%';
	   }
	}

	function getRandomStr(len) {
	   var text = "";
	   var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	   for( var i=0; i < len; i++ )
	   text += possible.charAt(Math.floor(Math.random() * possible.length));
	   return text;
	}


其中用图片的话，要求是绝对路径，并且是同域下，否则报错

以上转自博客园[http://www.cnblogs.com/jscode/p/3580878.html](http://www.cnblogs.com/jscode/p/3580878.html)