---
layout: post
title: 那些年，收集的javascript代码（一）
categories: [blog ]
tags: [Tool, ]
description: 那些年，收集的javascript代码（一）
---

#### 一、取URL中的参数

function getParameterByName(name) {
    var match = RegExp('[?&amp;]' + name + '=([^&amp;]*)')
                    .exec(window.location.search);
    return match &amp;&amp; decodeURIComponent(match[1].replace(/\+/g, ' '));
}

#### 二、正则分组

	var testStr="<div><img src='/a.jpg' alt='' /><span>test<img src='/b.jpg' alt='' /><span>TTest<img src='/c.png' alt='' /></div>";
	var reg=/<img\ssrc='(.*?)'\s+alt=''\s*\/>/g;
	var match=reg.exec(testStr),results=[];
	while(match != null){
	    results.push(match[1]);
	    match=reg.exec(testStr);
	}
	console.log(results);
	/*
	Array ["/a.jpg", "/b.jpg", "/c.png"]
	*/

#### 三、为什么parseInt(1/0,19)的结果为18

1/0的结果是Infinity，所以parseInt(1/0,19)等同于parseInt("Infinity",19)，而在19进制中：

	 19进制       10进制
	--------------------
	   0            0
	   1            1
	   2            2
	   3            3
	   4            4
	   5            5
	   6            6
	   7            7
	   8            8
	   9            9
	   a            10
	   b            11
	   c            12
	   d            13
	   e            14
	   f             15
	   g            16
	   h            17
	   i             18

i表示18，所以parseInt(1/0,19)的结果为18。

#### 四、jQuery中获取设置checkbox选中状态

由于在jQuery1.6以后.attr("checked")的返回结果是 checked，所以一般用下面两种方法获取选中状态：

	$("#checkboxID").is(":checked");
	//jQuery 1.6 +
	$("#checkboxID").prop("checked");

选中checkbox

一个简单的示例：

	//jQuery 1.6+
	$("#checkboxID").prop("checked", true);
	$("#checkboxID").prop("checked", false);

	//jQuery 1.5 and below
	$('#checkboxID').attr('checked','checked')
	$('#checkboxID').removeAttr('checked')

#### 五、jQuery中判断一个元素是否存在

	if ($(selector).length)

#### 六、用JavaScript对URL进行编码

	var myUrl = "http://example.com/index.html?param=1&amp;anotherParam=2";
	var myOtherUrl = "http://example.com/index.html?url=" + encodeURIComponent(myUrl);

