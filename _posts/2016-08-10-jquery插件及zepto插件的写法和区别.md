---
layout: post
title: jquery插件及zepto插件的写法和区别
categories: [blog ]
tags: [jquery,zepto ]
description: jquery插件及zepto插件的写法和区别
---

jQuery/Zepto 都提供了很好的机制，让用户可以通过编写插件，来扩展功能。

很多人做了很久前端开发，却一直在使用别人的插件，自己没有完整开发过一个插件。其实开发插件不是很难的事情，经过多年，撰写一个 jQuery/Zepto 插件已经有了最佳实践，也就是所谓的基本的套路。这里给出基本的插件模板，让用户不用再考虑代码的组织，可以快速上手实现插件的编写。

### jQuery / Zepto 插件开发注意事项

* 用闭包保护全局变量不受污染
* 插件尽量支持链式语法，可以通过 return this 实现；
* 插件尽量对外暴露尽可能少的调用入口，比如：

    //推荐
    $.fn.myWindow("open");
    $.fn.myWindow("close");
    //不推荐
    $.fn.openMyWindow();
    $.fn.closeMyWindow();

* 通过传入 options ，让插件可以定制，并提供默认的设置值
* 尽量优化插件中冗余的代码
* 不要试图提供繁多的配置项

区别点：

#### 1、自定义事件的命名空间 

jq的时间命名空间是用点“.”，而zepto是用冒号“:” 如下

    //jquery
    $(this).trigger('cusevent.pluginname');

    //zepto
    $(this).trigger('cusevent:pluginname');

#### 2、data() 方法 

jq的data方法非常强大，可以存储字符串、对象、函数等一切js数据 
而zepto的data方法则非常简陋，只能纯一下字符串。 
由于写插件时，常用data方法来缓存插件实例化后的内容，所以这里需要做一下兼容修改。

    // i is simply a counter, the rest 
    // of what is stored will be instances
    $.waiting.lookup = {
    	i: 0
    };

    // store the new instance.. $t=$(this)
    $.waiting.lookup[++$.waiting.lookup.i] = new $.waiting($t, o);
    $t.data('waiting', $.waiting.lookup.i);

    // retrieve the instance
    var inst = $.waiting.lookup[$(this).data('waiting')];


最后附上，JQ插件的编写模板，写插件的时候就不用考虑代码组织结构了。


    /*!
     * jQuery 插件模板
     *
     * @author jnoodle
     */
    /**
     * 让插件支持 AMD 标准的模块加载模式
     *
     * 如果不需要支持 AMD，也可以直接使用：
     * (function($){ ... })(jQuery);
     *
     * 将插件封装在闭包里面，防止外部污染
     */
    ;
    (function (factory) {

        // 如果要兼容 CMD 等其他标准，可以在下面添加条件，比如：
        // CMD: typeof define === 'function' && define.cmd
        // UMD: typeof exports === 'object'
        if (typeof define === 'function' && define.amd) {
            // AMD
            define(['jquery'], factory);
        } else {
            factory(jQuery);
            // 如果要兼容 Zepto，可以改写，比如使用：factory(jQuery||Zepto)
        }
    }(function ($) {
        'use strict';
        /**
         * 定义插件的构造方法
         * @param element 选择器对象
         * @param options 配置项
         * @constructor
         */
        var Plugin = function (element, options) {

            //合并参数设置
            this.options = $.extend({}, Plugin.defaults, options);

            //将选择器对象赋值给插件，方便后续调用
            this.$element = $(element);

            //进行一些初始化工作
            this.init();
        };
        /**
         * 插件名称，即调用时的名称（$.fn.pluginName）
         * @type {string}
         */
        Plugin.pluginName = "pluginName";

        /**
         * 插件缓存名称，插件通过 data 方法缓存在 dom 结构里，存储数据的名称
         * @type {string}
         */
        Plugin.dataName = "pluginDataName";

        /**
         * 插件版本
         * @type {string}
         */
        Plugin.version = "1.0.0";

        /**
         * 插件默认配置项
         * @type {{}}
         */
        Plugin.defaults = {
            option1: "...",
            option2: "..."
        };

        /**
         * 定义插件的方法
         * @type {{}}
         */
        Plugin.prototype = {

            init: function () {
                console.log('init');
            },

            func1: function () {

            },

            func2: function () {

            }
        };
        /**
         * 缓存同名插件
         */
        var old = $.fn[Plugin.pluginName];
        /**
         * 定义插件，扩展$.fn，为jQuery对象提供新的插件方法
         * 调用方式：$.fn.pluginName()
         * @param option {string/object}
         */
        $.fn[Plugin.pluginName] = function (option) {
            return this.each(function () {
                var $this = $(this);

                var data = $this.data(Plugin.dataName);
                var options = typeof option == 'object' && option;

                //只实例化一次，后续如果再次调用了该插件时，则直接获取缓存的对象
                if (!data) {
                    $this.data(Plugin.dataName, (data = new Plugin(this, options)));
                }
                //如果插件的参数是一个字符串，则直接调用插件的名称为此字符串方法
                if (typeof option == 'string') data[option]();
            });
        };
        $.fn[Plugin.pluginName].Constructor = Plugin;
        /**
         * 为插件增加 noConflict 方法，在插件重名时可以释放控制权
         * @returns {*}
         */
        $.fn[Plugin.pluginName].noConflict = function () {
            $.fn[Plugin.pluginName] = old;
            return this
        };
        /**
         * 可选：
         * 通过在 dom 上定义 data-role='pluginName' 的方式，自动实例化插件，省去页面编写代码
         * 在这里还可以扩展更多配置，仅仅通过 data 属性 API 就能使用插件
         */
        $(document).ready(function () {
            $('[data-role="' + Plugin.pluginName + '"]').each(function () {
                var $this = $(this);
                var data = $this.data();
                // ...
                $.fn[Plugin.pluginName].call($this, data);
            });
        });
    }));

