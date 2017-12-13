---
layout: post
title: Sublime Text2 使用方法及快捷键
categories: [blog ]
tags: [Sublime Text2 ]
description: Sublime Text2 使用方法及快捷键
---

前一阵子刚买个笔记本，于是果断安装上了编辑器，由于处于习惯，就先安装上了notepad++，但是发现在笔记本上面，用的很不舒服的，换了Sublime Text2效果挺不错，外观也不错，而且插件很强大，可以直接在线安装插件，于是就搜集了一下资料。(以后会增添内容)

![](../img/uploads/2012/11/pythonHeroSmall.png)

sublime text2的基本操作。

**command palette（命令面板）：**

调用：ctrl+shift+p或者tool—command palette可以搜索命令、选项、snippet 和 syntex

**files间的切换：**

调用：ctrl+p或者goto—goto anything

切换文件

用 Command+P 可以快速跳转到当前项目中的任意文件，可进行关键词匹配。
用 Command+P 后 @ (或是Command+R)可以快速列出/跳转到某个函数（很爽的是在 markdown 当中是匹配到标题，而且还是带缩的！）。
用 Command+P 后 # 可以在当前文件中进行搜索。
用 Command+P 后 : (或是Ctrl+G)加上数字可以跳转到相应的行。
而更酷的是你可以用 Command+P 加上一些关键词跳转到某个文件同时加上 @ 来列出/跳转到目标文件中的某个函数，或是同时加上 # 来在目标文件中进行搜索，或是同时加上 : 和数字来跳转到目标文件中相应的行。

** miulti-selection（多重选择）：**

允许在页面中同时存在多个光标

按住 Command 或 Alt，然后在页面中希望中现光标的位置点击。
选择数行文本，然后按下 Shift + Command + L。
通过反复按下 Control/Command + D 即可将全文中与光标当前所在位置的词相同的词逐一加入选择，而直接按下 Alt+F3(Windows) 或是 Ctrl+Command+G(Mac) 即可一次性选择所有相同的词。
按下鼠标中键来进行垂直方向的纵列选择，也可以进入多重编辑状态。

** indent guide（缩进指示）：**

（缩进指示已经被集成进 Sublime Text 2 中，不需要安装插件了。）

**package control（安装包控制）：**

Sublime Text 2 也拥有良好的扩展功能，这就是安装包(Package)；通过 Sublime Package Control，安装、升级和卸载 Package 也变得轻松写意了。

**安装package control：**

1、打开console：control+·

把import urllib2,os;pf='Package Control.sublime-package';ipp=sublime.installed_packages_path();os.makedirs(ipp) if not os.path.exists(ipp) else None;open(os.path.join(ipp,pf),'wb').write(urllib2.urlopen('http://sublime.wbond.net/'+pf.replace(' ','%20')).read()) 放进命令行中回车

重启 Sublime Text 2，如果在 Preferences -> Package Settings中见到Package Control这一项，就说明安装成功了。

2、下载http://sublime.wbond.net/Package%20Control.sublime-package 这个文件，然后把它放在Sublime Text安装目录下面的Installed Packages目录下面，在windows下面，这个路径是：Sublime Text 2\Data\Installed Packages.

安装package：

在command palette中找到package control：install package，选择要安装的package

vim模式：

在command palette中调出preferences：settings-user，写入{ "ignored_packages": [] }

无干扰模式(Distraction Free Mode)：
shift+f11或者在菜单 View 中选择 Enter Distraction Free Mode

通过修改 “Preferences” -> “File Settings - More” -> “Distraction Free - User” 可以对防干扰模式进行一些设置：

	{

	    "line_numbers": false, //是否显示行号

	    "gutter": false, //是否显示边列

	    "draw_centered": true, //是否居中显示

	    "wrap_width": 80, //换行宽度(单位：字符)

	    "word_wrap": true, //是否自动换行

	    "scroll_past_end": true //滚动能否超过结尾

	}

