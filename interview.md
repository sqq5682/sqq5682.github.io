---
layout: page
title: "interview"
description: "嘿，你总算找到我啦"
header-img: "img/plane.jpg"
---

### vue相关部分

#### 什么是mvvm？


> MVVM是Model-View-ViewModel的缩写。mvvm是一种设计思想。Model 层代表数据模型，也可以在Model中定义数据修改和操作的业务逻辑；View 代表UI 组件，它负责将数据模型转化成UI 展现出来，ViewModel 是一个同步View 和 Model的对象。

在MVVM架构下，View 和 Model 之间并没有直接的联系，而是通过ViewModel进行交互，Model 和 ViewModel 之间的交互是双向的， 因此View 数据的变化会同步到Model中，而Model 数据的变化也会立即反应到View 上。  
ViewModel 通过双向数据绑定把 View 层和 Model 层连接了起来，而View和Model之间的同步工作完全是自动的，无需人为干涉，因此开发者只需关注业务逻辑，不需要手动操作DOM, 不需要关注数据状态的同步问题，复杂的数据状态维护完全由 MVVM 来统一管理。

#### mvvm和mvc区别？

> mvc和mvvm其实区别并不大。都是一种设计思想。主要就是mvc中Controller演变成mvvm中的viewModel。mvvm主要解决了mvc中大量的DOM操作使页面渲染性能降低，加载速度变慢，影响用户体验。和当Model频繁发生变化，开发者需要主动更新到View 。

#### vue的优点是什么？


低耦合。视图（View）可以独立于Model变化和修改，一个ViewModel可以绑定到不同的"View"上，当View变化的时候Model可以不变，当Model变化的时候View也可以不变。  
可重用性。你可以把一些视图逻辑放在一个ViewModel里面，让很多view重用这段视图逻辑。  
独立开发。开发人员可以专注于业务逻辑和数据的开发（ViewModel），设计人员可以专注于页面设计，使用Expression Blend可以很容易设计界面并生成xml代码。  
可测试。界面素来是比较难于测试的，而现在测试可以针对ViewModel来写。

#### 请详细说下你对vue生命周期的理解？

> 总共分为8个阶段创建前/后，载入前/后，更新前/后，销毁前/后。

创建前/后： 在beforeCreate阶段，vue实例的挂载元素el和数据对象data都为undefined，还未初始化。在created阶段，vue实例的数据对象data有了，el还没有。  
载入前/后：在beforeMount阶段，vue实例的$el和data都初始化了，但还是挂载之前为虚拟的dom节点，data.message还未替换。在mounted阶段，vue实例挂载完成，data.message成功渲染。  
更新前/后：当data变化时，会触发beforeUpdate和updated方法。  
销毁前/后：在执行destroy方法后，对data的改变不会再触发周期函数，说明此时vue实例已经解除了事件监听以及和dom的绑定，但是dom结构依然存在。

#### 组件之间的传值？

父组件与子组件传值

	//父组件通过标签上面定义传值
	 <template>
	 	<Main :obj="data"></Main> 
	 </template>
	 <script> 
	 	//引入子组件     
	 	import Main form "./main"          
	 	exprot default{         
	 		name:"parent",         
	 		data(){             
	 			return {                 
	 				data:"我要向子组件传递数据"             
	 			}         
	 		},         
	 		//初始化组件         
	 		components:{             
	 			Main         
	 		}
	 	} 
	 </script> 

	 //子组件通过props方法接受数据 
	 <template>     
	 	<div>{{data}}</div> 
	 </template> 
	 <script>     
	 	exprot default{         
	 		name:"son",         //接受父组件传值         
	 		props:["data"]     
	 	} 
	 </script>

子组件向父组件传递数据

	 //子组件通过$emit方法传递参数 
	 <template>    
	 	<div v-on:click="events"></div> 
	 </template> 
	 <script>     
	 	//引入子组件     
	 	import Main form "./main"          
	 	exprot default{         
	 		methods:{             
	 			events:function(){   

	 			}         
	 		}     
	 	} 
	 </script> 


	 <template>
	 	<div>{{data}}</div> 
	 </template> 
	 <script>     
	 	exprot default{         
	 		name:"son",         //接受父组件传值         
	 		props:["data"]     
	 	} 
	 </script>


#### 路由模块

