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

ViewModel 通过双向数据绑定把 View 层和 Model 层连接了起来，而View 和 Model 之间的同步工作完全是自动的，无需人为干涉，因此开发者只需关注业务逻辑，不需要手动操作DOM, 不需要关注数据状态的同步问题，复杂的数据状态维护完全由 MVVM 来统一管理。

#### mvvm和mvc区别？

> mvc和mvvm其实区别并不大。都是一种设计思想。主要就是mvc中Controller演变成mvvm中的viewModel。mvvm主要解决了mvc中大量的DOM 操作使页面渲染性能降低，加载速度变慢，影响用户体验。和当 Model 频繁发生变化，开发者需要主动更新到View 。

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

1.引入vue.js vue-router.js

2.指定一个容器router-view

3.创建业务所需要用到的组件类        
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

	<router-link :to="index">	2

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

  补充：在设置子路由，路由匹配规则依然是适用的，
  只不过路由地址为空和异常，要携带父组件的路由地址
  /mail /mail/draft

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

vue框架中状态管理。在main.js引入store，注入。新建了一个目录store，….. export 。场景有：单页应用中，组件之间的状态。音乐播放、登录状态、加入购物车

#### vue的双向绑定原理？

**1、原理**

Vue的双向数据绑定的原理相信大家也都十分了解了，主要是通过Object对象的defineProperty属性，重写data的set和get函数来实现的,这里对原理不做过多描述，主要还是来实现一个实例。为了使代码更加的清晰，这里只会实现最基本的内容，主要实现v-model，v-bind 和v-click三个命令，其他命令也可以自行补充。

![](../img/uploads/2018/asdsada.jpg)

**2、实现**

页面结构很简单，如下

	<div id="app">
		<form>
		  <input type="text"  v-model="number">
		  <button type="button" v-click="increment">增加</button>
		</form>
		<h3 v-bind="number"></h3>
	</div>

包含：

	1. 一个input，使用v-model指令
	2. 一个button，使用v-click指令
	3. 一个h3，使用v-bind指令。

我们最后会通过类似于vue的方式来使用我们的双向数据绑定，结合我们的数据结构添加注释

	var app = new myVue({
	  el:'#app',
	  data: {
	    number: 0
	  },
	  methods: {        increment: function() {          this.number ++;
	    },
	  }
	})

首先我们需要定义一个myVue构造函数：

	function myVue(options) {
	  
	}

为了初始化这个构造函数，给它添加一 个_init属性

	function myVue(options) {  
		this._init(options);
	}
	myVue.prototype._init = function (options) {    
		this.$options = options;  // options 为上面使用时传入的结构体，包括el,data,methods
		this.$el = document.querySelector(options.el); // el是 #app, this.$el是id为app的Element元素
		this.$data = options.data; // this.$data = {number: 0}
		this.$methods = options.methods;  // this.$methods = {increment: function(){}}
	}


