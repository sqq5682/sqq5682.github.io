---
layout: post
title: js动态处理transitionend和animationend动画事件
categories: [blog ]
tags: [transitionend,animationend ]
description: js动态处理transitionend和animationend动画事件
---

针对transform、transitionend、animationend在移动和pc端浏览器的前缀的兼容问题,写成一个简单js处理css3 transitionend和animationend动画事件的原声 js函数，如下

	(function (root, factory) {
	    if (typeof define === 'function') {
	        define(factory);
	    }else if (typeof exports === 'object') {
	        module.exports = factory;
	    } else {
	        root.WN = factory();
	    }
	})(this,function(){
	    var WN = {},
	        body=document.body || document.documentElement,
	        style=body.style, 
	        transition="transition",
	        transitionEnd,
	        animationEnd,
	        vendorPrefix; 
	    transition=transition.charAt(0).toUpperCase() + transition.substr(1);
	    vendorPrefix=(function(){//现在的opera也是webkit
	        var  i=0, vendor=["Moz", "Webkit", "Khtml", "O", "ms"];
	        while (i < vendor.length) {
	            if (typeof style[vendor[i] + transition] === "string") {
	              return vendor[i];
	            }
	            i++;
	        }
	        return false;
	    })();
	    transitionEnd=(function(){
	        var transEndEventNames = {
	          WebkitTransition : 'webkitTransitionEnd',
	          MozTransition    : 'transitionend',
	          OTransition      : 'oTransitionEnd otransitionend',
	          transition       : 'transitionend'
	        }
	        for(var name in transEndEventNames){
	            if(typeof style[name] === "string"){
	                return transEndEventNames[name]
	            }
	        }
	    })();
	    animationEnd=(function(){
	        var animEndEventNames = {
	          WebkitAnimation : 'webkitAnimationEnd',
	          animation      : 'animationend'
	        }
	        for(var name in animEndEventNames){
	            if(typeof style[name] === "string"){
	                return animEndEventNames[name]
	            }
	        }
	    })();
	    WN.addTranEvent=function(elem,fn,duration){
	        var called=false;
	        var fncallback = function(){
	                if(!called){
	                    fn();
	                    called=true;
	                }
	        };
	        function hand(){    
	            elem.addEventListener(transitionEnd, function () {
	                elem.removeEventListener(transitionEnd, arguments.callee, false);
	                    fncallback();
	            }, false);
	        }
	        setTimeout(hand,duration);
	    };
	    WN.addAnimEvent=function(elem,fn){
	        elem.addEventListener(animationEnd,fn,false)
	    };
	 
	    WN.removeAnimEvent=function(elem,fn){
	        elem.removeEventListener(animationEnd,fn,false)
	    };
	 
	    WN.setStyleAttribute=function(elem,val){
	        if(Object.prototype.toString.call(val)==="[object Object]"){
	            for(var name in val){
	                if(/^transition|animation|transform/.test(name)){
	                    var styleName=name.charAt(0).toUpperCase() + name.substr(1);
	                    elem.style[vendorPrefix+styleName]=val[name];
	                }else{
	                    elem.style[name]=val[name];
	                }
	            }
	        }
	    };
	    WN.transitionEnd=transitionEnd;
	    WN.vendorPrefix=vendorPrefix;
	    WN.animationEnd=animationEnd;
	    return WN;
	});


这个函数方法有：

**1、addTranEvent(elem,fn,duration)：用于绑定transtionend事件，处理掉多次执行的问题**

具体调用的如下：


	.wrap{
		width:50px;
		height:50px;
		position: relative;
		background:#f60;
		-webkit-transition-duration: 1s;
		-o-transition-duration: 1s;
		transition-duration: 1s;
		-webkit-transition-timing-function: linear;
		-o-transition-timing-function: linear;
		transition-timing-function: linear;
	}
	.wrap.moving{
		width:100px;
		height:100px;
		background:#000;
		-webkit-transform: translate(150px, 150px) rotate(45deg);
		-ms-transform: translate(150px, 150px) rotate(45deg);
		-o-transform: translate(150px, 150px) rotate(45deg);
		transform: translate(150px, 150px) rotate(45deg);	
	}



	var wrap=$('.wrap');
	function callback(){
		wrap.html("动画结束啦！只执行了一次transitioned")
	}
	$('#start').on("click",function(){
		$text.html("");
		wrap.addClass("moving");
		WN.addTranEvent(wrap.get(0),callback,1);
	});
	$('#reset').on("click",function(){
		$text.html("");
		wrap.removeClass("moving");
		WN.addTranEvent(wrap.get(0),callback,1);
	});


