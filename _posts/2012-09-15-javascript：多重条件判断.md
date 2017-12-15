---
layout: post
title: javascript：多重条件判断
categories: [blog ]
tags: [ ]
description: javascript：多重条件判断
---


**javascript** 是一门精巧的语言，可大可小，可伸可缩，如意金箍棒一般，运用恰当，可敌千夫。比如一个场景，有的人要写上百行代码，但是有的人寥寥几笔即可实现，思路就在弹指间。要想学好一门语言，就要掌握其要义，归纳其精髓，方可如鱼得水，运筹帷幄。

js在开发大型组件库的时候经常会碰到很多的逻辑分支情况。比如博客园的编辑框编写：

	if(target === "font"){
	  someFunction(){...}
	}
	else if(target === "code"){
	  someFunction(){...}  
	}
	else if(target === "table"){
	  someFunction(){...}
	}
	else if(target === "images"){
	  someFunction(){...}
	}
	else if(target === "link"){
	  someFunction(){...}  
	}
	else if(target === "file"){
	  someFunction(){...}  
	}

为了逻辑清晰当然也可以这样写：

	switch(target){
	    case : "font" :
	           someFunction(){...} 
	    break; 
	    case : "code" :
	           someFunction(){...} 
	    break;
	    case : "table" :
	           someFunction(){...} 
	    break; 
	    case : "images" :
	           someFunction(){...} 
	    break; 
	    case : "link" :
	           someFunction(){...} 
	    break;
	　　case : "file" :
	           someFunction(){...} 
	    break;
	}

当然这样的一层逻辑很容易书写和维护，但是，如果碰到下面还有多重分支的情况改如何处理呢，大部分人都是继续if else或者switch case。于是代码就变的越来越长，越来越难维护。就像下面的代码一样：

	switch(target){
	    case : "font" :
	           someFunction(){...} 
	    break; 
	    case : "code" :
	          switch(code){
	                 case : "java" :
	                       someFunction(){...} 
	                 break;
	                 case : "c" :
	                       someFunction(){...} 
	                 break;
	                 case : "c++" :
	                       someFunction(){...} 
	                 break;
	          }

	    break;
	    case : "table" :
	           someFunction(){...} 
	    break; 
	    case : "images" :
	           someFunction(){...} 
	    break; 
	    case : "link" :
	           someFunction(){...} 
	    break;
	　　case : "file" :
	           someFunction(){...} 
	    break;
	}   

js是一门面向对象的语言，我们能不能用面向对象的思想来解决这个问题呢？请看下面的源码：

	editor = {
	     "font" : function(){...}
	     "code" : function(){...}
	     "table" : function(){...}
	     "images" : function(){...}
	     "file" : function(){...}
	}

	editor[target]();  
	
这样是不是清晰明了了很多？而且效率也肯定提升了，因为是对象直接寻址。

大致思路如下：

先创建一个对象，把所有的判断分支都放到这个对象里，然后再调用。

那么是么时候需要用这个方法，什么时候不需要用呢？

先说需要用的：

**一、在判断分支很多的情况下建议使用。条理清晰。**

**二、在分支里的逻辑很复杂的情况下，可以起到逻辑拆分的作用。**

再说不需要用的情况：

一、简单的逻辑判断。

二、分支比较少的情况。