#### Zepto 插件模板

    /*!
     * Zepto 插件模板
     *
     * @author jnoodle
     */
    /**
     * 让插件支持 AMD 标准的模块加载模式
     *
     * 如果不需要支持 AMD，也可以直接使用：
     * (function($){ ... })(Zepto);
     *
     * 将插件封装在闭包里面，防止外部污染
     */
    ;
    (function (factory) {
        // 如果要兼容 CMD 等其他标准，可以在下面添加条件，比如：
        // CMD: typeof define === 'function' && define.cmd
        // UMD: typeof exports === 'object'
        if (typeof define === 'function' && define.amd) {
            // AMD
            define(['zepto'], factory);
        } else {
            factory(Zepto);
            // 如果要兼容 Zepto，可以改写，比如使用：factory(Zepto||jQuery)
        }
    }(function ($) {
        'use strict';
        /**
         * 定义插件的构造方法
         * @param element 选择器对象
         * @param options 配置项
         * @constructor
         */
        var Plugin = function (element, options) {
            //合并参数设置
            this.options = $.extend({}, Plugin.defaults, options);
            //将选择器对象赋值给插件，方便后续调用
            this.$element = $(element);
            //进行一些初始化工作
            this.init();
        };
        /**
         * 插件名称，即调用时的名称（$.fn.pluginName）
         * @type {string}
         */
        Plugin.pluginName = "pluginName";
        /**
         * 插件缓存名称，插件通过 data 方法缓存在 dom 结构里，存储数据的名称
         * @type {string}
         */
        Plugin.dataName = "pluginDataName";
        /**
         * 插件版本
         * @type {string}
         */
        Plugin.version = "1.0.0";
        /**
         * 插件默认配置项
         * @type {{}}
         */
        Plugin.defaults = {
            option1: "...",
            option2: "..."
        };
        /**
         * 定义插件的方法
         * @type {{}}
         */
        Plugin.prototype = {
            init: function () {
                console.log('init');
            },
            func1: function () {
            },
            func2: function () {
            }
        };
        /**
         * 缓存同名插件
         */
        var old = $.fn[Plugin.pluginName];
        /**
         * 定义插件，扩展$.fn，为Zepto对象提供新的插件方法
         * 调用方式：$.fn.pluginName()
         * @param option {string/object}
         */
        $.fn[Plugin.pluginName] = function (option) {
            return this.each(function () {
                var $this = $(this);
                var data = $.fn[Plugin.pluginName].pluginData[$this.data(Plugin.dataName)];
                var options = typeof option == 'object' && option;
                //只实例化一次，后续如果再次调用了该插件时，则直接获取缓存的对象
                if (!data) {
                    //zepto的data方法只能保存字符串，所以用此方法解决一下
                    $.fn[Plugin.pluginName].pluginData[++$.fn[Plugin.pluginName].pluginData.index] = new Plugin(this, options);
                    $this.data(Plugin.dataName, $.fn[Plugin.pluginName].pluginData.index);
                    data = $.fn[Plugin.pluginName].pluginData[$this.data(Plugin.dataName)];
                }

                //如果插件的参数是一个字符串，则直接调用插件的名称为此字符串方法
                if (typeof option == 'string') data[option]();
            });
        };
        /**
         * zepto的data方法只能保存字符串，所以用一个对象来存储data
         * @type {{index: number}}
         */
        $.fn[Plugin.pluginName].pluginData = {index: 0};

        $.fn[Plugin.pluginName].Constructor = Plugin;
        /**
         * 为插件增加 noConflict 方法，在插件重名时可以释放控制权
         * @returns {*}
         */
        $.fn[Plugin.pluginName].noConflict = function () {
            $.fn[Plugin.pluginName] = old;
            return this
        };
        /**
         * 可选：
         * 通过在 dom 上定义 data-role='pluginName' 的方式，自动实例化插件，省去页面编写代码
         * 在这里还可以扩展更多配置，仅仅通过 data 属性 API 就能使用插件
         */
        $(document).ready(function () {
            $('[data-role="' + Plugin.pluginName + '"]').each(function () {
                var $this = $(this);
                var data = $.fn[Plugin.pluginName].pluginData[$this.data(Plugin.dataName)];
                // ...
                $.fn[Plugin.pluginName].call($this, data);
            });
        });
    }));