路由模块的本质 就是建立起url和页面之间的映射关系  
1、SPA的基本概念和工作原理  
SPA：single page application 单一页面应用程序，只有一个完整的页面；  
它在加载页面时，不会加载整个页面，而是只更新某个指定的容器中内容。比如Gmail、移动的webApp  
工作原理：

	1.解析地址栏 
	完整的页面地址、路由地址
	2.根据路由地址从路由词典中找到真正的要加载的页面
	3.发起ajax请求 
    请求要加载的页面4.像指定的容器中 插入加载来的页面

2、路由模块的基本使用  
1).引入vue.js vue-router.js  
2).指定一个容器router-view  
3).创建业务所需要用到的组件类  

	var MyLogin = Vue.component()
    
4.配置路由词典 

	const myRoutes = [
	  {path:'',component:MyLogin},
	  {path:'/login',component:MyLogin}
	 ]; const myRouter = new VueRouter({
	  routes:myRoutes
	 }) new Vue({
	   router:myRouter
	 })

5.测试  
修改地址栏中的路由地址，测试看加载的组件是否正确  
注意事项： 

	1.先引入vue，再引入插件 
	2.一定要指定router-view 
	3.route路由 {path:'',component:}

routes 路由数组 []  
router 路由器:按照指定的路由规则去访问对应的组件 new VueRouter

3、使用路由模块来实现页面跳转的方式  
声明式（标签跳转）

	<router-link :to="index">

编程式（ js跳转）

	router.push('index')

4、完成参数的传递  
在页面之间跳转的时候，在有些场景下，需要同时指定参数  
1.明确发送方和接收方

	list --20--> detail1.配置接收方的路由地址/detail --》 /detail/:indexthis.$route.params.index

2.发送

	routerLink to="/detail/20"this.$router.push('/detail/20')

5、路由嵌套  
在一个路由中，path对应一个component，如果这个component需要根据不同的url再加载其他的component，称之为路由的嵌套  
举例：比如A组件现在需要根据不同的url，加载B组件或者C组件1.给A组件指定一个容器  router-view

2.配置路由词典

  {
    path:'/a',
    component:A,
    children:[
      {path:'/b',component:B}
    ]
  }

需求：现在有两个组件，分别是login/mail,建立SPA。   
在此基础上，希望mail组件 嵌套inbox/outbox/draft  
补充：在设置子路由，路由匹配规则依然是适用的，只不过路由地址为空和异常，要携带父组件的路由地址/mail /mail/draft

#### 组件的使用和自己创建公用组件？

第一步：在components目录新建你的组件文件（indexPage.vue），script一定要export default {}  
第二步：在需要用的页面（组件）中导入：import indexPage from '@/components/indexPage.vue'  
第三步：注入到vue的子组件的components属性上面,components:{indexPage}  
第四步：在template视图view中使用，  
问题有indexPage命名，使用的时候则index-page。

#### vue如何实现按需加载配合webpack设置?

webpack中提供了require.ensure()来实现按需加载。  
以前引入路由是通过import 这样的方式引入，改为const定义的方式进行引入。   
不进行页面按需加载引入方式：

	import  home   from '../../common/home.vue' 

进行页面按需加载的引入方式：

	const  home = r => require.ensure( [], () => r (require('../../common/home.vue')))

#### vuex是什么？怎么使用？哪种功能场景使用它？

vue框架中状态管理。在main.js引入store，注入。新建了一个目录store，…export。场景有：单页应用中，组件之间的状态。音乐播放、登录状态、加入购物车

#### axios

1.axios的get方法

	export const getAjax = function (getUrl,getAjaxData) {  
		return axios.get(getUrl, {    
			params: {      
				'getAjaxDataObj1': getAjaxData.obj1,//obj1为getAjaxData的一个属性
	      		'getAjaxDataObj2': getAjaxData.obj2
	    	}
	  	})
	}

2.axios的post方法

	export const postAjax= function (getUrl,postAjaxData) {
		return axios.get(postUrl, {
			'postAjaxDataObj1': postAjaxData.obj1,//obj1为postAjaxData的一个属性
		  	'postAjaxDataObj2': postAjaxData.obj2
		 })
	}



3.axios的拦截器

