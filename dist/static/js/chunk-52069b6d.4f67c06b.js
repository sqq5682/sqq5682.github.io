(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-52069b6d"],{1034:function(t,e,n){},"28bd":function(t,e,n){},"333d":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination-container",class:{hidden:t.hidden}},[n("el-pagination",t._b({attrs:{background:t.background,"current-page":t.currentPage,"page-size":t.pageSize,layout:t.layout,"page-sizes":t.pageSizes,total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"update:pageSize":function(e){t.pageSize=e},"update:page-size":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",t.$attrs,!1))],1)},o=[];n("a9e3");Math.easeInOutQuad=function(t,e,n,a){return t/=a/2,t<1?n/2*t*t+e:(t--,-n/2*(t*(t-2)-1)+e)};var i=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function r(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function l(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function s(t,e,n){var a=l(),o=t-a,s=20,c=0;e="undefined"===typeof e?500:e;var u=function t(){c+=s;var l=Math.easeInOutQuad(c,a,o,e);r(l),c<e?i(t):n&&"function"===typeof n&&n()};u()}var c={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(t){this.$emit("update:page",t)}},pageSize:{get:function(){return this.limit},set:function(t){this.$emit("update:limit",t)}}},methods:{handleSizeChange:function(t){this.$emit("pagination",{page:this.currentPage,limit:t}),this.autoScroll&&s(0,800)},handleCurrentChange:function(t){this.$emit("pagination",{page:t,limit:this.pageSize}),this.autoScroll&&s(0,800)}}},u=c,d=(n("5301"),n("2877")),p=Object(d["a"])(u,a,o,!1,null,"0c785daf",null);e["a"]=p.exports},5301:function(t,e,n){"use strict";var a=n("28bd"),o=n.n(a);o.a},"5ab6":function(t,e,n){"use strict";var a=n("1034"),o=n.n(a);o.a},c40e:function(t,e,n){"use strict";n.d(e,"c",(function(){return c})),n.d(e,"b",(function(){return u})),n.d(e,"d",(function(){return d})),n.d(e,"a",(function(){return p}));var a=n("b775"),o=n("da71"),i=o.goodsListU,r=o.goodsDetailU,l=o.updataGoodsU,s=(o.addGoodsU,o.delGoodsU);function c(t){return Object(a["a"])({url:i,method:"get",params:t})}function u(t){return Object(a["a"])({url:r,method:"get",params:t})}function d(t){return Object(a["a"])({url:l,method:"post",data:t})}function p(t){return Object(a["a"])({url:s,method:"post",data:t})}},da60:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-popconfirm",{attrs:{title:"请确定删除吗？"},on:{onConfirm:t.confirm}},[n("el-button",{attrs:{slot:"reference",type:"text",size:"small"},slot:"reference"},[t._v("删除")])],1)},o=[],i={methods:{confirm:function(){this.$emit("callHandle")}}},r=i,l=n("2877"),s=Object(l["a"])(r,a,o,!1,null,null,null);e["a"]=s.exports},dfda:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-card",{staticClass:"box-card mab20"},[n("div",{staticClass:"wrapSearch"},[n("div",{staticClass:"searchInput"},[n("el-input",{attrs:{placeholder:"请输入商品编号/名称"},model:{value:t.searchInfo,callback:function(e){t.searchInfo=e},expression:"searchInfo"}})],1),n("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.search}},[t._v("搜索")]),n("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.reset}},[t._v("重置")])],1)]),n("el-row",{staticClass:"mab20"},[n("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.gotoAddGoods}},[t._v("添加商品")])],1),n("el-row",{attrs:{height:"20"}}),n("goodsListTable",{attrs:{list:t.list,listLoading:t.listLoading},on:{viewGoods:t.viewGoods,editGoods:t.editGoods,delGoods:t.delGoods}}),n("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.condition.page,limit:t.condition.limit},on:{"update:page":function(e){return t.$set(t.condition,"page",e)},"update:limit":function(e){return t.$set(t.condition,"limit",e)},pagination:t.fetchListData}})],1)},o=[],i=(n("96cf"),n("1da1")),r=n("333d"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{type:"selection",width:"55",align:"center",label:"全选"}}),n("el-table-column",{attrs:{align:"center",label:"商品ID"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.Id)+" ")]}}])}),n("el-table-column",{attrs:{label:"商品名称",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.ProductName)+" ")]}}])}),n("el-table-column",{attrs:{align:"center",width:"100",label:"商品主图"},scopedSlots:t._u([{key:"default",fn:function(t){return[n("el-popover",{attrs:{placement:"right",title:"",trigger:"hover"}},[n("el-image",{attrs:{src:t.row.MainImage}},[n("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[n("i",{staticClass:"el-icon-picture-outline"})])]),n("img",{staticStyle:{"max-height":"50px","max-width":"130px"},attrs:{slot:"reference",src:t.row.MainImage,alt:t.row.MainImage},slot:"reference"})],1)]}}])}),n("el-table-column",{attrs:{label:"商品副标题",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.Subtitle)+" ")]}}])}),n("el-table-column",{attrs:{label:"商品类型",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.CategoryName)+" ")]}}])}),n("el-table-column",{attrs:{label:"库存数量",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.Stock)+" ")]}}])}),n("el-table-column",{attrs:{label:"成本价",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.Price)+" ")]}}])}),n("el-table-column",{attrs:{label:"吊牌价",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.Price)+" ")]}}])}),n("el-table-column",{attrs:{"class-name":"status-col",label:"商品状态",align:"center","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-dropdown",{attrs:{trigger:"click"}},[n("span",{staticClass:"el-dropdown-link"},[t._v(" "+t._s(e.row.Status?"在售":"下架")),n("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{attrs:{command:"1"}},[t._v("在售")]),n("el-dropdown-item",{attrs:{command:"0"}},[t._v("下架")])],1)],1)]}}])}),n("el-table-column",{attrs:{label:"是否有效",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.pageviews)+" ")]}}])}),n("el-table-column",{attrs:{align:"center",prop:"created_at",label:"创建时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("i",{staticClass:"el-icon-time"}),n("span",[t._v(t._s(e.row.CreatTime))])]}}])}),n("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){return t.$emit("viewGoods",a)}}},[t._v("查看")]),n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){return t.$emit("editGoods",a)}}},[t._v("编辑")]),n("popconfirm",{staticClass:"mal10",on:{callHandle:function(e){return t.$emit("delGoods",a)}}})]}}])})],1)},s=[],c=n("da60"),u={props:{list:Array,listLoading:Boolean},components:{popconfirm:c["a"]},data:function(){return{}}},d=u,p=n("2877"),f=Object(p["a"])(d,l,s,!1,null,null,null),g=f.exports,m=n("c40e"),h={components:{goodsListTable:g,pagination:r["a"]},data:function(){return{list:null,listLoading:!0,total:100,searchInfo:"",condition:{page:1,limit:10}}},created:function(){this.fetchListData()},methods:{fetchListData:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,a,o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.listLoading=!0,e.next=3,Object(m["c"])({pageIndex:t.condition.page,pageSize:t.condition.limit,content:t.searchInfo});case 3:n=e.sent,a=n.data,o=a.data,i=a.total,n.code||(t.list=o,t.total=i,t.listLoading=!1);case 6:case"end":return e.stop()}}),e)})))()},search:function(){this.condition={page:1,limit:10},this.fetchListData()},reset:function(){this.searchInfo="",this.condition={page:1,limit:10},this.fetchListData()},gotoAddGoods:function(){this.$router.push({path:"/goodsManage/addGoods",query:{goodsManage:"add"}})},editGoods:function(t){this.$router.push({path:"/goodsManage/addGoods",query:{goodsManage:"edit",goodsId:t.id}})},delGoods:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.listLoading=!0,n.next=3,Object(m["a"])({id:t.Id});case 3:a=n.sent,a.code||e.fetchListData(),e.listLoading=!1;case 6:case"end":return n.stop()}}),n)})))()},viewGoods:function(t){this.$router.push({path:"/goodsManage/addGoods",query:{goodsManage:"detail",goodsId:t.id}})}}},b=h,w=(n("5ab6"),Object(p["a"])(b,a,o,!1,null,"375c9e24",null));e["default"]=w.exports}}]);