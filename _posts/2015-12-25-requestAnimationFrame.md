---
layout: post
title: requestAnimationFrame-性能更好的js动画实现方式
categories: [blog ]
tags: [requestAnimationFrame ]
description: requestAnimationFrame-性能更好的js动画实现方式
---

用js来实现动画，我们一般是借助setTimeout或setInterval这两个函数，css3动画出来后，我们又可以使用css3来实现动画了，而且性能和流畅度也得到了很大的提升。但是css3动画还是有不少局限性，比如不是所有属性都能参与动画、动画缓动效果太少、无法完全控制动画过程等等。所以有的时候我们还是不得不使用setTimeout或setInterval的方式来实现动画，可是setTimeout和setInterval有着严重的性能问题，虽然某些现代浏览器对这两函个数进行了一些优化，但还是无法跟css3的动画性能相提并论。这个时候，就该requestAnimationFrame出马了。

requestAnimationFrame 是专门为实现高性能的帧动画而设计的一个API，目前已在多个浏览器得到了支持，包括IE10+，Firefox，Chrome，Safari，Opera等，在移动设备上，ios6以上版本以及IE mobile 10以上也支持requestAnimationFrame，唯一比较遗憾的是目前安卓上的原生浏览器并不支持requestAnimationFrame，不过对requestAnimationFrame的支持应该是大势所趋了，安卓版本的chrome 16+也是支持requestAnimationFrame的。

requestAnimationFrame 比起 setTimeout、setInterval的优势主要有两点：

> 1、requestAnimationFrame 会把每一帧中的所有DOM操作集中起来，在一次重绘或回流中就完成，并且重绘或回流的时间间隔紧紧跟随浏览器的刷新频率，一般来说，这个频率为每秒60帧。  
> 2、在隐藏或不可见的元素中，requestAnimationFrame将不会进行重绘或回流，这当然就意味着更少的的cpu，gpu和内存使用量。

像setTimeout、setInterval一样，requestAnimationFrame是一个全局函数。调用requestAnimationFrame后，它会要求浏览器根据自己的频率进行一次重绘，它接收一个回调函数作为参数，在即将开始的浏览器重绘时，会调用这个函数，并会给这个函数传入调用回调函数时的时间作为参数。由于requestAnimationFrame的功效只是一次性的，所以若想达到动画效果，则必须连续不断的调用requestAnimationFrame，就像我们使用setTimeout来实现动画所做的那样。requestAnimationFrame函数会返回一个资源标识符，可以把它作为参数传入cancelAnimationFrame函数来取消requestAnimationFrame的回调。怎么样，是不是也跟setTimeout的clearTimeout很相似啊。

所以，可以这么说，requestAnimationFrame就是一个性能优化版、专为动画量身打造的setTimeout，不同的是requestAnimationFrame不是自己指定回调函数运行的时间，而是跟着浏览器内建的刷新频率来执行回调，这当然就能达到浏览器所能实现动画的最佳效果了。

目前，各个支持requestAnimationFrame的浏览器有些还是自己的私有实现，所以必须加前缀，对于不支持requestAnimationFrame的浏览器，我们只能使用setTimeout，因为两者的使用方式几近相同，所以这两者的兼容并不难。对于支持requestAnimationFrame的浏览器，我们使用requestAnimationFrame，而不支持的我们优雅降级使用传统的setTimeout。把它们封装一下，就能得到一个统一兼容各大浏览器的API了。

	var lastTime = 0;
	var prefixes = 'webkit moz ms o'.split(' '); //各浏览器前缀
	var requestAnimationFrame = window.requestAnimationFrame;
	var cancelAnimationFrame = window.cancelAnimationFrame;
	var prefix;
	//通过遍历各浏览器前缀，来得到requestAnimationFrame和cancelAnimationFrame在当前浏览器的实现形式
	for( var i = 0; i < prefixes.length; i++ ) {
	    if ( requestAnimationFrame && cancelAnimationFrame ) {
	      break;
	    }
	    prefix = prefixes[i];
	    requestAnimationFrame = requestAnimationFrame || window[ prefix + 'RequestAnimationFrame' ];
	    cancelAnimationFrame  = cancelAnimationFrame  || window[ prefix + 'CancelAnimationFrame' ] || window[ prefix + 'CancelRequestAnimationFrame' ];
	}
	//如果当前浏览器不支持requestAnimationFrame和cancelAnimationFrame，则会退到setTimeout
	if ( !requestAnimationFrame || !cancelAnimationFrame ) {
	    requestAnimationFrame = function( callback, element ) {
	      var currTime = new Date().getTime();
	      //为了使setTimteout的尽可能的接近每秒60帧的效果
	      var timeToCall = Math.max( 0, 16 - ( currTime - lastTime ) ); 
	      var id = window.setTimeout( function() {
	        callback( currTime + timeToCall );
	      }, timeToCall );
	      lastTime = currTime + timeToCall;
	      return id;
	    };
	    
	    cancelAnimationFrame = function( id ) {
	      window.clearTimeout( id );
	    };
	}
	//得到兼容各浏览器的API
	window.requestAnimationFrame = requestAnimationFrame; 
	window.cancelAnimationFrame = cancelAnimationFrame;


这样子我们就能在所有浏览器上使用requestAnimationFrame和cancelAnimationFrame了。

下面举个简单的例子来说明怎么运用requestAnimationFrame进行动画，下面的代码会将id为demo的div以动画的形式向右移动到300px

	<div id="demo" style="position:absolute; width:100px; height:100px; background:#ccc; left:0; top:0;"></div>
	<script>
	var demo = document.getElementById('demo');
	function rander(){
	    demo.style.left = parseInt(demo.style.left) + 1 + 'px'; //每一帧向右移动1px
	}
	requestAnimationFrame(function(){
	    rander();
	    //当超过300px后才停止
	    if(parseInt(demo.style.left)<=300) requestAnimationFrame(arguments.callee);
	});
	</script>

