---
layout: post
title: js操作cookie方法
categories: [blog ]
tags: [Tool, ]
description: js操作cookie方法
---

代码如下：

	var myCookie = {
	   set:function(name,value,time){
	      var cookieString=name+'='+escape(value); 
	      //判断是否设置过期时间默认是小时
	      if(time>0){ 
	         var date=new Date(); 
	         date.setTime(date.getTime+time*3600*1000); 
	         cookieString=cookieString+'; expires='+date.toGMTString(); 
	      } 
	      document.cookie=cookieString; 
	   },
	   get:function(name){
	      var strCookie=document.cookie; 
	      var arrCookie=strCookie.split('; '); 
	      for(var i=0;i<arrCookie.length;i++){ 
	         var arr=arrCookie[i].split('='); 
	         if(arr[0]==name)return arr[1]; 
	      } 
	      return false; 
	   },
	   delete:function(name){
	      var date=new Date(); 
	      date.setTime(date.getTime()-10000); 
	      document.cookie=name+'=v; expires='+date.toGMTString(); 
	   }
	}

> myCookie.set(name,value,time)//设置Cookie的name

> myCookie.get(name)//获取Cookie的name

> myCookie.delete(name)//删除Cookie的name