主要分为请求和响应两种拦截器,请求拦截一般就是配置对应的请求头信息(适用与常见请求方法,虽然ajax的get方法没有请求头,但是axios里面进行啦封装),响应一般就是对reponse进行拦截处理,如果返回结果为[]可以转化为0  
1.请求拦截:将当前城市信息放入请求头中

	axios.interceptors.request.use(config => {
		config.headers.cityCode = window.sessionStorage.cityCode //jsCookie.get('cityCode')
		return config
	})

2.响应拦截:处理reponse的结果

	axios.interceptors.response.use((response) =>{  
		let data = response.data
	  	if(response.request.responseType === 'arraybuffer'&&!data.length){    
		 	reponse.date=0
		}
	})



### javascript相关部分


#### JavaScript中如何检测一个变量是一个String类型？请写出函数实现

	typeof(obj) === "string" typeof obj === "string" obj.constructor === String

#### 请用js去除字符串空格？

**方法一：使用replace正则匹配的方法**

	去除所有空格: str = str.replace(/s*/g,"");      
	去除两头空格: str = str.replace(/^s*|s*$/g,"");  
	去除左空格： str = str.replace( /^s*/, “”);  
	去除右空格： str = str.replace(/(s*$)/g, "");

str为要去除空格的字符串，实例如下：

	var str = " 23 23 "; 
	var str2 = str.replace(/s*/g,""); 
	console.log(str2); // 2323


**方法二：使用str.trim()方法**  
str.trim()局限性：无法去除中间的空格，实例如下：

	var str = "   xiao  ming   "; 
	var str2 = str.trim(); 
	console.log(str2);   //xiao  ming

同理，str.trimLeft()，str.trimRight()分别用于去除字符串左右空格。

**方法三：使用jquery,$.trim(str)方法**  
$.trim(str)局限性：无法去除中间的空格，实例如下：

	var str = "   xiao  ming   "; 
	var str2 = $.trim(str) 
	console.log(str2);   //  xiao  ming

#### 你如何获取浏览器URL中查询字符串中的参数？

测试地址为：http://www.runoob.com/jquery/misc-trim.html?channelid=12333&name=xiaoming&age=23  
实例如下：

	function showWindowHref(){     
		var sHref = window.location.href;     
		var args = sHref.split('?');     
		if(args[0] == sHref){         
			return "";     
		}     
		var arr = args[1].split('&');     
		var obj = {};     
		for(var i = 0;i< arr.length;i++){         
			var arg = arr[i].split('=');         
			obj[arg[0]] = arg[1];     
		}     
		return obj; 
	} 
	var href = showWindowHref(); // obj 
	console.log(href['name']); // xiaoming


#### js 字符串操作函数

列举了常用的字符串函数，具体使用方法  
concat() – 将两个或多个字符的文本组合起来，返回一个新的字符串。  
indexOf() – 返回字符串中一个子串第一处出现的索引。如果没有匹配项，返回 -1 。  
charAt() – 返回指定位置的字符。  
lastIndexOf() – 返回字符串中一个子串最后一处出现的索引，如果没有匹配项，返回 -1 。  
match() – 检查一个字符串是否匹配一个正则表达式。  
substr() 函数 -- 返回从string的startPos位置，长度为length的字符串  
substring() – 返回字符串的一个子串。传入参数是起始位置和结束位置。  
slice() – 提取字符串的一部分，并返回一个新字符串。  
replace() – 用来查找匹配一个正则表达式的字符串，然后使用新字符串代替匹配的字符串。  
search() – 执行一个正则表达式匹配查找。如果查找成功，返回字符串中匹配的索引值。否则返回 -1 。  
split() – 通过将字符串划分成子串，将一个字符串做成一个字符串数组。  
length – 返回字符串的长度，所谓字符串的长度是指其包含的字符的个数。  
toLowerCase() – 将整个字符串转成小写字母。  
toUpperCase() – 将整个字符串转成大写字母。  


#### js 操作Array相关的属性和方法

Array 对象属性  
constructor 返回对创建此对象的数组函数的引用。
length 设置或返回数组中元素的数目。
prototype 使您有能力向对象添加属性和方法。