#### 七、jQuery中event.preventDefault() 与 return false 的区别

	//Demo1 event.preventDefault()
	$('a').click(function (e) {
	    // custom handling here

	    e.preventDefault();
	});

	//Demo2 return false
	$('a').click(function () {
	    // custom handling here

	    return false;
	};

jQuery中return false相当于同时调用e.preventDefault 和 e.stopPropagation。要注意的是，在原生js中，return false仅仅相当于调用了e.preventDefault。

#### 八、JavaScript检查一个字符串是否为空最简单的方法

	if (strValue) {
	    //do something
	}

#### 九、用JavaScript添加和删除class

	//Add Class
	document.getElementById("MyElement").className += " MyClass";

	//Remove Class
	document.getElementById("MyElement").className = document.getElementById("MyElement").className.replace(/(?:^|\s)MyClass(?!\S)/,'');

#### 十、在jQuery中取消一个ajax请求

	var xhr = $.ajax({
	    type: "POST",
	    url: "test.php",
	    data: "name=test",
	    success: function(msg){
	       alert( msg );
	    }
	});

	//取消请求
	xhr.abort()

#### 十一、JavaScript删除数组中的项 delete vs splice

	var myArray=["a","b","c"];
	delete myArray[0];
	for(var i=0,j=myArray.length;i<j;i++){
	    console.log(myArray[i]);
	    /*
	    undefined
	    b
	    c
	    */
	}

	var myArray2=["a","b","c"];
	myArray2.splice(0,1);
	for(var i=0,j=myArray2.length;i<j;i++){
	    console.log(myArray2[i]);
	    /*
	    b
	    c
	    */
	}

上面的代码已经说明区别了，一个是设置为undefined，一个是真正的删除了。

#### 十二、JavaScript中16进制与10进制相互转换

	var sHex=(255).toString(16);//ff
	var iNum=parseInt("ff",16);//255

#### 十三、JavaScript多行字符串

如何在JavaScript中方便地写一个多行字符串呢，有三种方案，你自己选吧：

	//one
	var testHtml="a"+"b"+"c";

	//two
	var testHtml2="a\b\c";

	//three
	var testHtml3=["a","b","c"].join("");

#### 十四、JavaScript中!!操作符是什么

	console.log(!!10);//true
	console.log(!!0);//false
	console.log(!!"abc");//true
	console.log(!!"");//false

简单地说就是把右侧的值转为bool值

#### 十五、JavaScript实现endsWith

	String.prototype.endsWith = function(suffix) {
	    return this.indexOf(suffix, this.length - suffix.length) !== -1;
	};

	//or
	function endsWith(str, suffix) {
	    return str.indexOf(suffix, str.length - suffix.length) !== -1;
	}

#### 十六、JavaScript中克隆对象

	function clone(obj) {
	    // Handle the 3 simple types, and null or undefined
	    if (null == obj || "object" != typeof obj) return obj;

	    // Handle Date
	    if (obj instanceof Date) {
	        var copy = new Date();
	        copy.setTime(obj.getTime());
	        return copy;
	    }

	    // Handle Array
	    if (obj instanceof Array) {
	        var copy = [];
	        for (var i = 0, var len = obj.length; i < len; ++i) {
	            copy[i] = clone(obj[i]);
	        }
	        return copy;
	    }

	    // Handle Object
	    if (obj instanceof Object) {
	        var copy = {};
	        for (var attr in obj) {
	            if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
	        }
	        return copy;
	    }

	    throw new Error("Unable to copy obj! Its type isn't supported.");
	}

#### 十七、JavaScript字符与ASCII码间的转换

	console.log("\n".charCodeAt(0));//10
	console.log(String.fromCharCode(65));//A

#### 十八、JavaScript中浮点数的相等判断不能用 ==

	console.log(0.1+0.2 == 0.3);//false
	console.log(Math.abs(0.1+0.2 - 0.3) < 0.000001);//true

如上所示，浮点数相等判断要用差的绝对值小于某一个数来判断。至于原因可以参考这里：[http://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html](http://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html)

#### 十九、JavaScript中base64编码

	var Base64 = {
	// private property
	_keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

	// public method for encoding
	encode : function (input) {
	    var output = "";
	    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
	    var i = 0;

	    input = Base64._utf8_encode(input);

	    while (i < input.length) {

	        chr1 = input.charCodeAt(i++);
	        chr2 = input.charCodeAt(i++);
	        chr3 = input.charCodeAt(i++);

	        enc1 = chr1 >> 2;
	        enc2 = ((chr1 &amp; 3) << 4) | (chr2 >> 4);
	        enc3 = ((chr2 &amp; 15) << 2) | (chr3 >> 6);
	        enc4 = chr3 &amp; 63;

	        if (isNaN(chr2)) {
	            enc3 = enc4 = 64;
	        } else if (isNaN(chr3)) {
	            enc4 = 64;
	        }

	        output = output +
	        this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
	        this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);

	    }

	    return output;
	},

	// public method for decoding
	decode : function (input) {
	    var output = "";
	    var chr1, chr2, chr3;
	    var enc1, enc2, enc3, enc4;
	    var i = 0;

	    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

	    while (i < input.length) {

	        enc1 = this._keyStr.indexOf(input.charAt(i++));
	        enc2 = this._keyStr.indexOf(input.charAt(i++));
	        enc3 = this._keyStr.indexOf(input.charAt(i++));
	        enc4 = this._keyStr.indexOf(input.charAt(i++));

	        chr1 = (enc1 << 2) | (enc2 >> 4);
	        chr2 = ((enc2 &amp; 15) << 4) | (enc3 >> 2);
	        chr3 = ((enc3 &amp; 3) << 6) | enc4;

	        output = output + String.fromCharCode(chr1);

	        if (enc3 != 64) {
	            output = output + String.fromCharCode(chr2);
	        }
	        if (enc4 != 64) {
	            output = output + String.fromCharCode(chr3);
	        }

	    }

	    output = Base64._utf8_decode(output);

	    return output;

	},

	// private method for UTF-8 encoding
	_utf8_encode : function (string) {
	    string = string.replace(/\r\n/g,"\n");
	    var utftext = "";

	    for (var n = 0; n < string.length; n++) {

	        var c = string.charCodeAt(n);

	        if (c < 128) {
	            utftext += String.fromCharCode(c);
	        }
	        else if((c > 127) &amp;&amp; (c < 2048)) {
	            utftext += String.fromCharCode((c >> 6) | 192);
	            utftext += String.fromCharCode((c &amp; 63) | 128);
	        }
	        else {
	            utftext += String.fromCharCode((c >> 12) | 224);
	            utftext += String.fromCharCode(((c >> 6) &amp; 63) | 128);
	            utftext += String.fromCharCode((c &amp; 63) | 128);
	        }

	    }

	    return utftext;
	},

	// private method for UTF-8 decoding
	_utf8_decode : function (utftext) {
	    var string = "";
	    var i = 0;
	    var c = c1 = c2 = 0;

	    while ( i < utftext.length ) {

	        c = utftext.charCodeAt(i);

	        if (c < 128) {
	            string += String.fromCharCode(c);
	            i++;
	        }
	        else if((c > 191) &amp;&amp; (c < 224)) {
	            c2 = utftext.charCodeAt(i+1);
	            string += String.fromCharCode(((c &amp; 31) << 6) | (c2 &amp; 63));
	            i += 2;
	        }
	        else {
	            c2 = utftext.charCodeAt(i+1);
	            c3 = utftext.charCodeAt(i+2);
	            string += String.fromCharCode(((c &amp; 15) << 12) | ((c2 &amp; 63) << 6) | (c3 &amp; 63));
	            i += 3;
	        }

	    }

	    return string;
	}
	}

	//encode
	Base64.encode("Test"); //VGVzdA==

	//decode
	Base64.decode("VGVzdA=="); // Test

#### 二十、jQuery中each跟map的区别

each跟map都可以用来遍历Array或Object，区别是each不改变原来的Array或Object，map是操作给定的Array或Object返回一个新Array或Object。Demo:

	var items = [1,2,3,4];
	$.each(items, function() {
	  alert('this is ' + this);//alert 1,2,3,4
	});
	var newItems = $.map(items, function(i) {
	  return i + 1;
	});
	// newItems is [2,3,4,5]

map会占用更多的内存，所以如果只是遍历建议用each。

#### 二十一、判断一个对象是否为数组

	function isArray(obj){
	    return Object.prototype.toString.call(obj) == "[object Array]";
	}

不能用instanceof 和 constructor来判断，原因参考：[http://perfectionkills.com/instanceof-considered-harmful-or-how-to-write-a-robust-isarray/](http://perfectionkills.com/instanceof-considered-harmful-or-how-to-write-a-robust-isarray/)

#### 二十二、通过原型继承创建一个新对象

	function inherit(p){
	    if(!p){
	        throw TypeError("p is not an object or null");
	    }
	    if(Object.create){
	        return Object.create(p);
	    }
	    var t=typeof p;
	    if(t !== "object" &amp;&amp; t !== "function"){
	        throw TypeError("p is not an object or null");
	    }
	    function f(){};
	    f.prototype=p;
	    return new f();
	}

注意：这种方法不能处理参数为null的情况。
转自：[http://www.cnblogs.com/jscode/archive/2012/07/25/2605395.html](http://www.cnblogs.com/jscode/archive/2012/07/25/2605395.html)