**快捷键：**

	Ctrl+D 选词 （反复按快捷键，即可继续向下同时选中下一个相同的文本进行同时编辑）
	Ctrl+G 跳转到相应的行
	Ctrl+J 合并行（已选择需要合并的多行时）
	Ctrl+L 选择整行（按住-继续选择下行）
	Ctrl+M 光标移动至括号内开始或结束的位置
	Ctrl+T 词互换
	Ctrl+U 软撤销
	Ctrl+P 查找当前项目中的文件和快速搜索；输入 @ 查找文件主标题/函数；或者输入 : 跳转到文件某行；
	Ctrl+R 快速列出/跳转到某个函数
	Ctrl+K Backspace 从光标处删除至行首
	Ctrl+KB 开启/关闭侧边栏
	Ctrl+KK 从光标处删除至行尾
	Ctrl+KT 折叠属性
	Ctrl+KU 改为大写
	Ctrl+KL 改为小写
	Ctrl+K0 展开所有
	Ctrl+Enter 插入行后
	Ctrl+Enter 光标后插入行
	Ctrl+Tab 当前窗口中的标签页切换

	Ctrl+Shift+A 选择光标位置父标签对儿
	Ctrl+Shift+D 复制光标所在整行，插入在该行之前
	Ctrl+Shift+K 删除整行
	Ctrl+Shift+L 鼠标选中多行（按下快捷键），即可同时编辑这些行
	Ctrl+Shift+M 选择括号内的内容（按住-继续选择父括号）
	Ctrl+Shift+P 打开命令面板
	Ctrl+Shift+/ 注释已选择内容
	Ctrl+Shift+↑可以移动此行代码，与上行互换
	Ctrl+Shift+↓可以移动此行代码，与下行互换
	Ctrl+Shift+[ 折叠代码
	Ctrl+Shift+] 展开代码
	Ctrl+Shift+Enter 光标前插入行
	Ctrl+PageDown 、Ctrl+PageUp 文件按开启的前后顺序切换

	Ctrl+/：注释当前行
	Ctrl+Shift+/：当前位置插入注释
	Ctrl+Alt+/：块注释，并Focus到首行，写注释说明用的
	Ctrl+Shift+A：选择当前标签前后，修改标签用的

	Ctrl+Z 撤销
	Ctrl+Y 恢复撤销
	Ctrl+F2 设置书签
	Ctrl+/ 注释整行（如已选择内容，同“Ctrl+Shift+/”效果）
	Ctrl+鼠标左键 可以同时选择要编辑的多处文本

	Shift+鼠标右键（或使用鼠标中键）可以用鼠标进行竖向多行选择
	Shift+F2 上一个书签
	Shift+Tab 去除缩进
	Alt+Shift+1~9（非小键盘）屏幕显示相等数字的小窗口

	Shift+F11：全屏免打扰模式，只编辑当前文件
	Alt+F3：选择所有相同的词
	Alt+.：闭合标签
	Alt+Shift+数字：分屏显示
	Alt+数字：切换打开第N个文件
	Shift+右键拖动：光标多不，用来更改或插入列内容

	Alt+. 闭合当前标签
	Alt+F3 选中文本按下快捷键，即可一次性选择全部的相同文本进行同时编辑

	Tab 缩进 自动完成
	F2 下一个书签
	F9 行排序(按a-z)
	F11 全屏模式



**package插件：**

**Zen Coding**

一个用于HTML和CSS高效的编程的插件