Array 对象方法  
concat() 连接两个或更多的数组，并返回结果。  
join() 把数组的所有元素放入一个字符串。元素通过指定的分隔符进行分隔。  
pop() 删除并返回数组的最后一个元素。    
shift() 删除并返回数组的第一个元素  
push() 向数组的末尾添加一个或更多元素，并返回新的长度。  
unshift() 向数组的开头添加一个或更多元素，并返回新的长度。  
reverse() 颠倒数组中元素的顺序。  
slice() 从某个已有的数组返回选定的元素  
sort() 对数组的元素进行排序  
splice() 删除元素，并向数组添加新元素。  
toSource() 返回该对象的源代码。  
toString() 把数组转换为字符串，并返回结果。  
toLocaleString() 把数组转换为本地数组，并返回结果。  
valueOf() 返回数组对象的原始值

这里只是做了相关的列举，具体的使用方法，[请参考网址](http://www.w3school.com.cn/jsref/jsref_obj_array.asp) 

#### 怎样添加、移除、移动、复制、创建和查找节点？

 1）创建新节点

	createDocumentFragment() //创建一个DOM片段
	createElement() //创建一个具体的元素
	createTextNode() //创建一个文本节点

2）添加、移除、替换、插入

	appendChild() //添加
	removeChild() //移除
	replaceChild() //替换
	insertBefore() //插入

3）查找

	getElementsByTagName() //通过标签名称
	getElementsByName() //通过元素的Name属性的值
	getElementById() //通过元素Id，唯一性


#### 写出3个使用this的典型应用

（1）、在html元素事件属性中使用，如：

	<input type=”button” onclick=”showInfo(this);” value=”点击一下”/>

（2）、构造函数

	function Animal(name, color) { 　　
		this.name = name; 　　
		this.color = color; 
	}

（3）、input点击，获取值

	<input type="button" id="text" value="点击一下" /> 
	<script type="text/javascript">     
		var btn = document.getElementById("text");     
		btn.onclick = function() {         
			alert(this.value);    //此处的this是按钮元素     
		}
	</script>

(4)、apply()/call()求数组最值

	var  numbers = [5, 458 , 120 , -215 ];  
	var  maxInNumbers = Math.max.apply(this, numbers);   
	console.log(maxInNumbers);  // 458 
	var maxInNumbers = Math.max.call(this,5, 458 , 120 , -215);  
	console.log(maxInNumbers);  // 458

#### 比较typeof与instanceof？

相同点：JavaScript 中 typeof 和 instanceof 常用来判断一个变量是否为空，或者是什么类型的。

typeof的定义和用法：返回值是一个字符串，用来说明变量的数据类型。

细节：

(1)、typeof 一般只能返回如下几个结果：number,boolean,string,function,object,undefined。  
(2)、typeof 来获取一个变量是否存在，如 if(typeof a!="undefined"){alert("ok")}，而不要去使用 if(a) 因为如果 a 不存在（未声明）则会出错。  
(3)、对于 Array,Null 等特殊对象使用 typeof 一律返回 object，这正是 typeof 的局限性。

Instanceof定义和用法：instanceof 用于判断一个变量是否属于某个对象的实例。

实例演示：

	a instanceof b?alert("true"):alert("false"); //a是b的实例？真:假
	var a = new Array();  
	alert(a instanceof Array);  // true 
	alert(a instanceof Object)  // true

如上，会返回 true，同时 alert(a instanceof Object) 也会返回 true;这是因为 Array 是 object 的子类。

	function test(){}; 
	var a = new test(); 
	alert(a instanceof test)   // true

细节：

(1)、如下，得到的结果为‘N’,这里的 instanceof 测试的 object 是指 js 语法中的 object，不是指 dom 模型对象。

	if (window instanceof Object){ alert('Y')} else {  alert('N');}  // 'N'

#### 如何理解闭包？

1、定义和用法：当一个函数的返回值是另外一个函数，而返回的那个函数如果调用了其父函数内部的其它变量，如果返回的这个函数在外部被执行，就产生了闭包。  
2、表现形式：使函数外部能够调用函数内部定义的变量。  
3、实例如下：  
(1)、根据作用域链的规则，底层作用域没有声明的变量，会向上一级找，找到就返回，没找到就一直找，直到window的变量，没有就返回undefined。这里明显count 是函数内部的flag2 的那个count 。

	var count=10;   //全局作用域 标记为flag1 
	function add(){     
		var count=0;    //函数全局作用域 标记为flag2     
		return function(){         
			count+=1;   //函数的内部作用域         
			alert(count);     
		} 
	} 
	var s = add() 
	s();//输出1 
	s();//输出2

4、变量的作用域  
要理解闭包，首先必须理解Javascript特殊的变量作用域。  
变量的作用域分类：全局变量和局部变量。  
特点：  
1、函数内部可以读取函数外部的全局变量；在函数外部无法读取函数内的局部变量。  
2、函数内部声明变量的时候，一定要使用var命令。如果不用的话，你实际上声明了一个全局变量！

 5、使用闭包的注意点  
1）滥用闭包，会造成内存泄漏：由于闭包会使得函数中的变量都被保存在内存中，内存消耗很大，所以不能滥用闭包，否则会造成网页的性能问题，在IE中可能导致内存泄露。解决方法是，在退出函数之前，将不使用的局部变量全部删除。  
2）会改变父函数内部变量的值。所以，如果你把父函数当作对象（object）使用，把闭包当作它的公用方法（Public Method），把内部变量当作它的私有属性（private value），这时一定要小心，不要随便改变父函数内部变量的值。

####  什么是跨域？跨域请求资源的方法有哪些？

1、什么是跨域？  
由于浏览器同源策略，凡是发送请求url的协议、域名、端口三者之间任意一与当前页面地址不同即为跨域。存在跨域的情况：

	网络协议不同，如http协议访问https协议。  
	端口不同，如80端口访问8080端口。  
	域名不同，如qianduanblog.com访问baidu.com。  
	子域名不同，如abc.qianduanblog.com访问def.qianduanblog.com。  
	域名和域名对应ip,如www.a.com访问20.205.28.90.

2、跨域请求资源的方法：  
(1)、porxy代理  
定义和用法：proxy代理用于将请求发送给后台服务器，通过服务器来发送请求，然后将请求的结果传递给前端。  
实现方法：通过nginx代理；  
注意点：1、如果你代理的是https协议的请求，那么你的proxy首先需要信任该证书（尤其是自定义证书）或者忽略证书检查，否则你的请求无法成功。

(2)、CORS 【Cross-Origin Resource Sharing】  
定义和用法：是现代浏览器支持跨域资源请求的一种最常用的方式。  
使用方法：一般需要后端人员在处理请求数据的时候，添加允许跨域的相关操作。如下：

	res.writeHead(200, {     
		"Content-Type": "text/html; charset=UTF-8",     
		"Access-Control-Allow-Origin":'http://localhost',     
		'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',     
		'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type' 
	});

(3)、jsonp  
定义和用法：通过动态插入一个script标签。浏览器对script的资源引用没有同源限制，同时资源加载到页面后会立即执行（没有阻塞的情况下）。  
特点：通过情况下，通过动态创建script来读取他域的动态资源，获取的数据一般为json格式。  
实例如下：

	<script>     
		function testjsonp(data) {        
			console.log(data.name); // 获取返回的结果     
		} 
	</script> 
	<script>     
		var _script = document.createElement('script');     
		_script.type = "text/javascript";    
		_script.src = "http://localhost:8888/jsonp?callback=testjsonp";     
		document.head.appendChild(_script); 
	</script>

缺点：  
1、这种方式无法发送post请求（这里）
2、另外要确定jsonp的请求是否失败并不容易，大多数框架的实现都是结合超时时间来判定。

#### 谈谈垃圾回收机制方式及内存管理

回收机制方式  
1、定义和用法：垃圾回收机制(GC:Garbage Collection),执行环境负责管理代码执行过程中使用的内存。  
2、原理：垃圾收集器会定期（周期性）找出那些不在继续使用的变量，然后释放其内存。但是这个过程不是实时的，因为其开销比较大，所以垃圾回收器会按照固定的时间间隔周期性的执行。  
3、实例如下： 

	function fn1() {     
		var obj = {name: 'hanzichi', age: 10}; 
	} 
	function fn2() {     
		var obj = {name:'hanzichi', age: 10};    
		return obj; 
	} 
	var a = fn1(); 
	var b = fn2();

fn1中定义的obj为局部变量，而当调用结束后，出了fn1的环境，那么该块内存会被js引擎中的垃圾回收器自动释放；在fn2被调用的过程中，返回的对象被全局变量b所指向，所以该块内存并不会被释放。  
 4、垃圾回收策略：标记清除(较为常用)和引用计数。  
**标记清除：**  
定义和用法：当变量进入环境时，将变量标记"进入环境"，当变量离开环境时，标记为："离开环境"。某一个时刻，垃圾回收器会过滤掉环境中的变量，以及被环境变量引用的变量，剩下的就是被视为准备回收的变量。  
到目前为止，IE、Firefox、Opera、Chrome、Safari的js实现使用的都是标记清除的垃圾回收策略或类似的策略，只不过垃圾收集的时间间隔互不相同。  
**引用计数：**  
定义和用法：引用计数是跟踪记录每个值被引用的次数。  
基本原理：就是变量的引用次数，被引用一次则加1，当这个引用计数为0时，被视为准备回收的对象。

内存管理

1、什么时候触发垃圾回收？  
垃圾回收器周期性运行，如果分配的内存非常多，那么回收工作也会很艰巨，确定垃圾回收时间间隔就变成了一个值得思考的问题。  
IE6的垃圾回收是根据内存分配量运行的，当环境中的变量，对象，字符串达到一定数量时触发垃圾回收。垃圾回收器一直处于工作状态，严重影响浏览器性能。  
IE7中，垃圾回收器会根据内存分配量与程序占用内存的比例进行动态调整，开始回收工作。

2、合理的GC方案：(1)、遍历所有可访问的对象; (2)、回收已不可访问的对象。

3、GC缺陷：(1)、停止响应其他操作；

4、GC优化策略：(1)、分代回收（Generation GC）;(2)、增量GC

#### javascript面向对象中继承实现？



### HTML & CSS部分



#### 什么是盒子模型？

在网页中，一个元素占有空间的大小由几个部分构成，其中包括元素的内容（content），元素的内边距（padding），元素的边框（border），元素的外边距（margin）四个部分。这四个部分占有的空间中，有的部分可以显示相应的内容，而有的部分只用来分隔相邻的区域或区域。4个部分一起构成了css中元素的盒模型。

#### 行内元素有哪些？块级元素有哪些？ 空(void)元素有那些？

行内元素：a、b、span、img、input、strong、select、label、em、button、textarea  
块级元素：div、ul、li、dl、dt、dd、p、h1-h6、blockquote  
空元素：即系没有内容的HTML元素，例如：br、meta、hr、link、input、img

#### CSS实现垂直水平居中

一道经典的问题，实现方法有很多种，以下是其中一种实现：

HTML结构：

	<div class="wrapper">      
		<div class="content"></div> 
	</div>

CSS：

	.wrapper {     
		position: relative;     
		width: 500px;    
		height: 500px;     
		border: 1px solid red;   
	} 
	.content{     
		position: absolute;     
		width: 200px;     
		height: 200px;     
		/*top、bottom、left和right 均设置为0*/     
		top: 0;     
		bottom: 0;     
		left: 0;     
		right: 0;     
		/*margin设置为auto*/     
		margin:auto;     
		border: 1px solid green;     
	}

#### 简述一下src与href的区别

href 是指向网络资源所在位置，建立和当前元素（锚点）或当前文档（链接）之间的链接，用于超链接。  
src是指向外部资源的位置，指向的内容将会嵌入到文档中当前标签所在位置；在请求src资源时会将其指向的资源下载并应用到文档内，例如js脚本，img图片和frame等元素。  
当浏览器解析到该元素时，会暂停其他资源的下载和处理，直到将该资源加载、编译、执行完毕，图片和框架等元素也如此，类似于将所指向资源嵌入当前标签内。这也是为什么将js脚本放在底部而不是头部。

#### 简述同步和异步的区别

同步是阻塞模式，异步是非阻塞模式。  
同步就是指一个进程在执行某个请求的时候，若该请求需要一段时间才能返回信息，那么这个进程将会一直等待下去，直到收到返回信息才继续执行下去；  
异步是指进程不需要一直等下去，而是继续执行下面的操作，不管其他进程的状态。当有消息返回时系统会通知进程进行处理，这样可以提高执行的效率。

#### px和em的区别

相同点：px和em都是长度单位；  
异同点：px的值是固定的，指定是多少就是多少，计算比较容易。em得值不是固定的，并且em会继承父级元素的字体大小。浏览器的默认字体高都是16px。所以未经调整的浏览器都符合: 1em=16px。那么12px=0.75em, 10px=0.625em。

#### 浏览器的内核分别是什么?

IE: trident内核Firefox：gecko内核Safari：webkit内核Opera：以前是presto内核，Opera现已改用Google Chrome的Blink内核Chrome：Blink(基于webkit，Google与Opera Software共同开发)

#### 什么叫优雅降级和渐进增强？

渐进增强 progressive enhancement：  
针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高级浏览器进行效果、交互等改进和追加功能达到更好的用户体验。  
优雅降级 graceful degradation：  
一开始就构建完整的功能，然后再针对低版本浏览器进行兼容。

区别：

a. 优雅降级是从复杂的现状开始，并试图减少用户体验的供给  
b. 渐进增强则是从一个非常基础的，能够起作用的版本开始，并不断扩充，以适应未来环境的需要  
c. 降级（功能衰减）意味着往回看；而渐进增强则意味着朝前看，同时保证其根基处于安全地带

#### sessionStorage 、localStorage 和 cookie 之间的区别

 共同点：用于浏览器端存储的缓存数据  
不同点：  
(1)、存储内容是否发送到服务器端：当设置了Cookie后，数据会发送到服务器端，造成一定的宽带浪费；web storage,会将数据保存到本地，不会造成宽带浪费；  
(2)、数据存储大小不同：Cookie数据不能超过4K,适用于会话标识；web storage数据存储可以达到5M;  
(3)、数据存储的有效期限不同：cookie只在设置了Cookid过期时间之前一直有效，即使关闭窗口或者浏览器；sessionStorage,仅在关闭浏览器之前有效；localStorage,数据存储永久有效；  
(4)、作用域不同：cookie和localStorage是在同源同窗口中都是共享的；sessionStorage不在不同的浏览器窗口中共享，即使是同一个页面；

#### Web Storage与Cookie相比存在的优势

(1)、存储空间更大：IE8下每个独立的存储空间为10M，其他浏览器实现略有不同，但都比Cookie要大很多。  
(2)、存储内容不会发送到服务器：当设置了Cookie后，Cookie的内容会随着请求一并发送的服务器，这对于本地存储的数据是一种带宽浪费。而Web Storage中的数据则仅仅是存在本地，不会与服务器发生任何交互。  
(3)、更多丰富易用的接口：Web Storage提供了一套更为丰富的接口，如setItem,getItem,removeItem,clear等,使得数据操作更为简便。cookie需要自己封装。  
(4)、独立的存储空间：每个域（包括子域）有独立的存储空间，各个存储空间是完全独立的，因此不会造成数据混乱。


#### Ajax的优缺点及工作原理？

定义和用法:  
AJAX = Asynchronous JavaScript and XML（异步的 JavaScript 和 XML）。Ajax 是一种用于创建快速动态网页的技术。Ajax 是一种在无需重新加载整个网页的情况下，能够更新部分网页的技术。  
传统的网页（不使用 Ajax）如果需要更新内容，必须重载整个网页页面。

优点：  
1.减轻服务器的负担,按需取数据,最大程度的减少冗余请求  
2.局部刷新页面,减少用户心理和实际的等待时间,带来更好的用户体验  
3.基于xml标准化,并被广泛支持,不需安装插件等,进一步促进页面和数据的分离

缺点：    
1.AJAX大量的使用了javascript和ajax引擎,这些取决于浏览器的支持.在编写的时候考虑对浏览器的兼容性.    
2.AJAX只是局部刷新,所以页面的后退按钮是没有用的.  
3.对流媒体还有移动设备的支持不是太好等  

AJAX的工作原理：  
1.创建ajax对象（XMLHttpRequest/ActiveXObject(Microsoft.XMLHttp)）  
2.判断数据传输方式(GET/POST)  
3.打开链接 open()  
4.发送 send()  
5.当ajax对象完成第四步（onreadystatechange）数据接收完成，判断http响应状态（status）200-300之间或者304（缓存）执行回调函数

#### 请指出document load和document ready的区别？

共同点：这两种事件都代表的是页面文档加载时触发。  
异同点：  
ready 事件的触发，表示文档结构已经加载完成（不包含图片等非文字媒体文件）。  
onload 事件的触发，表示页面包含图片等文件在内的所有元素都加载完成。


