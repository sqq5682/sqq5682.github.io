---
layout: post
title: HTML5之FileReader的使用
categories: [blog ]
tags: [FileReader ]
description: HTML5之FileReader的使用
---

#### 浏览器对FileReader的支持

	if(window.FileReader) {  
	    var fr = new FileReader();  
	    // add your code here  
	}  
	else {  
	    alert("Not supported by your browser!");  
	}


#### 调用FileReader对象的方法

FileReader接口有4个方法，其中3个用来读取文件，另一个用来中断读取。无论读取成功或失败，方法并不会返回读取结果，这一结果存储在result属性中。
FileReader接口的方法：
1. readAsBinaryString(file) : 将文件读取为二进制编码
2. readAsText(file,[encoding]) : 将文件读取为文本
3. readAsDataURL(file) : 将文件读取为DataURL
4. abort(none) : 中断读取操作

#### FileReader接口事件

FileReader接口包含了一套完整的事件模型，用于捕获读取文件时的状态。
1. onabort : 中断
2. onerror : 出错,
3. onloadstart : 开始,
4. onprogress : 正在读取,
5. onload : 读取成功,
6. onloadend : 读取完成，无论成功失败(无论成功失败)。

文件一旦开始读取，无论成功或失败，实例的 result 属性都会被填充。如果读取失败，则 result 的值为 null ，否则即是读取的结果，绝大多数的程序都会在成功读取文件的时候，抓取这个值。

	fr.onload = function() {  
	    this.result;  
	};


#### FileReader接口的使用


	var result=document.getElementById("result");  
	var file=document.getElementById("file");  
	//判断浏览器是否支持FileReader接口  
	if(typeof FileReader == 'undefined'){  
	    result.InnerHTML="<p>你的浏览器不支持FileReader接口！</p>";  
	    //使选择控件不可操作  
	    file.setAttribute("disabled","disabled");  
	}  
	  
	function readAsDataURL(){  
	    //检验是否为图像文件  
	    var file = document.getElementById("file").files[0];  
	    if(!/image\/\w+/.test(file.type)){  
	        alert("看清楚，这个需要图片！");  
	        return false;  
	    }  
	    var reader = new FileReader();  
	    //将文件以Data URL形式读入页面  
	    reader.readAsDataURL(file);  
	    reader.onload=function(e){  
	        var result=document.getElementById("result");  
	        //显示文件  
	        result.innerHTML='<img src="' + e.target.result +'" alt="" />';  
	    }  
	}  
	  
	function readAsBinaryString(){  
	    var file = document.getElementById("file").files[0];  
	    var reader = new FileReader();  
	    //将文件以二进制形式读入页面  
	    reader.readAsBinaryString(file);  
	    reader.onload=function(f){  
	        var result=document.getElementById("result");  
	        //显示文件  
	        result.innerHTML=this.result;  
	    }  
	}  
	  
	function readAsText(){  
	    var file = document.getElementById("file").files[0];  
	    var reader = new FileReader();  
	    //将文件以文本形式读入页面  
	    reader.readAsText(file);  
	    reader.onload=function(f){  
	        var result=document.getElementById("result");  
	        //显示文件  
	        result.innerHTML=this.result;  
	    }  
	}  
  

	<p>  
	    <label>请选择一个文件：</label>  
	    <input type="file" id="file" />  
	    <input type="button" value="读取图像" onclick="readAsDataURL()" />  
	    <input type="button" value="读取二进制数据" onclick="readAsBinaryString()" />  
	    <input type="button" value="读取文本文件" onclick="readAsText()" />  
	</p>  
	<div id="result" name="result"></div>