教程：[http://www.qianduan.net/zen-coding-a-new-way-to-write-html-code.html](http://www.qianduan.net/zen-coding-a-new-way-to-write-html-code.html)

只能在HTML或CSS文件中才能打开

**jQuery Package for sublime Text**

如果你离不开jQuery的话，这个必备～～

**Sublime Prefixr**

Prefixr，CSS3 私有前缀自动补全插件，显然也很有用哇

**JS Format**

一个JS代码格式化插件。

**SublimeLinter**

一个支持lint语法的插件，可以高亮linter认为有错误的代码行，也支持高亮一些特别的注释，比如“TODO”，这样就可以被快速定位。（IntelliJ IDEA的TODO功能很赞，这个插件虽然比不上，但是也够用了吧）

**Placeholders**

故名思意，占位用，包括一些占位文字和HTML代码片段，实用。

**Sublime Alignment**

用于代码格式的自动对齐。传说最新版Sublime 已经集成。

**Clipboard History**

粘贴板历史记录，方便使用复制/剪切的内容。

**DetectSyntax**

这是一个代码检测插件。

**Nettuts Fetch**

如果你在用一些公用的或者开源的框架，比如 Normalize.css或者modernizr.js，但是，过了一段时间后，可能该开源库已经更新了，而你没有发现，这个时候可能已经不太适合你的项目了，那么你就要重新折腾一遍或者继续用陈旧的文件。Nettuts Fetch可以让你设置一些需要同步的文件列表，然后保存更新。

**JsMinifier**

该插件基于Google Closure compiler，自动压缩js文件。

**Sublime CodeIntel**

代码自动提示

**Bracket Highlighter**

类似于代码匹配，可以匹配括号，引号等符号内的范围。

**Hex to HSL**

自动转换颜色值，从16进制到HSL格式，快捷键 Ctrl+Shift+U

**GBK to UTF8**
将文件编码从GBK转黄成UTF8，快捷键Ctrl+Shift+C

**Git**
该插件基本上实现了git的所有功能。

**个人的配置文件说明：**

**Preferences.sublime-settings文件：**

	// While you can edit this file, it's best to put your changes in
	// "User/Preferences.sublime-settings", which overrides the settings in here.
	//
	// Settings may also be placed in file type specific options files, for
	// example, in Packages/Python/Python.sublime-settings for python files.
	{
	// Sets the colors used within the text area
	// 主题文件的路径
	"color_scheme": "Packages/Color Scheme - Default/Monokai.tmTheme",

	// Note that the font_face and font_size are overriden in the platform
	// specific settings file, for example, "Preferences (Linux).sublime-settings".
	// Because of this, setting them here will have no effect: you must set them
	// in your User File Preferences.
	// 设置字体和大小，必须在Settings-User里重写，这里设置没有任何效果
	"font_face": "Consolas",
	"font_size": 12,

	// Valid options are "no_bold", "no_italic", "no_antialias", "gray_antialias",
	// "subpixel_antialias" and "no_round" (OS X only)
	// 字体选项：no_bold不显示粗体字，no_italic不显示斜体字，no_antialias和no_antialias关闭反锯齿
	// subpixel_antialias和no_round是OS X系统独有的
	"font_options": [],

	// Characters that are considered to separate words
	// 在文字上双击会全选当前的内容，如果里面出现以下字符，就会被截断
	"word_separators": "./\\()\"'-:,.;<>~!@#$%^&*|+=[]{}`~?",

	// Set to false to prevent line numbers being drawn in the gutter
	// 是否显示行号
	"line_numbers": true,

	// Set to false to hide the gutter altogether
	// 是否显示行号边栏
	"gutter": true,

	// Spacing between the gutter and the text
	// 行号边栏和文字的间距
	"margin": 4,

	// Fold buttons are the triangles shown in the gutter to fold regions of text
	// 是否显示代码折叠按钮
	"fold_buttons": true,

	// Hides the fold buttons unless the mouse is over the gutter
	// 不管鼠标在不在行号边栏，代码折叠按钮一直显示
	"fade_fold_buttons": true,

	// Columns in which to display vertical rulers
	//列显示垂直标尺，在中括号里填入数字，宽度按字符计算
	"rulers": [],

	// Set to true to turn spell checking on by default
	// 是否打开拼写检查
	"spell_check": false,

	// The number of spaces a tab is considered equal to
	// Tab键制表符宽度
	"tab_size": 4,

	// Set to true to insert spaces when tab is pressed
	// 设为true时，缩进和遇到Tab键时使用空格替代
	"translate_tabs_to_spaces": false,

	// If translate_tabs_to_spaces is true, use_tab_stops will make tab and
	// backspace insert/delete up to the next tabstop
	// translate_tabs_to_spaces设置为true，Tab和Backspace的删除/插入作用于制表符宽度
	// 否则作用于单个空格
	"use_tab_stops": true,

	// Set to false to disable detection of tabs vs. spaces on load
	// false时禁止在载入的时候检测制表符和空格
	"detect_indentation": true,

	// Calculates indentation automatically when pressing enter
	// 按回车时，自动与制表位对齐
	"auto_indent": true,

	// Makes auto indent a little smarter, e.g., by indenting the next line
	// after an if statement in C. Requires auto_indent to be enabled.
	//针对C语言的
	"smart_indent": false,

	// Adds whitespace up to the first open bracket when indenting. Requires
	// auto_indent to be enabled.
	// 需要启用auto_indent，第一次打开括号缩进时插入空格？（没测试出来效果...）
	"indent_to_bracket": true,

	// Trims white space added by auto_indent when moving the caret off the
	// line.
	// 显示对齐的白线是否根据回车、tab等操作自动填补
	"trim_automatic_white_space": true,

	// Disables horizontal scrolling if enabled.
	// May be set to true, false, or "auto", where it will be disabled for
	// source code, and otherwise enabled.
	// 是否自动换行，如果选auto，需要加双引号
	"word_wrap": false,

	// Set to a value other than 0 to force wrapping at that column rather than the
	// window width
	// 设置窗口内文字区域的宽度
	"wrap_width": 0,

	// Set to false to prevent word wrapped lines from being indented to the same
	// level
	// 防止被缩进到同一级的字换行
	"indent_subsequent_lines": true,

	// Draws text centered in the window rather than left aligned
	// 如果没有定义过，则文件居中显示（比如新建的文件）
	"draw_centered": false,

	// Controls auto pairing of quotes, brackets etc
	// 自动匹配引号，括号等
	"auto_match_enabled": true,

	// Word list to use for spell checking
	// 拼写检查的单词列表路径
	"dictionary": "Packages/Language - English/en_US.dic",

	// Set to true to draw a border around the visible rectangle on the minimap.
	// The color of the border will be determined by the "minimapBorder" key in
	// the color scheme
	// 代码地图的可视区域部分是否加上边框，边框的颜色可在配色方案上加入minimapBorder键
	"draw_minimap_border": false,

	// If enabled, will highlight any line with a caret
	// 突出显示当前光标所在的行
	"highlight_line": false,

	// Valid values are "smooth", "phase", "blink", "wide" and "solid".
	// 设置光标闪动方式
	"caret_style": "smooth",

	// Set to false to disable underlining the brackets surrounding the caret
	// 是否特殊显示当前光标所在的括号、代码头尾闭合标记
	"match_brackets": true,

	// Set to false if you'd rather only highlight the brackets when the caret is
	// next to one
	// 设为false时，只有光标在括号或头尾闭合标记的两端时，match_brackets才生效
	"match_brackets_content": true,

	// Set to false to not highlight square brackets. This only takes effect if
	// match_brackets is true
	// 是否突出显示圆括号，match_brackets为true生效
	"match_brackets_square": false,

	// Set to false to not highlight curly brackets. This only takes effect if
	// match_brackets is true
	// 是否突出显示大括号，match_brackets为true生效
	"match_brackets_braces": false,

	// Set to false to not highlight angle brackets. This only takes effect if
	// match_brackets is true
	// 是否突出显示尖括号，match_brackets为true生效
	"match_brackets_angle": false,

	// Enable visualization of the matching tag in HTML and XML
	// html和xml下突出显示光标所在标签的两端，影响HTML、XML、CSS等
	"match_tags": true,

	// Highlights other occurrences of the currently selected text
	// 全文突出显示和当前选中字符相同的字符
	"match_selection": true,

	// Additional spacing at the top of each line, in pixels
	// 设置每一行到顶部，以像素为单位的间距，效果相当于行距
	"line_padding_top": 1,

	// Additional spacing at the bottom of each line, in pixels
	// 设置每一行到底部，以像素为单位的间距，效果相当于行距
	"line_padding_bottom": 1,

	// Set to false to disable scrolling past the end of the buffer.
	// On OS X, this value is overridden in the platform specific settings, so
	// you'll need to place this line in your user settings to override it.
	// 设置为false时，滚动到文本的最下方时，没有缓冲区
	"scroll_past_end": true,

	// This controls what happens when pressing up or down when on the first
	// or last line.
	// On OS X, this value is overridden in the platform specific settings, so
	// you'll need to place this line in your user settings to override it.
	// 控制向上或向下到第一行或最后一行时发生什么（没明白也没试出来）
	"move_to_limit_on_up_down": false,

	// Set to "none" to turn off drawing white space, "selection" to draw only the
	// white space within the selection, and "all" to draw all white space
	// 按space或tab时，实际会产生白色的点（一个空格一个点）或白色的横线（tab_size设置的制表符的宽度），选中状态下才能看到
	// 设置为none时，什么情况下都不显示这些点和线
	// 设置为selection时，只显示选中状态下的点和线
	// 设置为all时，则一直显示
	"draw_white_space": "selection",

	// Set to false to turn off the indentation guides.
	// The color and width of the indent guides may be customized by editing
	// the corresponding .tmTheme file, and specifying the colors "guide",
	// "activeGuide" and "stackGuide"
	// 制表位的对齐白线是否显示，颜色可在主题文件里设置（guide，activeGuide，stackGuide）
	"draw_indent_guides": true,

	// Controls how the indent guides are drawn, valid options are
	// "draw_normal" and "draw_active". draw_active will draw the indent
	// guides containing the caret in a different color.
	// 制表位的对齐白线，draw_normal为一直显示，draw_active为只显示当前光标所在的代码控制域
	"indent_guide_options": ["draw_normal"],

	// Set to true to removing trailing white space on save
	// 为true时，保存文件时会删除每行结束后多余的空格
	"trim_trailing_white_space_on_save": false,

	// Set to true to ensure the last line of the file ends in a newline
	// character when saving
	// 为true时，保存文件时光标会在文件的最后向下换一行
	"ensure_newline_at_eof_on_save": false,

	// Set to true to automatically save files when switching to a different file
	// or application
	// 切换到其它文件标签或点击其它非本软件区域，文件自动保存
	"save_on_focus_lost": false,

	// The encoding to use when the encoding can't be determined automatically.
	// ASCII, UTF-8 and UTF-16 encodings will be automatically detected.
	// 编码时不能自动检测编码时，将自动检测ASCII, UTF-8 和 UTF-16
	"fallback_encoding": "Western (Windows 1252)",

	// Encoding used when saving new files, and files opened with an undefined
	// encoding (e.g., plain ascii files). If a file is opened with a specific
	// encoding (either detected or given explicitly), this setting will be
	// ignored, and the file will be saved with the encoding it was opened
	// with.
	// 默认编码格式
	"default_encoding": "UTF-8",

	// Files containing null bytes are opened as hexadecimal by default
	// 包含空字节的文件被打开默认为十六进制
	"enable_hexadecimal_encoding": true,

	// Determines what character(s) are used to terminate each line in new files.
	// Valid values are 'system' (whatever the OS uses), 'windows' (CRLF) and
	// 'unix' (LF only).
	// 每一行结束的时候用什么字符做终止符
	"default_line_ending": "system",

	// When enabled, pressing tab will insert the best matching completion.
	// When disabled, tab will only trigger snippets or insert a tab.
	// Shift+tab can be used to insert an explicit tab when tab_completion is
	// enabled.
	// 设置为enabled时，在一个字符串间按Tab将插入一个制表符
	// 设置为true时，按Tab会根据前后环境进行代码自动匹配填补
	"tab_completion": true,

	// Enable auto complete to be triggered automatically when typing.
	// 代码提示
	"auto_complete": true,

	// The maximum file size where auto complete will be automatically triggered.
	// 代码提示的大小限制
	"auto_complete_size_limit": 4194304,

	// The delay, in ms, before the auto complete window is shown after typing
	// 代码提示延迟显示
	"auto_complete_delay": 50,

	// Controls what scopes auto complete will be triggered in
	// 代码提示的控制范围
	"auto_complete_selector": "source - comment",

	// Additional situations to trigger auto complete
	// 触发代码提示的其他情况
	"auto_complete_triggers": [ {"selector": "text.html", "characters": "<"} ],

	// By default, auto complete will commit the current completion on enter.
	// This setting can be used to make it complete on tab instead.
	// Completing on tab is generally a superior option, as it removes
	// ambiguity between committing the completion and inserting a newline.
	// 设为false时，选择提示的代码按回车或点击可以输出出来，但选择true时不会输出而是直接换行
	"auto_complete_commit_on_tab": false,

	// Controls if auto complete is shown when snippet fields are active.
	// Only relevant if auto_complete_commit_on_tab is true.
	// auto_complete_commit_on_tab必须为true，控制代码提示的活跃度（没明白...）
	"auto_complete_with_fields": false,

	// By default, shift+tab will only unindent if the selection spans
	// multiple lines. When pressing shift+tab at other times, it'll insert a
	// tab character - this allows tabs to be inserted when tab_completion is
	// enabled. Set this to true to make shift+tab always unindent, instead of
	// inserting tabs.
	// 设置为false，使用Shift + tab总是插入制表符
	"shift_tab_unindent": true,

	// If true, the selected text will be copied into the find panel when it's
	// shown.
	// On OS X, this value is overridden in the platform specific settings, so
	// you'll need to place this line in your user settings to override it.
	// 选中的文本按Ctrl + f时，自动复制到查找面板的文本框里
	"find_selected_text": true,

	//
	// User Interface Settings
	//

	// The theme controls the look of Sublime Text's UI (buttons, tabs, scroll bars, etc)
	// Data\Packages\Theme - Default\Default.sublime-theme控制软件的主题
	"theme": "Default.sublime-theme",

	// Set to 0 to disable smooth scrolling. Set to a value between 0 and 1 to
	// scroll slower, or set to larger than 1 to scroll faster
	// 滚动的速度
	"scroll_speed": 1.0,

	// Controls side bar animation when expanding or collapsing folders
	// 左边边栏文件夹动画
	"tree_animation_enabled": true,
	// 标签页的关闭按钮
	"show_tab_close_buttons": true,

	// OS X 10.7 only: Set to true to disable Lion style full screen support.
	// Sublime Text must be restarted for this to take effect.
	// 针对OS X
	"use_simple_full_screen": false,

	// Valid values are "system", "enabled" and "disabled"
	// 水平垂直滚动条：system和disabled为默认显示方式，enabled为自动隐藏显示
	"overlay_scroll_bars": "system",

	//
	// Application Behavior Settings
	//

	// Exiting the application with hot_exit enabled will cause it to close
	// immediately without prompting. Unsaved modifications and open files will
	// be preserved and restored when next starting.
	//
	// Closing a window with an associated project will also close the window
	// without prompting, preserving unsaved changes in the workspace file
	// alongside the project.
	// 热推出功能！退出时不会提示是否保存文件，而是直接退出
	// 下次打开软件时，文件保持退出前的状态，没来得及保存的内容都在，但并没有真实的写在原文件里
	"hot_exit": true,

	// remember_open_files makes the application start up with the last set of
	// open files. Changing this to false will have no effect if hot_exit is
	// true
	// 软件使用最后的设定打开文件，hot_exit为true时没有效果
	"remember_open_files": true,

	// OS X only: When files are opened from finder, or by dragging onto the
	// dock icon, this controls if a new window is created or not.
	// 针对OS X
	"open_files_in_new_window": true,

	// Set to true to close windows as soon as the last file is closed, unless
	// there's a folder open within the window. This is always enabled on OS X,
	// changing it here won't modify the behavior.
	// 针对OS X
	"close_windows_when_empty": true,
	// 哪些文件会被显示到边栏上
	// folder_exclude_patterns and file_exclude_patterns control which files
	// are listed in folders on the side bar. These can also be set on a per-
	// project basis.
	"folder_exclude_patterns": [".svn", ".git", ".hg", "CVS"],
	"file_exclude_patterns": ["*.pyc", "*.pyo", "*.exe", "*.dll", "*.obj","*.o", "*.a", "*.lib", "*.so", "*.dylib", "*.ncb", "*.sdf", "*.suo", "*.pdb", "*.idb", ".DS_Store", "*.class", "*.psd", "*.db"],
	// These files will still show up in the side bar, but won't be included in
	// Goto Anything or Find in Files
	"binary_file_patterns": ["*.jpg", "*.jpeg", "*.png", "*.gif", "*.ttf", "*.tga", "*.dds", "*.ico", "*.eot", "*.pdf", "*.swf", "*.jar", "*.zip"],

	// List any packages to ignore here. When removing entries from this list,
	// a restart may be required if the package contains plugins.
	// 删除你想要忽略的插件，需要重启
	"ignored_packages": ["Vintage"]
	}


**Sublime Text 2.0.1 完美破解方法(准备工具:十六进制编辑器WinHex)**

1.安装最新的Sublime Text 2.0.1，然后将sublime_text.exe文件备份一下以防破解不成功（只要按我说的做绝对能成功）
2.用WinHex十六进制编辑器打开sublime_text.exe文件，跳到 000CBB70 那一行，将该行的 8A C3 修改为 B0 01 然后保存即可。

![](../img/uploads/2012/11/948bcfc8a786c91738a03267c83d70cf3ac75789.jpg)

3.启动软件，Help->About Sublime Text2，显示如下，说明此时已完美破解。

![](../img/uploads/2012/11/sublime.jpg)

**sublime Text 2取消自动检查更新**

找到Preferences(首选项） -> Settings-User（设置-用户） ，然后添加: 

	"update_check": false.

	{
	    "dictionary": "Packages/Language - English/en_US.dic",
	    "font_size": 13.0,
	    "update_check": false,
	    "ignored_packages":
	    [
	        "BracketHighlighter",
	        "Vintage",
	        "Theme - Night",
	        "ConvertToUTF8",
	        "HTML5",
	        "JsFormat",
	        "Placeholders",
	        "Clipboard History"
	    ]
	}


还有sublime text2主题的颜色有时和自带的左边框的颜色不一致，那么可以把左边框的颜色改一下，在安装目录Sublime Text 2\Packages\Theme - Default文件夹下找到Default.sublime-theme文件找到

	{
	    "class": "sidebar_tree",
	    "row_padding": [8, 3],
	    "indent": 12,
	    "indent_offset": 17,
	    "indent_top_level": false,
	    "layer0.tint": [30, 30, 30],
	    "layer0.opacity": 1.0,
	    "dark_content": false
	},


这里是边框的背景，修改其中颜色的"layer0.tint": [30, 30, 30]

	{
	    "class": "sidebar_label",
	    "color": [150, 150, 150],
	    "font.bold": false
	    // , "shadow_color": [250, 250, 250], "shadow_offset": [0, 0]
	},


这里是边框的文件名，修改其中颜色的"layer0.tint": [30, 30, 30]

	{
	    "class": "sidebar_container",
	    "layer0.tint": [10, 10, 10],
	    "layer0.opacity": 1.0,
	    "layer0.draw_center": false,
	    "layer0.inner_margin": [0, 0, 1, 0],
	    "content_margin": [0, 0, 1, 0]
	},


这里是边框的分割线，修改其中颜色的"layer0.tint": [10, 10, 10]

效果如图：

![](../img/uploads/2012/11/254.jpg)


另外sublime text 2 弹出类似的报错信息：

	A plugin (SublimeCodeIntel) may be making Sublime Text unresponsive by taking too long (0.020000s) in its on_modified callback.
	This message can be disabled via the detect_slow_plugins settin

解决方法： Preferences --> setting_user添加

	"detect_slow_plugins": false

![](../img/uploads/2012/11/code1.jpg)

这样以后就不会弹出类似提示了。