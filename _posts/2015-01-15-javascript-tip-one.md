---
layout: post
title: 那些年，收集的javascript代码（二）
categories: [blog ]
tags: [Tool, ]
description: 那些年，收集的javascript代码（二）
---

<h3>一、JavaScript跨平台事件</h3>

对于跨平台事件我们一般这么写(只例举添加事件)：

	function addEventHandler(oTarget, sEventType, fnHandler){
	    if(oTarget.addEventListener){
	        oTarget.addEventListener(sEventType,fnHandler,false);
	    } else if(oTarget.attachEvent){
	        oTarget.attachEvent("on"+sEventType,fnHandler);
	    } else{
	        oTarget["on"+sEventType]=fnHandler;
	    }
	}

那么下面这段代码的效果是什么样的呢？

	<div id="test">Test</div>
	...
	var oDiv=document.getElementById("test");
	addEventHandler(oDiv,"mouseover",function(){
	    alert("over "+this.id);
	});

由于IE的this问题，在IE中果断地弹出了 over undefined，所以跨平台的事件更好的写法是这样的：

	function addEventHandler(oTarget, sEventType, fnHandler){
	    if(oTarget.addEventListener){
	        oTarget.addEventListener(sEventType,fnHandler,false);
	    } else if(oTarget.attachEvent){
	        oTarget.attachEvent("on"+sEventType,function(){
	            return fnHandler.call(oTarget,window.event);
	        });
	    } else{
	        oTarget["on"+sEventType]=fnHandler;
	    }
	}

<h3>二、合并两个Array并去掉重复项</h3>

	Array.prototype.unique = function() {
	    var a = this.concat();
	    for(var i=0; i<a.length; ++i) {
	        for(var j=i+1; j<a.length; ++j) {
	            if(a[i] === a[j])
	                a.splice(j, 1);
	        }
	    }

	    return a;
	};

	//Demo
	var array1 = ["a","b"];
	var array2 = ["b", "c"];
	var array3 = array1.concat(array2).unique();
	// ["a","b","c"]

<h3>三、typeof === "undefined" vs. != null</h3>

	if(typeof neverDeclared == "undefined") //no errors

	if(neverDeclared == null) //throws ReferenceError: neverDeclared is not defined,so，typeof === "undefined" is better!

<h3>四、setTimeout(fn, 0)的意义</h3>

浏览器同时要做很多事，这些事情以队列的方式存在，执行JavaScript只是其中之一，setTimeout(fn, 0)表面上看是立即执行的意思，但实际上只是在浏览器事件队列中添加了一个新的事件，由于队列是先进先出，所以fn会等等到当前队列中的事件执行完后再执行。由于JavaScript的定时器回调函数是异步执行的，所以产生的效果就是等页面上同步事件(包括页面渲染与同步JS代码)执行完之后再执行。

一个简单的示例：

	<script type="text/javascript">
	    //one
	    document.getElementById("imgTest").style.borderBottom="5px solid #000";

	    //two
	    setTimeout(function(){
	        document.getElementById("imgTest").style.borderBottom="5px solid #000";
	    }, 0);
	</script>
	<img src="http://jscode.chinacxy.com/img_lib/m_400_600_01.jpg" id="imgTest" alt=""/>

one会报错，因为页面执行到这里时还没有img，但two却可以。