**2、addAnimEvent(elem,fn),removeAnimEvent(elem,fn)：分别用于绑定和解绑animationend事件**

具体调用的如下：

	.wrap{
		width:100px;
		height:100px;
		border:1px solid #5d5d5d;
		background: #f60;
		overflow:hidden;
		margin:10px;
	}
	.wrap.moving{
		width:100px;
		height:100px;
		-webkit-transform: translate(100px,0px);
		-moz-transform: translate(100px,0px);
		-ms-transform: translate(100px,0px);
		transform: translate(100px,0px);
		-webkit-animation: mymove 1s;
		-o-animation: mymove 1s;
		animation: mymove 1s;
	}
	@keyframes mymove{
		0%{
			-webkit-transform: translate(0px,0px);
			-moz-transform: translate(0px,0px);
			-ms-transform: translate(0px,0px);
			transform: translate(0px,0px);
		}
		100%{
			-webkit-transform: translate(100px,0px);
			-moz-transform: translate(100px,0px);
			-ms-transform: translate(100px,0px);
			transform: translate(100px,0px);
		}
	}
	@-webkit-keyframes mymove{
		0%{
			-webkit-transform: translate(0px,0px);
			-moz-transform: translate(0px,0px);
			-ms-transform: translate(0px,0px);
			transform: translate(0px,0px);
		}
		100%{
			-webkit-transform: translate(100px,0px);
			-moz-transform: translate(100px,0px);
			-ms-transform: translate(100px,0px);
			transform: translate(100px,0px);
		}
	}



	var $movebox=$("#J_movebox"),
		$text=$("#J_text"),
		$resetbtn=$("#J_returnbeginbtn"),
		$delbtn=$("#J_delevent"),
		$reevent=$("#J_reevent"),
		$movebtn=$("#J_movingbtn");
			
	function callback(){
		$text.html("animation结束啦！")
	}
	WN.addAnimEvent($movebox.get(0),callback);
	$movebtn.on("click",function(){
		$text.html("");
		$movebox.addClass('moving');	
	});
	$resetbtn.on("click",function(){
		$text.html("");
		$movebox.removeClass("moving");
	});
	$delbtn.on("click",function(){
		alert("删除动画事件成功,动画结束后就不会触发任何函数！")
		WN.removeAnimEvent($movebox.get(0),callback);
	});
	$reevent.on("click",function(){
		WN.addAnimEvent($movebox.get(0),callback);
		alert("恢复动画事件成功,动画结束后就会触发函数！")
	})


**3、setStyleAttribute(elem,val)：用于设置css3的属性**


	.movebox{
		width:100px;
		height:100px;
		border:1px solid #5d5d5d;
		background: #f60;
		overflow:hidden;
		margin:10px;
	}


	var $movebox=$("#J_movebox"),
		$resetbtn=$("#J_returnbeginbtn"),
		$text=$("#J_text");
		$movebtn=$("#J_movingbtn");


	$movebtn.on("click",function(){
		WN.setStyleAttribute($movebox.get(0),{
				transitionProperty:"all",
				transitionDuration:"1s",
				width:"125px",
				transform:"translate(75px,75px) rotate(45deg) skew(10deg,10deg)"
			})
	});
	$resetbtn.on("click",function(){
		WN.setStyleAttribute($movebox.get(0),{
				transitionProperty:"all",
				transitionDuration:"1s",
				width:"",
				transform:""
			})
	})

内容来源[http://wnworld.com/archives/204.html](http://wnworld.com/archives/204.html)