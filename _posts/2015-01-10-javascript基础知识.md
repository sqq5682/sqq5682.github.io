---
layout: post
title: javascript基础知识
categories: [blog ]
tags: [ ]
description: javascript基础知识
---

**1.javascript的数组的操作**

	//定义数组
	var pageIds = new Array();
	pageIds.push('A');

	pageIds.length;//数组长度

	//shift：删除原数组第一项，并返回删除元素的值；如果数组为空则返回undefined
	var a = [1,2,3,4,5];
	var b = a.shift(); //a：[2,3,4,5] b：1

	//unshift：将参数添加到原数组开头，并返回数组的长度
	var a = [1,2,3,4,5];
	var b = a.unshift(-2,-1); //a：[-2,-1,1,2,3,4,5] b：7
	//注：在IE6.0下测试返回值总为undefined，FF2.0下测试返回值为7，所以这个方法的返回值不可靠，需要用返回值时可用splice代替本方法来使用。

	//pop：删除原数组最后一项，并返回删除元素的值；如果数组为空则返回undefined
	var a = [1,2,3,4,5];
	var b = a.pop(); //a：[1,2,3,4] b：5

	//push：将参数添加到原数组末尾，并返回数组的长度
	var a = [1,2,3,4,5];
	var b = a.push(6,7); //a：[1,2,3,4,5,6,7] b：7

	//concat：返回一个新数组，是将参数添加到原数组中构成的
	var a = [1,2,3,4,5];
	var b = a.concat(6,7); //a：[1,2,3,4,5] b：[1,2,3,4,5,6,7]

	//splice(start,deleteCount,val1,val2,)：从start位置开始删除deleteCount项，并从该位置起插入val1,val2,
	var a = [1,2,3,4,5];
	var b = a.splice(2,2,7,8,9); //a：[1,2,7,8,9,5] b：[3,4]
	var b = a.splice(0,1); //同shift
	a.splice(0,0,-2,-1); var b = a.length; //同unshift
	var b = a.splice(a.length-1,1); //同pop
	a.splice(a.length,0,6,7); var b = a.length; //同push

	//reverse：将数组反序
	var a = [1,2,3,4,5];
	var b = a.reverse(); //a：[5,4,3,2,1] b：[5,4,3,2,1]

	//sort(orderfunction)：按指定的参数对数组进行排序
	var a = [1,2,3,4,5];
	var b = a.sort(); //a：[1,2,3,4,5] b：[1,2,3,4,5]

	//slice(start,end)：返回从原数组中指定开始下标到结束下标之间的项组成的新数组
	var a = [1,2,3,4,5];
	var b = a.slice(2,5); //a：[1,2,3,4,5] b：[3,4,5]

	//join(separator)：将数组的元素组起一个字符串，以separator为分隔符，省略的话则用默认用逗号为分隔符
	var a = [1,2,3,4,5];
	var b = a.join("|"); //a：[1,2,3,4,5] b："1|2|3|4|5"

**2、最常用的字符串函数**

字符串(String) 

1.声明 

	var myString = new String("Every good boy does fine."); 
	var myString = "Every good boy does fine."; 

2.字符串连接

	var myString = "Every " + "good boy " + "does fine."; 
	var myString = "Every ";  myString += "good boy does fine."; 

3.截取字符串

	//截取第 6 位开始的字符 
	var myString = "Every good boy does fine."; 
	var section = myString.substring(6);    //结果: "good boy does fine." 
	//截取第 0 位开始至第 10 位为止的字符 
	var myString = "Every good boy does fine."; 
	var section = myString.substring(0,10); //结果: "Every good" 
	//截取从第 11 位到倒数第 6 位为止的字符 
	var myString = "Every good boy does fine."; 
	var section = myString.slice(11,-6);    //结果: "boy does" 
	//从第 6 位开始截取长度为 4 的字符 
	var myString = "Every good boy does fine."; 
	var section = myString.substr(6,4);     //结果: "good" 

4.转换大小写 

	var myString = "Hello"; 
	var lcString = myString.toLowerCase();  //结果: "hello" 
	var ucString = myString.toUpperCase();  //结果: "HELLO" 

5.字符串比较 

	var aString = "Hello!"; 
	var bString = new String("Hello!"); 
	if( aString == "Hello!" ){ }    //结果: true 
	if( aString == bString ){ }     //结果: true 
	if( aString === bString ){ }    //结果: false (两个对象不同,尽管它们的值相同) 

6.检索字符串 

	var myString = "hello everybody."; 
	// 如果检索不到会返回-1,检索到的话返回在该串中的起始位置 
	if( myString.indexOf("every") &gt; -1 ){ } //结果: true 

7.查找替换字符串 

	var myString = "I is your father."; 
	var result = myString.replace("is","am");   //结果: "I am your father." 

8.特殊字符: 

	\b : 后退符         \t : 水平制表符 
	\n : 换行符         \v : 垂直制表符 
	\f : 分页符         \r : 回车符 
	\" : 双引号         \' : 单引号 
	\\ : 反斜杆 

9.将字符转换成Unicode编码 

	var myString = "hello"; 
	var code = myString.charCodeAt(3);  //返回"l"的Unicode编码(整型) 
	var char = String.fromCharCode(66); //返回Unicode为66的字符 10.将字符串转换成URL编码 
	var myString = "hello all"; 
	var code = encodeURI(myString);     //结果: "hello%20all" 
	var str = decodeURI(code);          //结果: "hello all" 
	//相应的还有:  encodeURIComponent()  decodeURIComponent()

**3、最常用的数字函数**

数字型(Number)

1.声明 

	var i = 1; 
	var i = new Number(1); 

2.字符串与数字间的转换 

	var i = 1; 
	var str = i.toString();     //结果: "1" 
	var str = new String(i);    //结果: "1" 
	i = parseInt(str);          //结果: 1 
	i = parseFloat(str);        //结果: 1.0 
	
	//注意: parseInt,parseFloat会把一个类似于"32G"的字符串,强制转换成32 

3.判断是否为有效的数字 

	var i = 123;  var str = "string"; 
	if( typeof i == "number" ){ }   //true 
	
	//某些方法(如:parseInt,parseFloat)会返回一个特殊的值NaN(Not a Number) 
	//请注意第2点中的[注意],此方法不完全适合判断一个字符串是否是数字型!! 
	i = parseInt(str); 
	if( isNaN(i) ){ } 
  
4.数字型比较 

	//此知识与[字符串比较]相同 

5.小数转整数 

	var f = 1.5; 
	var i = Math.round(f);  //结果:2 (四舍五入) 
	var i = Math.ceil(f);   //结果:2 (返回大于f的最小整数) 
	var i = Math.floor(f);  //结果:1 (返回小于f的最大整数) 

6.格式化显示数字 

	var i = 3.14159; 
	
	//格式化为两位小数的浮点数 
	var str = i.toFixed(2);     //结果: "3.14" 
	
	//格式化为五位数字的浮点数(从左到右五位数字,不够补零) 
	var str = i.toPrecision(5); //结果: "3.1415" 

7.X进制数字的转换 

	//不是很懂 -.- 
	var i = parseInt("0x1f",16); 
	var i = parseInt(i,10); 
	var i = parseInt("11010011",2);

8.随机数 

	//返回0-1之间的任意小数 
	var rnd = Math.random(); 
	//返回0-n之间的任意整数(不包括n)    
	var rnd = Math.floor(Math.random() * n)