<h3>五、增强版取URL中的参数</h3>

	function getQueryString() {
	  var result = {}, queryString = location.search.substring(1),
	      re = /([^&amp;=]+)=([^&amp;]*)/g, m;

	  while (m = re.exec(queryString)) {
	    result[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
	  }

	  return result;
	}
	// demo
	var myParam = getQueryString()["myParam"];

<h3>六、检查一个object是否是jQuery object</h3>

	if(obj instanceof jQuery)

<h3>七、检查一个数是否为整数或浮点数</h3>

	function isInt(n) {
	   return typeof n === 'number' &amp;&amp; n % 1 == 0;
	}

	// or ,this support ie3
	function isInt(n) {
	   return typeof n === 'number' &amp;&amp; parseFloat(n) == parseInt(n, 10) &amp;&amp; !isNaN(n);
	}

	function isFloat (n) {
	  return n===+n &amp;&amp; n!==(n|0);
	}

<h3>八、用JavaScript添加style节点</h3>

	var css = 'h1 { background: red; }',
	    head = document.getElementsByTagName('head')[0],
	    style = document.createElement('style');

	style.type = 'text/css';
	if(style.styleSheet){
	    style.styleSheet.cssText = css;
	}else{
	    style.appendChild(document.createTextNode(css));
	}
	head.appendChild(style);

<h3>九、如何跳出双重循环</h3>

	function foo ()
	{
	    dance:
	    for(var k = 0; k < 4; k++){
	        for(var m = 0; m < 4; m++){
	            if(m == 2){
	                break dance;
	            }
	        }
	    }
	}

<h3>十、把一个Array追加到另一个Array上</h3>

	var a=[1,2],b=[3,4,5];

	a.push.apply(a,b);

	/*a: [1, 2, 3, 4, 5]*/

<h3>十一、用jQuery把页面上的一个tag换成另一个tag</h3>

如把页面上所有的codr换为pre：

	<code> A </codr>
	<codr> B </codr>
	<codr> C </codr>
	//change to
	 A 
	 A 
	 A 

jQuery代码：

	$('code').contents().unwrap().wrap('<pre/>');
	//or
	$('code').replaceWith(function(){
	    return $("<pre />").append($(this).contents());
	});

<h3>十二、取数组中的最小值和最大值</h3>

	var arr = new Array();
	arr[0] = 100;
	arr[1] = 0;
	arr[2] = 50;
	var min = Math.min.apply(null, arr),
	    max = Math.max.apply(null, arr);

<h3>十三、取两个数组交集</h3>

	/* finds the intersection of 
	 * two arrays in a simple fashion.  
	 *
	 * PARAMS
	 *  a - first array, must already be sorted
	 *  b - second array, must already be sorted
	 *
	 * NOTES
	 *
	 *  Should have O(n) operations, where n is 
	 *    n = MIN(a.length(), b.length())
	 */
	function arrayIntersection(a, b)
	{
	  var ai=0, bi=0;
	  var result = new Array();

	  while( ai < a.length &amp;&amp; bi < b.length )
	  {
	     if      (a[ai] < b[bi] ){ ai++; }
	     else if (a[ai] > b[bi] ){ bi++; }
	     else /* they're equal */
	     {
	       result.push(a[ai]);
	       ai++;
	       bi++;
	     }
	  }
	  return result;
	}
	console.log(arrayIntersection([1,2,3],[2,3,4,5,6]));//[2,3]

注释中已经说明了，传入的数组要已经排过序的。

<h3>十四、统计一个字符串中某段子串出现的次数</h3>

	var temp = "This is a string.";
	var count = temp.match(/is/g).length;

<h3>十五、方法返回多个值</h3>

	//One
	var mValues= function(){  
	    var a ="a"; 
	    var b = "b";   
	    return [a, b];  
	};
	var values= mValues();
	var valOne= values[0];
	var valTwo = values[1];
	//Two
	var mValues= function(){  
	    var a= "a";
	    var b = "b";    
	    return {
	        'a': a,
	        'b': b
	    };  
	};

	var values= mValues();
	var valOne= values.a;
	var valTwo = values.b;

<h3>十六、Array迭代器</h3>

	function createIterator(x) {
	    var i = 0;

	     return function(){
	       return x[i++];
	    };
	}

	var iterator=createIterator(['a','b','c','d','e','f','g']);
	var current;
	while(current=iterator())
	{
	    console.log(current);
	}

注意，如果数组中有0、false、""、null、NaN迭代器将会停止。

<h3>十七、根据日计算年龄</h3>

	function getAge(dateString) {
	    var today = new Date();
	    var birthDate = new Date(dateString);
	    var age = today.getFullYear() - birthDate.getFullYear();
	    var m = today.getMonth() - birthDate.getMonth();
	    if (m < 0 || (m === 0 &amp;&amp; today.getDate() < birthDate.getDate())) {
	        age--;
	    }
	    return age;
	}
	console.log(getAge("2005,8,1"));//6

<h3>十八、判断当前页面是否被放入了iframe中</h3>

	if(self==top){
	      //not in iframe
	}else{
	      //in iframe
	}

这段代码可以用来防止网页被放入iframe中，不过如果别人定义了self和top变量覆盖了浏览器默认值可能会失效。

<h3>十九、把arguments转换为Array</h3>

	var args = Array.prototype.slice.call(arguments, 0);

<h3>二十、日期格式化</h3>

来源：[javascript日期格式化函数，跟C#中的使用方法类似](http://www.cnblogs.com/artwl/archive/2011/12/29/2305853.html)

	Date.prototype.toString=function(format,loc){
	    var time={};
	    time.Year=this.getFullYear();
	    time.TYear=(""+time.Year).substr(2);
	    time.Month=this.getMonth()+1;
	    time.TMonth=time.Month<10?"0"+time.Month:time.Month;
	    time.Day=this.getDate();
	    time.TDay=time.Day<10?"0"+time.Day:time.Day;
	    time.Hour=this.getHours();
	    time.THour=time.Hour<10?"0"+time.Hour:time.Hour;
	    time.hour=time.Hour<13?time.Hour:time.Hour-12;
	    time.Thour=time.hour<10?"0"+time.hour:time.hour;
	    time.Minute=this.getMinutes();
	    time.TMinute=time.Minute<10?"0"+time.Minute:time.Minute;
	    time.Second=this.getSeconds();
	    time.TSecond=time.Second<10?"0"+time.Second:time.Second;
	    time.Millisecond=this.getMilliseconds();
	    time.Week=this.getDay();

	    var MMMArrEn=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
	    var MMMArr=["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"];
	    var WeekArrEn=["Sun","Mon","Tue","Web","Thu","Fri","Sat"];
	    var WeekArr=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];

	    var oNumber=time.Millisecond/1000;

	    if(format!=undefined &amp;&amp; format.replace(/\s/g,"").length>0){
	        if(loc!=undefined &amp;&amp; loc =="en"){
	            MMMArr=MMMArrEn.slice(0);
	            WeekArr=WeekArrEn.slice(0);
	        }
	        format=format
	            .replace(/yyyy/ig,time.Year)
	            .replace(/yyy/ig,time.Year)
	            .replace(/yy/ig,time.TYear)
	            .replace(/y/ig,time.TYear)
	            .replace(/MMM/g,MMMArr[time.Month-1])
	            .replace(/MM/g,time.TMonth)
	            .replace(/M/g,time.Month)
	            .replace(/dd/ig,time.TDay)
	            .replace(/d/ig,time.Day)
	            .replace(/HH/g,time.THour)
	            .replace(/H/g,time.Hour)
	            .replace(/hh/g,time.Thour)
	            .replace(/h/g,time.hour)
	            .replace(/mm/g,time.TMinute)
	            .replace(/m/g,time.Minute)
	            .replace(/ss/ig,time.TSecond)
	            .replace(/s/ig,time.Second)
	            .replace(/fff/ig,time.Millisecond)
	            .replace(/ff/ig,oNumber.toFixed(2)*100)
	            .replace(/f/ig,oNumber.toFixed(1)*10)
	            .replace(/EEE/g,WeekArr[time.Week]);
	    }
	    else{
	        format=time.Year+"-"+time.Month+"-"+time.Day+" "+time.Hour+":"+time.Minute+":"+time.Second;
	    }
	    return format;
	}

	var d=new Date();
	console.log(d.toString());    //2012-7-27 9:26:52
	console.log(d.toString(""));    //2012-7-27 9:26:52
	console.log(d.toString("yyyy-MM-dd HH:mm:ss"));    //2012-07-27 09:26:52
	console.log(d.toString("yyyy年MM月dd日 HH:mm:ss"));    //2012年07月27日 09:26:52
	console.log(d.toString("yyyy-MM-dd HH:mm:ss fff"));    //2012-07-27 09:26:52 237
	console.log(d.toString("yyyy年 MMM dd EEE"));    //2012年 七月 27 星期五
	console.log(d.toString("yyyy MMM dd EEE","en"));    //2012 Jul 27 Fri

<h3>二十一、JavaScript正则中test小用法</h3>

	var str="a12b123c1234e12345";
	var reg=/a(\d{2})b(\d{3})c(\d{4})/;
	reg.test(str);
	console.log(RegExp.$1,RegExp.$2,RegExp.$3,RegExp.$4);
	// output:12 123 1234 

<h3>二十二、JavaScript判断浏览器类型及主版本</h3>

	function getBrowserInfo(){
	    var Sys = {};
	    var ua = navigator.userAgent.toLowerCase();
	    if (window.ActiveXObject){
	        Sys.b="ie";
	        Sys.v =parseInt(ua.match(/msie ([\d.]+)/)[1]);
	    }
	    else if (document.getBoxObjectFor){
	        Sys.b="firefox";
	        Sys.v =parseInt(ua.match(/firefox\/([\d.]+)/)[1]);
	    }
	    else if (window.MessageEvent &amp;&amp; !document.getBoxObjectFor){
	        Sys.b="chrome";
	        Sys.v == parseInt(ua.match(/chrome\/([\d.]+)/)[1]);
	    }
	    else if (window.opera){
	        Sys.b="opera";
	        Sys.v == parseInt(ua.match(/opera.([\d.]+)/)[1]);
	    }
	    else if (window.openDatabase){
	        Sys.b="safari";
	        Sys.v == parseInt(ua.match(/version\/([\d.]+)/)[1]);
	    }
	    return Sys;
	}
	var bi=getBrowserInfo();
	document.write("Browser:"+bi.b+"    Version:"+bi.v);//Browser:ie Version:10

转自[http://www.cnblogs.com/jscode/archive/2012/07/27/2610613.html](http://www.cnblogs.com/jscode/archive/2012/07/27/2610613.html)