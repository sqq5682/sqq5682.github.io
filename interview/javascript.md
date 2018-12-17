---
layout: page
title: "javascript"
categories: [blog ]
tags: [javascript ]
description: javascript知识汇总
---

#### JavaScript荳ｭ螯ゆｽ墓｣ｵ倶ｸｸｪ蜿倬譏ｯ荳ｸｪString邀ｻ蝙具ｼ溯ｯｷ蜀吝蜃ｽ謨ｰ螳樒鴫

	typeof(obj) === "string" typeof obj === "string" obj.constructor === String

#### 隸ｷ逕ｨjs蜴ｻ髯､蟄礼ｬｦ荳ｲ遨ｺ譬ｼ

**譁ｹ豕穂ｸｼ壻ｽｿ逕ｨreplace豁｣蛻吝源驟咲噪譁ｹ豕*

	蜴ｻ髯､謇怏遨ｺ譬ｼ: str = str.replace(/s*/g,"");      
	蜴ｻ髯､荳､螟ｴ遨ｺ譬ｼ: str = str.replace(/^s*|s*$/g,"");  
	蜴ｻ髯､蟾ｦ遨ｺ譬ｼstr = str.replace( /^s*/, 窶懌);  
	蜴ｻ髯､蜿ｳ遨ｺ譬ｼstr = str.replace(/(s*$)/g, "");

str荳ｺ隕∝悉髯､遨ｺ譬ｼ逧ｭ礼ｬｦ荳ｲ悟ｮ樔ｾ句ｦゆｸ具ｼ

	var str = " 23 23 "; 
	var str2 = str.replace(/s*/g,""); 
	console.log(str2); // 2323


**譁ｹ豕穂ｺ鯉ｼ壻ｽｿ逕ｨstr.trim()譁ｹ豕*  
str.trim()螻剞諤ｧ壽裏豕募悉髯､荳ｭ髣ｴ逧ｩｺ譬ｼ悟ｮ樔ｾ句ｦゆｸ具ｼ

	var str = "   xiao  ming   "; 
	var str2 = str.trim(); 
	console.log(str2);   //xiao  ming

蜷檎炊茎tr.trimLeft()茎tr.trimRight()蛻悪逕ｨ莠主悉髯､蟄礼ｬｦ荳ｲ蟾ｦ蜿ｳ遨ｺ譬ｼ縲

**譁ｹ豕穂ｸ会ｼ壻ｽｿ逕ｨjquery,$.trim(str)譁ｹ豕*  
$.trim(str)螻剞諤ｧ壽裏豕募悉髯､荳ｭ髣ｴ逧ｩｺ譬ｼ悟ｮ樔ｾ句ｦゆｸ具ｼ

	var str = "   xiao  ming   "; 
	var str2 = $.trim(str) 
	console.log(str2);   //  xiao  ming

#### 菴ｦゆｽ戊執蜿匁ｵ剰ｧ亥勣URL荳ｭ譟･隸｢蟄礼ｬｦ荳ｲ荳ｭ逧盾謨ｰ

豬玖ｯ募慍蝮ｸｺ喇ttp://www.runoob.com/jquery/misc-trim.html?channelid=12333&name=xiaoming&age=23  
螳樔ｾ句ｦゆｸ具ｼ

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


#### js 蟄礼ｬｦ荳ｲ謫堺ｽ懷謨ｰ

蛻嶺ｸｾ莠ｸｸ逕ｨ逧ｭ礼ｬｦ荳ｲ蜃ｽ謨ｰ悟菴謎ｽｿ逕ｨ譁ｹ豕 
concat() 窶蟆ｸ､荳ｪ謌門､壻ｸｪ蟄礼ｬｦ逧枚譛ｬ扈粋襍ｷ譚･瑚ｿ泌屓荳ｸｪ譁ｰ逧ｭ礼ｬｦ荳ｲ縲 
indexOf() 窶霑泌屓蟄礼ｬｦ荳ｲ荳ｭ荳ｸｪ蟄蝉ｸｲ隨ｬ荳､邇ｰ逧ｴ｢蠑輔螯よ棡豐｡譛牙源驟埼｡ｹ瑚ｿ泌屓 -1 縲 
charAt() 窶霑泌屓謖ｮ壻ｽ咲ｽｮ逧ｭ礼ｬｦ縲 
lastIndexOf() 窶霑泌屓蟄礼ｬｦ荳ｲ荳ｭ荳ｸｪ蟄蝉ｸｲ譛錘荳､邇ｰ逧ｴ｢蠑包ｼ悟ｦよ棡豐｡譛牙源驟埼｡ｹ瑚ｿ泌屓 -1 縲 
match() 窶譽衍荳ｸｪ蟄礼ｬｦ荳ｲ譏ｯ蜷ｦ蛹ｹ驟堺ｸｸｪ豁｣蛻呵｡ｨ霎ｾ蠑上  
substr() 蜃ｽ謨ｰ -- 霑泌屓莉市tring逧гtartPos菴咲ｽｮ碁柄蠎ｦ荳ｺlength逧ｭ礼ｬｦ荳ｲ  
substring() 窶霑泌屓蟄礼ｬｦ荳ｲ逧ｸｸｪ蟄蝉ｸｲ縲ゆｼ蜿よ焚譏ｯ襍ｷ蟋倶ｽ咲ｽｮ蜥檎ｻ捺據菴咲ｽｮ縲 
slice() 窶謠仙叙蟄礼ｬｦ荳ｲ逧ｸΚ蛻ｼ悟ｹｶ霑泌屓荳ｸｪ譁ｰ蟄礼ｬｦ荳ｲ縲 
replace() 窶逕ｨ譚･譟･謇ｾ蛹ｹ驟堺ｸｸｪ豁｣蛻呵｡ｨ霎ｾ蠑冗噪蟄礼ｬｦ荳ｲ檎┯蜷惹ｽｿ逕ｨ譁ｰ蟄礼ｬｦ荳ｲ莉｣譖ｿ蛹ｹ驟咲噪蟄礼ｬｦ荳ｲ縲 
search() 窶謇ｧ陦御ｸｸｪ豁｣蛻呵｡ｨ霎ｾ蠑丞源驟肴衍謇ｾ縲ょｦよ棡譟･謇ｾ謌仙粥瑚ｿ泌屓蟄礼ｬｦ荳ｲ荳ｭ蛹ｹ驟咲噪邏｢蠑募縲ょ凄蛻呵ｿ泌屓 -1 縲 
split() 窶騾夊ｿｰｭ礼ｬｦ荳ｲ蛻貞謌仙ｭ蝉ｸｲ悟ｰｸｸｪ蟄礼ｬｦ荳ｲ蛛壽荳ｸｪ蟄礼ｬｦ荳ｲ謨ｰ扈  
length 窶霑泌屓蟄礼ｬｦ荳ｲ逧柄蠎ｦ梧園隹灘ｭ礼ｬｦ荳ｲ逧柄蠎ｦ譏ｯ謖蛹性逧ｭ礼ｬｦ逧ｸｪ謨ｰ縲 
toLowerCase() 窶蟆紛荳ｪ蟄礼ｬｦ荳ｲ霓ｬ謌仙ｰ丞蟄玲ｯ阪  
toUpperCase() 窶蟆紛荳ｪ蟄礼ｬｦ荳ｲ霓ｬ謌仙､ｧ蜀吝ｭ玲ｯ阪  


#### js 謫堺ｽ廣rray逶ｸ蜈ｳ逧ｱ樊蜥梧婿豕

Array 蟇ｹ雎｡螻樊  
constructor 霑泌屓蟇ｹ蛻帛ｻｺ豁､蟇ｹ雎｡逧焚扈謨ｰ逧ｼ慕畑縲
length 隶ｾ鄂ｮ謌冶ｿ泌屓謨ｰ扈ｸｭ蜈ｴ噪謨ｰ逶ｮ縲
prototype 菴ｿ謔ｨ譛芽蜉帛髄蟇ｹ雎｡豺ｻ蜉ｱ樊蜥梧婿豕輔

Array 蟇ｹ雎｡譁ｹ豕 
concat() 霑樊磁荳､荳ｪ謌匁峩螟夂噪謨ｰ扈ｼ悟ｹｶ霑泌屓扈捺棡縲 
join() 謚頑焚扈噪謇怏蜈ｴ叛蜈･荳ｸｪ蟄礼ｬｦ荳ｲ縲ょ邏霑欠螳夂噪蛻囈隨ｦ霑幄｡悟髫斐  
pop() 蛻勁蟷ｶ霑泌屓謨ｰ扈噪譛錘荳ｸｪ蜈ｴ    
shift() 蛻勁蟷ｶ霑泌屓謨ｰ扈噪隨ｬ荳ｸｪ蜈ｴ 
push() 蜷第焚扈噪譛ｫ蟆ｾ豺ｻ蜉ｸｸｪ謌匁峩螟壼邏ｼ悟ｹｶ霑泌屓譁ｰ逧柄蠎ｦ縲 
unshift() 蜷第焚扈噪蠑､ｴ豺ｻ蜉ｸｸｪ謌匁峩螟壼邏ｼ悟ｹｶ霑泌屓譁ｰ逧柄蠎ｦ縲 
reverse() 鬚謨ｰ扈ｸｭ蜈ｴ噪鬘ｺ蠎上  
slice() 莉取汾荳ｪ蟾ｲ譛臥噪謨ｰ扈ｿ泌屓騾牙ｮ夂噪蜈ｴ 
sort() 蟇ｹ謨ｰ扈噪蜈ｴｿ幄｡梧賜蠎 
splice() 蛻勁蜈ｴｼ悟ｹｶ蜷第焚扈ｷｻ蜉眠蜈ｴ  
toSource() 霑泌屓隸･蟇ｹ雎｡逧ｺ蝉ｻ｣遐√  
toString() 謚頑焚扈ｽｬ謐｢荳ｺ蟄礼ｬｦ荳ｲ悟ｹｶ霑泌屓扈捺棡縲 
toLocaleString() 謚頑焚扈ｽｬ謐｢荳ｺ譛ｬ蝨ｰ謨ｰ扈ｼ悟ｹｶ霑泌屓扈捺棡縲 
valueOf() 霑泌屓謨ｰ扈ｯｹ雎｡逧次蟋句

霑咎蜿ｪ譏ｯ蛛壻ｺ嶌蜈ｳ逧荳ｾ悟菴鍋噪菴ｿ逕ｨ譁ｹ豕包ｼ啓隸ｷ蜿り鄂大捩](http://www.w3school.com.cn/jsref/jsref_obj_array.asp) 

#### 諤取豺ｻ蜉遘ｻ髯､縲∫ｧｻ蜉ｨ縲∝､榊宛縲∝蟒ｺ蜥梧衍謇ｾ闃らせ

 1牙蟒ｺ譁ｰ闃らせ

	createDocumentFragment() //蛻帛ｻｺ荳ｸｪDOM迚ｮｵ
	createElement() //蛻帛ｻｺ荳ｸｪ蜈ｷ菴鍋噪蜈ｴ
	createTextNode() //蛻帛ｻｺ荳ｸｪ譁悽闃らせ

2画ｷｻ蜉遘ｻ髯､縲∵崛謐｢縲∵薯蜈･

	appendChild() //豺ｻ蜉
	removeChild() //遘ｻ髯､
	replaceChild() //譖ｿ謐｢
	insertBefore() //謠貞

3画衍謇ｾ

	getElementsByTagName() //騾夊ｿ遲ｾ蜷咲ｧｰ
	getElementsByName() //騾夊ｿ邏噪Name螻樊逧
	getElementById() //騾夊ｿ邏d悟髪荳


#### 蜀吝3荳ｪ菴ｿ逕ｨthis逧蝙句ｺ皮畑

峨蝨ｨhtml蜈ｴｺ倶ｻｶ螻樊荳ｭ菴ｿ逕ｨ悟ｦゑｼ

	<input type=窶拊utton窶onclick=窶捏howInfo(this);窶value=窶晉せ蜃ｻ荳ｸ銀/>

峨譫蜃ｽ謨ｰ

	function Animal(name, color) { 縲
		this.name = name; 縲
		this.color = color; 
	}

峨input轤ｹ蜃ｻ瑚執蜿門

	<input type="button" id="text" value="轤ｹ蜃ｻ荳ｸ /> 
	<script type="text/javascript">     
		var btn = document.getElementById("text");     
		btn.onclick = function() {         
			alert(this.value);    //豁､螟噪this譏ｯ謖蛾聴蜈ｴ    
		}
	</script>

(4)縲‖pply()/call()豎よ焚扈怙蛟ｼ

	var  numbers = [5, 458 , 120 , -215 ];  
	var  maxInNumbers = Math.max.apply(this, numbers);   
	console.log(maxInNumbers);  // 458 
	var maxInNumbers = Math.max.call(this,5, 458 , 120 , -215);  
	console.log(maxInNumbers);  // 458

#### 豈碑ｾフypeof荳司nstanceof

逶ｸ蜷檎せ哽avaScript 荳ｭ typeof 蜥instanceof 蟶ｸ逕ｨ譚･蛻､譁ｭ荳ｸｪ蜿倬譏ｯ蜷ｦ荳ｺ遨ｺ梧閠弍莉ｹ育ｱｻ蝙狗噪縲

typeof逧ｮ壻ｹ牙柱逕ｨ豕包ｼ夊ｿ泌屓蛟ｼ譏ｯ荳ｸｪ蟄礼ｬｦ荳ｲ檎畑譚･隸ｴ譏主序驥冗噪謨ｰ謐ｮ邀ｻ蝙九

扈鰍

(1)縲》ypeof 荳握蜿ｪ閭ｽ霑泌屓螯ゆｸ句荳ｪ扈捺棡嗜umber,boolean,string,function,object,undefined縲 
(2)縲》ypeof 譚･闔ｷ蜿紋ｸｸｪ蜿倬譏ｯ蜷ｦ蟄伜惠悟ｦif(typeof a!="undefined"){alert("ok")}瑚荳崎ｦ∝悉菴ｿ逕ｨ if(a) 蝗ｸｺ螯よ棡 a 荳榊ｭ伜惠域悴螢ｰ譏趣ｼ牙莨壼髞吶  
(3)縲∝ｯｹ莠Array,Null 遲臥音谿雁ｯｹ雎｡菴ｿ逕ｨ typeof 荳ｾ玖ｿ泌屓 object瑚ｿ呎ｭ｣譏ｯ typeof 逧ｱ剞諤ｧ縲

Instanceof螳壻ｹ牙柱逕ｨ豕包ｼ喨nstanceof 逕ｨ莠主愛譁ｭ荳ｸｪ蜿倬譏ｯ蜷ｦ螻樔ｺ取汾荳ｪ蟇ｹ雎｡逧ｮ樔ｾ九

螳樔ｾ区ｼ皮､ｺ

	a instanceof b?alert("true"):alert("false"); //a譏ｯb逧ｮ樔ｾ具ｼ溽悄:蛛
	var a = new Array();  
	alert(a instanceof Array);  // true 
	alert(a instanceof Object)  // true

螯ゆｸ奇ｼ御ｼ夊ｿ泌屓 true悟酔譌ｶ alert(a instanceof Object) 荵滉ｼ夊ｿ泌屓 true;霑呎弍蝗ｸｺ Array 譏ｯ object 逧ｭ千ｱｻ縲

	function test(){}; 
	var a = new test(); 
	alert(a instanceof test)   // true

扈鰍

(1)縲∝ｦゆｸ具ｼ悟ｾ怜芦逧ｻ捺棡荳ｺ窶朗窶霑咎逧instanceof 豬玖ｯ慕噪 object 譏ｯ謖js 隸ｭ豕穂ｸｭ逧object御ｸ肴弍謖dom 讓｡蝙句ｯｹ雎｡縲

	if (window instanceof Object){ alert('Y')} else {  alert('N');}  // 'N'

#### 螯ゆｽ慕炊隗｣髣ｭ蛹ｼ

1縲∝ｮ壻ｹ牙柱逕ｨ豕包ｼ壼ｽ謎ｸｸｪ蜃ｽ謨ｰ逧ｿ泌屓蛟ｼ譏ｯ蜿ｦ螟紋ｸｸｪ蜃ｽ謨ｰ瑚霑泌屓逧ぅ荳ｪ蜃ｽ謨ｰ螯よ棡隹畑莠辷ｶ蜃ｽ謨ｰ蜀Κ逧螳序驥擾ｼ悟ｦよ棡霑泌屓逧ｿ吩ｸｪ蜃ｽ謨ｰ蝨ｨ螟夜Κ陲ｫ謇ｧ陦鯉ｼ悟ｰｱ莠ｧ逕滉ｺ溜蛹  
2縲∬｡ｨ邇ｰ蠖｢蠑擾ｼ壻ｽｿ蜃ｽ謨ｰ螟夜Κ閭ｽ螟溯ｰ畑蜃ｽ謨ｰ蜀Κ螳壻ｹ臥噪蜿倬縲 
3縲∝ｮ樔ｾ句ｦゆｸ具ｼ 
(1)縲∵謐ｮ菴懃畑蝓滄得逧ｧ悟ｺ募ｱゆｽ懃畑蝓滓ｲ｡譛牙｣ｰ譏守噪蜿倬御ｼ壼髄荳贋ｸｺｧ謇ｾ梧伽蛻ｰ蟆ｱ霑泌屓梧ｲ｡謇ｾ蛻ｰ蟆ｱ荳峩謇ｾ檎峩蛻ｰwindow逧序驥擾ｼ梧ｲ｡譛牙ｰｱ霑泌屓undefined縲りｿ咎譏取仞count 譏ｯ蜃ｽ謨ｰ蜀Κ逧lag2 逧ぅ荳ｪcount 縲

	var count=10;   //蜈ｨ螻ｽ懃畑蝓譬ｮｰ荳ｺflag1 
	function add(){     
		var count=0;    //蜃ｽ謨ｰ蜈ｨ螻ｽ懃畑蝓譬ｮｰ荳ｺflag2     
		return function(){         
			count+=1;   //蜃ｽ謨ｰ逧驛ｨ菴懃畑蝓        
			alert(count);     
		} 
	} 
	var s = add() 
	s();//霎灘1 
	s();//霎灘2

4縲∝序驥冗噪菴懃畑蝓 
隕∫炊隗｣髣ｭ蛹ｼ碁ｦ門蠢｡ｻ逅ｧ｣Javascript迚ｹ谿顔噪蜿倬菴懃畑蝓溘  
蜿倬逧ｽ懃畑蝓溷邀ｻ壼螻序驥丞柱螻Κ蜿倬縲 
迚ｹ轤ｹ 
1縲∝謨ｰ蜀Κ蜿ｯ莉･隸ｻ蜿門謨ｰ螟夜Κ逧螻序驥擾ｼ帛惠蜃ｽ謨ｰ螟夜Κ譌ｳ戊ｯｻ蜿門謨ｰ蜀噪螻Κ蜿倬縲 
2縲∝謨ｰ蜀Κ螢ｰ譏主序驥冗噪譌ｶ蛟呻ｼ御ｸｮ夊ｦ∽ｽｿ逕ｨvar蜻ｽ莉､縲ょｦよ棡荳咲畑逧ｯ晢ｼ御ｽｮ樣刔荳雁｣ｰ譏惹ｺｸｸｪ蜈ｨ螻序驥擾ｼ

 5縲∽ｽｿ逕ｨ髣ｭ蛹噪豕ｨ諢冗せ  
1画ｻ･逕ｨ髣ｭ蛹ｼ御ｼ夐謌仙蟄俶ｳｼ擾ｼ夂罰莠朱溜蛹ｼ壻ｽｿ蠕怜謨ｰ荳ｭ逧序驥城陲ｫ菫晏ｭ伜惠蜀ｭ倅ｸｭ悟蟄俶ｶ郁蠕亥､ｧ梧園莉･荳崎貊･逕ｨ髣ｭ蛹ｼ悟凄蛻吩ｼ夐謌千ｽ鷹｡ｵ逧閭ｽ髣ｮ鬚假ｼ悟惠IE荳ｭ蜿ｯ閭ｽ蟇ｼ閾ｴ蜀ｭ俶ｳ愆縲りｧ｣蜀ｳ譁ｹ豕墓弍悟惠騾蜃ｽ謨ｰ荵句燕悟ｰｸ堺ｽｿ逕ｨ逧ｱΚ蜿倬蜈ｨ驛ｨ蛻勁縲 
2我ｼ壽隼蜿倡宛蜃ｽ謨ｰ蜀Κ蜿倬逧縲よ園莉･悟ｦよ棡菴滑辷ｶ蜃ｽ謨ｰ蠖謎ｽ懷ｯｹ雎｡bject我ｽｿ逕ｨ梧滑髣ｭ蛹ｽ謎ｽ懷ｮ噪蜈ｬ逕ｨ譁ｹ豕包ｼublic Method会ｼ梧滑蜀Κ蜿倬蠖謎ｽ懷ｮ噪遘∵怏螻樊rivate value会ｼ瑚ｿ呎慮荳ｮ夊ｦ∝ｰ丞ｿｼ御ｸ崎ｦ囂萓ｿ謾ｹ蜿倡宛蜃ｽ謨ｰ蜀Κ蜿倬逧縲


#### call蜥apply逧玄蛻ｫ譏ｯ莉ｹ茨ｼ

**call譁ｹ豕 **

隸ｭ豕包ｼ喞all(thisObj薫bject)  
螳壻ｹ会ｼ夊ｰ畑荳ｸｪ蟇ｹ雎｡逧ｸｸｪ譁ｹ豕包ｼ御ｻ･蜿ｦ荳ｸｪ蟇ｹ雎｡譖ｿ謐｢蠖灘燕蟇ｹ雎｡縲 
隸ｴ譏趣ｼ喞all 譁ｹ豕募庄莉･逕ｨ譚･莉｣譖ｿ蜿ｦ荳ｸｪ蟇ｹ雎｡隹畑荳ｸｪ譁ｹ豕輔call 譁ｹ豕募庄蟆ｸｸｪ蜃ｽ謨ｰ逧ｯｹ雎｡荳贋ｸ区枚莉主蟋狗噪荳贋ｸ区枚謾ｹ蜿倅ｸｺ逕ｱ thisObj 謖ｮ夂噪譁ｰ蟇ｹ雎｡縲螯よ棡豐｡譛画署萓thisObj 蜿よ焚碁ぅ荵Global 蟇ｹ雎｡陲ｫ逕ｨ菴thisObj縲

**apply譁ｹ豕包ｼ*

隸ｭ豕包ｼ啾pply(thisObj啓argArray])  
螳壻ｹ会ｼ壼ｺ皮畑譟蝉ｸｯｹ雎｡逧ｸｸｪ譁ｹ豕包ｼ檎畑蜿ｦ荳ｸｪ蟇ｹ雎｡譖ｿ謐｢蠖灘燕蟇ｹ雎｡縲  
隸ｴ譏趣ｼ壼ｦよ棡 argArray 荳肴弍荳ｸｪ譛画譜逧焚扈閠ｸ肴弍 arguments 蟇ｹ雎｡碁ぅ荵亥ｰｯｼ閾ｴ荳ｸｪ TypeError縲ょｦよ棡豐｡譛画署萓argArray 蜥thisObj 莉ｻ菴穂ｸｸｪ蜿よ焚碁ぅ荵Global 蟇ｹ雎｡蟆｢ｫ逕ｨ菴thisObj蟷ｶ荳疲裏豕戊｢ｫ莨莉ｻ菴募盾謨ｰ縲

蟇ｹ莠斬pply蜥慶all荳､閠惠菴懃畑荳頑弍逶ｸ蜷檎噪御ｽｸ､閠惠蜿よ焚荳頑怏莉･荳句玄蛻ｫ 
蟇ｹ莠守ｬｬ荳ｸｪ蜿よ焚諢丈ｹ蛾荳御ｽｯｹ隨ｬ莠御ｸｪ蜿よ焚啾pply莨逧弍荳ｸｪ蜿よ焚謨ｰ扈ｼ御ｹ溷ｰｱ譏ｯ蟆､壻ｸｪ蜿よ焚扈粋謌蝉ｸｺ荳ｸｪ謨ｰ扈ｼ瑚call蛻吩ｽ應ｸｺcall逧盾謨ｰ莨井ｻ守ｬｬ莠御ｸｪ蜿よ焚蠑ｧ具ｼ峨螯func.call(func1,var1,var2,var3)蟇ｹ蠎皮噪apply蜀呎ｳ穂ｸｺ喃unc.apply(func1,[var1,var2,var3])蜷梧慮菴ｿ逕ｨapply逧･ｽ螟弍蜿ｯ莉･逶ｴ謗･蟆ｽ灘燕蜃ｽ謨ｰ逧rguments蟇ｹ雎｡菴應ｸｺapply逧ｬｬ莠御ｸｪ蜿よ焚莨縲


#### JavaScript驥悟謨ｰ蜿よ焚arguments譏ｯ謨ｰ扈雛

蝨ｨ蜃ｽ謨ｰ莉｣遐∽ｸｭ御ｽｿ逕ｨ迚ｹ谿雁ｯｹ雎｡ arguments悟ｼ書閠裏髴遑ｮ謖蜿よ焚蜷搾ｼ碁霑ｽｿ逕ｨ荳区蟆ｱ蜿ｯ莉･隶ｿ髣ｮ逶ｸ蠎皮噪蜿よ焚縲 
arguments陌ｽ辟ｶ譛我ｸｺ帶焚扈噪諤ｧ雍ｨ御ｽ蟷ｶ髱樒悄豁｣逧焚扈ｼ悟宵譏ｯ荳ｸｪ邀ｻ謨ｰ扈ｯｹ雎｡縲ょ蟷ｶ豐｡譛画焚扈噪蠕亥､壽婿豕包ｼ御ｸ崎蜒冗悄豁｣逧焚扈ぅ譬ｷ隹畑.jion(),.concat(),.pop()遲画婿豕輔

####  莉ｹ域弍霍ｨ蝓滂ｼ溯ｷｨ蝓溯ｯｷ豎りｵｺ千噪譁ｹ豕墓怏蜩ｪ莠幢ｼ

1縲∽ｻｹ域弍霍ｨ蝓滂ｼ 
逕ｱ莠取ｵ剰ｧ亥勣蜷梧ｺ千ｭ也払悟譏ｯ蜿鷹隸ｷ豎Ｖrl逧刻隶ｮ縲∝沺蜷阪遶ｯ蜿｣荳芽荵矩龍莉ｻ諢丈ｸｸ主ｽ灘燕鬘ｵ髱｢蝨ｰ蝮ｸ榊酔蜊ｳ荳ｺ霍ｨ蝓溘蟄伜惠霍ｨ蝓溽噪諠

	鄂醍ｻ懷刻隶ｮ荳榊酔悟ｦＩttp蜊剰ｮｮ隶ｿ髣ｮhttps蜊剰ｮｮ縲 
	遶ｯ蜿｣荳榊酔悟ｦ0遶ｯ蜿｣隶ｿ髣ｮ8080遶ｯ蜿｣縲 
	蝓溷錐荳榊酔悟ｦＲianduanblog.com隶ｿ髣ｮbaidu.com縲 
	蟄仙沺蜷堺ｸ榊酔悟ｦＢbc.qianduanblog.com隶ｿ髣ｮdef.qianduanblog.com縲 
	蝓溷錐蜥悟沺蜷榊ｯｹ蠎琶p,螯Ｘww.a.com隶ｿ髣ｮ20.205.28.90.

2縲∬ｷｨ蝓溯ｯｷ豎りｵｺ千噪譁ｹ豕包ｼ 
(1)縲｝orxy莉｣逅 
螳壻ｹ牙柱逕ｨ豕包ｼ嗔roxy莉｣逅畑莠主ｰｯｷ豎ょ書騾∫ｻ吝錘蜿ｰ譛榊苅蝎ｨ碁霑恪蜉｡蝎ｨ譚･蜿鷹隸ｷ豎ゑｼ檎┯蜷主ｰｯｷ豎ら噪扈捺棡莨扈吝燕遶ｯ縲 
螳樒鴫譁ｹ豕包ｼ夐霑ginx莉｣逅ｼ 
豕ｨ諢冗せ縲∝ｦよ棡菴ｻ｣逅噪譏ｯhttps蜊剰ｮｮ逧ｯｷ豎ゑｼ碁ぅ荵井ｽ噪proxy鬥門髴ｦ∽ｿ｡莉ｻ隸･隸∽ｹｦ亥ｰ､蜈ｶ譏ｯ閾ｪ螳壻ｹ芽ｯ∽ｹｦ画閠ｿｽ逡･隸∽ｹｦ譽衍悟凄蛻吩ｽ噪隸ｷ豎よ裏豕墓蜉溘

(2)縲，ORS 縲燭ross-Origin Resource Sharing縲 
螳壻ｹ牙柱逕ｨ豕包ｼ壽弍邇ｰ莉｣豬剰ｧ亥勣謾ｯ謖∬ｷｨ蝓溯ｵｺ占ｯｷ豎ら噪荳ｧ肴怙蟶ｸ逕ｨ逧婿蠑上  
菴ｿ逕ｨ譁ｹ豕包ｼ壻ｸ握髴ｦ∝錘遶ｯ莠ｺ蜻伜惠螟炊隸ｷ豎よ焚謐ｮ逧慮蛟呻ｼ梧ｷｻ蜉隶ｸ霍ｨ蝓溽噪逶ｸ蜈ｳ謫堺ｽ懊螯ゆｸ具ｼ

	res.writeHead(200, {     
		"Content-Type": "text/html; charset=UTF-8",     
		"Access-Control-Allow-Origin":'http://localhost',     
		'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',     
		'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type' 
	});

(3)縲）sonp  
螳壻ｹ牙柱逕ｨ豕包ｼ夐霑勘諤∵薯蜈･荳ｸｪscript譬ｭｾ縲よｵ剰ｧ亥勣蟇ｹscript逧ｵｺ仙ｼ慕畑豐｡譛牙酔貅宣剞蛻ｶ悟酔譌ｶ襍ｺ仙刈霓ｽ蛻ｰ鬘ｵ髱｢蜷惹ｼ夂ｫ句叉謇ｧ陦鯉ｼ域ｲ｡譛蛾仆蝪樒噪諠荳具ｼ峨  
迚ｹ轤ｹ夐霑ュ蜀ｵ荳具ｼ碁霑勘諤∝蟒ｺscript譚･隸ｻ蜿紋ｻ門沺逧勘諤∬ｵｺ撰ｼ瑚執蜿也噪謨ｰ謐ｮ荳握荳ｺjson譬ｼ蠑上  
螳樔ｾ句ｦゆｸ具ｼ

	<script>     
		function testjsonp(data) {        
			console.log(data.name); // 闔ｷ蜿冶ｿ泌屓逧ｻ捺棡     
		} 
	</script> 
	<script>     
		var _script = document.createElement('script');     
		_script.type = "text/javascript";    
		_script.src = "http://localhost:8888/jsonp?callback=testjsonp";     
		document.head.appendChild(_script); 
	</script>

郛ｺ轤ｹ 
1縲∬ｿ咏ｧ肴婿蠑乗裏豕募書騾｝ost隸ｷ豎ゑｼ郁ｿ咎
2縲∝嘗螟冶ｦ∫｡ｮ螳嗚sonp逧ｯｷ豎よ弍蜷ｦ螟ｱ雍･蟷ｶ荳榊ｮｹ譏難ｼ悟､ｧ螟壽焚譯楔逧ｮ樒鴫驛ｽ譏ｯ扈灘粋雜慮譌ｶ髣ｴ譚･蛻､螳壹

#### 隗｣驥贋ｸ徽avaScript荳ｭthis譏ｯ螯ゆｽ募ｷ･菴懃噪

this豌ｸ霑懈欠蜷大謨ｰ霑占｡梧慮謇惠逧ｯｹ雎｡瑚荳肴弍蜃ｽ謨ｰ陲ｫ蛻帛ｻｺ譌ｶ謇惠逧ｯｹ雎｡縲ょ諺蜷榊謨ｰ謌紋ｸ榊､ｺ惹ｻｻ菴募ｯｹ雎｡荳ｭ逧謨ｰ謖髄window 縲 

1.螯よ棡譏ｯcall径pply,with梧欠螳夂噪this譏ｯ隹ｼ悟ｰｱ譏ｯ隹√  
2.譎ｮ騾夂噪蜃ｽ謨ｰ隹畑悟謨ｰ陲ｫ隹∬ｰ畑荊his蟆ｱ譏ｯ隹√

#### 謠剰ｿｰ莉･荳句序驥冗噪蛹ｺ蛻ｫ嗜ull蛍ndefined謌勃ndeclared

undeclared譏ｯ荳ｧ崎ｯｭ豕暮漠隸ｯ御ｸ肴弍謨ｰ謐ｮ邀ｻ蝙具ｼ御ｸ崎ｦ∬ｯｯ莨壻ｺ菴弍js蠑墓梼荳堺ｼ壽冠髞呻ｼ御ｼ壽滑螳ｽ捺蜈ｨ螻序驥擾ｼ悟叉蠖捺window逧ｱ樊縲 
null蜥蛍ndefined蝓ｺ譛ｬ譏ｯ蜷御ｹ臥噪悟宵譛我ｸｺ帷ｻｾｮ逧ｷｮ蛻ｫ縲 

null陦ｨ遉ｺ"豐｡譛牙ｯｹ雎｡"悟叉隸･螟ｸ榊ｺ碑ｯ･譛牙縲ょ蝙狗畑豕墓弍 
逕ｨ譚･蛻晏ｧ句喧荳ｸｪ蜿倬瑚ｿ吩ｸｪ蜿倬蜿ｯ閭ｽ陲ｫ襍句荳ｺ荳ｸｪ蟇ｹ雎｡縲 
逕ｨ譚･蜥御ｸｸｪ蟾ｲ扈丞蟋句喧逧序驥乗ｯ碑ｾｼ瑚ｿ吩ｸｪ蜿倬蜿ｯ莉･譏ｯ荵溷庄莉･荳肴弍荳ｸｪ蟇ｹ雎｡縲 
蠖灘謨ｰ逧盾謨ｰ譛滓悍譏ｯ蟇ｹ雎｡譌ｶ瑚｢ｫ逕ｨ菴懷盾謨ｰ莨縲 
蠖灘謨ｰ逧ｿ泌屓蛟ｼ譛滓悍譏ｯ蟇ｹ雎｡譌ｶ瑚｢ｫ逕ｨ菴懆ｿ泌屓蛟ｼ莨縲 
菴應ｸｺ蟇ｹ雎｡蜴溷梛體ｾ逧ｻ育せ縲

undefined陦ｨ遉ｺ"郛ｺ蟆大"悟ｰｱ譏ｯ豁､螟ｺ碑ｯ･譛我ｸｸｪ蛟ｼ御ｽ弍霑俶ｲ｡譛牙ｮ壻ｹ峨蜈ｸ蝙狗畑豕墓弍 

蜿倬陲ｫ螢ｰ譏惹ｺｼ御ｽｲ｡譛芽ｵ句譌ｶ悟ｰｱ遲我ｺ志ndefined縲 
隹畑蜃ｽ謨ｰ譌ｶ悟ｺ碑ｯ･謠蝉ｾ帷噪蜿よ焚豐｡譛画署萓幢ｼ瑚ｯ･蜿よ焚遲我ｺ志ndefined縲 
蟇ｹ雎｡豐｡譛芽ｵ句逧ｱ樊瑚ｯ･螻樊逧荳ｺundefined縲 
蜃ｽ謨ｰ豐｡譛芽ｿ泌屓蛟ｼ譌ｶ碁ｻ倩ｮ､霑泌屓undefined縲

**隸･螯ゆｽ墓｣ｵ句ｮｻｬ*

null夊｡ｨ遉ｺ譌孛ndefined夊｡ｨ遉ｺ荳ｸｪ譛ｪ螢ｰ譏守噪蜿倬梧蟾ｲ螢ｰ譏惹ｽｲ｡譛芽ｵ句逧序驥擾ｼ梧荳ｸｪ蟷ｶ荳榊ｭ伜惠逧ｯｹ雎｡螻樊縲 
==霑千ｮ礼ｬｦ蟆ｸ､閠恚菴懃嶌遲峨螯よ棡隕∝玄蛻ｸ､閠ｼ瑚ｦ∽ｽｿ逕ｨ===謌釦ypeof霑千ｮ礼ｬｦ縲 
莉･荳区弍荳肴ｭ｣遑ｮ逧畑豕包ｼ 

	var exp = undefined;
	if (exp == undefined) {
	    alert("undefined");
	}

exp荳ｺnull譌ｶ御ｹ滉ｼ壼ｾ怜芦荳志ndefined逶ｸ蜷檎噪扈捺棡瑚區辟ｶnull蜥蛍ndefined荳堺ｸ縲よｳｨ諢擾ｼ夊ｦ∝酔譌ｶ蛻､譁ｭundefined蜥系ull譌ｶ蜿ｯ菴ｿ逕ｨ譛ｬ豕輔  
typeof霑泌屓逧弍蟄礼ｬｦ荳ｲ梧怏蜈ｭ遘榊庄閭ｽnumber"縲string"縲boolean"縲object"縲function"縲undefined"縲 
莉･荳区弍豁｣遑ｮ逧畑豕包ｼ

	var exp = undefined;
	if(typeof(exp) == undefined) {
	     alert("undefined");
	}

**JS荳ｭ螯ゆｽ募愛譁ｭnull*

莉･荳区弍荳肴ｭ｣遑ｮ逧畑豕包ｼ

	var exp = null; 
	if(exp == null) {
	    alert("is null");
	}


exp荳ｺundefined譌ｶ御ｹ滉ｼ壼ｾ怜芦荳始ull逶ｸ蜷檎噪扈捺棡瑚區辟ｶnull蜥蛍ndefined荳堺ｸ縲よｳｨ諢擾ｼ夊ｦ∝酔譌ｶ蛻､譁ｭnull蜥蛍ndefined譌ｶ蜿ｯ菴ｿ逕ｨ譛ｬ豕輔

	var exp=null; 
	if(!exp) {
	    alert("is null");
	}

螯よ棡exp荳ｺundefined謌冶謨ｰ蟄鈴峺御ｹ滉ｼ壼ｾ怜芦荳始ull逶ｸ蜷檎噪扈捺棡瑚區辟ｶnull蜥御ｺ瑚荳堺ｸ縲よｳｨ諢擾ｼ夊ｦ∝酔譌ｶ蛻､譁ｭnull縲「ndefined蜥梧焚蟄鈴峺譌ｶ蜿ｯ菴ｿ逕ｨ譛ｬ豕輔

	var exp = null; 
	if(typeof(exp) == "null") {
	    alert("is null");
	}

荳ｺ莠髄荳句螳ｹ憩xp荳ｺnull譌ｶ荊ypeof諤ｻ霑泌屓object縲りｿ咏ｧ肴婿蠑丈ｹ滉ｸ榊､ｪ螂ｽ縲 
莉･荳区弍豁｣遑ｮ逧畑豕包ｼ

	var exp = null; 
	if(!exp&&typeof(exp) != "undefined" && exp != 0) {
	   alert("is null");
	}


#### 隹郁ｰ亥档蝨ｾ蝗樊噺譛ｺ蛻ｶ譁ｹ蠑丞所蜀ｭ倡ｮ｡逅

蝗樊噺譛ｺ蛻ｶ譁ｹ蠑 
1縲∝ｮ壻ｹ牙柱逕ｨ豕包ｼ壼档蝨ｾ蝗樊噺譛ｺ蛻ｶ(GC:Garbage Collection),謇ｧ陦檎識蠅ｴ溯ｴ｣邂｡逅ｻ｣遐∵鴬陦瑚ｿｨ倶ｸｭ菴ｿ逕ｨ逧蟄倥  
2縲∝次逅ｼ壼档蝨ｾ謾ｶ髮勣莨壼ｮ壽悄亥捉譛滓画伽蜃ｺ驍｣莠帑ｸ榊惠扈ｧ扈ｭ菴ｿ逕ｨ逧序驥擾ｼ檎┯蜷朱謾ｾ蜈ｶ蜀ｭ倥菴弍霑吩ｸｪ霑ｨ倶ｸ肴弍螳樊慮逧ｼ悟屏荳ｺ蜈ｶ蠑楳豈碑ｾ､ｧ梧園莉･蝙慇蝗樊噺蝎ｨ莨壽潔辣ｧ蝗ｺ螳夂噪譌ｶ髣ｴ髣ｴ髫泌捉譛滓逧鴬陦後  
3縲∝ｮ樔ｾ句ｦゆｸ具ｼ

	function fn1() {     
		var obj = {name: 'hanzichi', age: 10}; 
	} 
	function fn2() {     
		var obj = {name:'hanzichi', age: 10};    
		return obj; 
	} 
	var a = fn1(); 
	var b = fn2();

fn1荳ｭ螳壻ｹ臥噪obj荳ｺ螻Κ蜿倬瑚蠖楢ｰ畑扈捺據蜷趣ｼ悟莠n1逧識蠅ｼ碁ぅ荵郁ｯ･蝮怜蟄倅ｼ夊｢ｫjs蠑墓梼荳ｭ逧档蝨ｾ蝗樊噺蝎ｨ閾ｪ蜉ｨ驥頑叛帛惠fn2陲ｫ隹畑逧ｿｨ倶ｸｭ瑚ｿ泌屓逧ｯｹ雎｡陲ｫ蜈ｨ螻序驥獣謇欠蜷托ｼ梧園莉･隸･蝮怜蟄伜ｹｶ荳堺ｼ夊｢ｫ驥頑叛縲 
 4縲∝档蝨ｾ蝗樊噺遲也払壽隶ｰ貂勁(霎ｸｺ蟶ｸ逕ｨ)蜥悟ｼ慕畑隶｡謨ｰ縲 
**譬ｮｰ貂勁*  
螳壻ｹ牙柱逕ｨ豕包ｼ壼ｽ灘序驥剰ｿ帛邇ｯ蠅慮悟ｰ序驥乗隶ｰ"霑帛邇ｯ蠅悟ｽ灘序驥冗ｦｻ蠑識蠅慮梧隶ｰ荳ｺ遖ｻ蠑識蠅縲よ汾荳ｸｪ譌ｶ蛻ｻ悟档蝨ｾ蝗樊噺蝎ｨ莨夊ｿｻ､謗臥識蠅ｸｭ逧序驥擾ｼ御ｻ･蜿願｢ｫ邇ｯ蠅序驥丞ｼ慕畑逧序驥擾ｼ悟黄荳狗噪蟆ｱ譏ｯ陲ｫ隗ｸｺ蜃､屓謾ｶ逧序驥上  
蛻ｰ逶ｮ蜑堺ｸｺ豁｢栗E縲：irefox縲＾pera縲，hrome縲ヾafari逧s螳樒鴫菴ｿ逕ｨ逧譏ｯ譬ｮｰ貂勁逧档蝨ｾ蝗樊噺遲也払謌也ｱｻ莨ｼ逧ｭ也払悟宵荳崎ｿ档蝨ｾ謾ｶ髮噪譌ｶ髣ｴ髣ｴ髫比ｺ剃ｸ咲嶌蜷後  
**蠑慕畑隶｡謨ｰ*  
螳壻ｹ牙柱逕ｨ豕包ｼ壼ｼ慕畑隶｡謨ｰ譏ｯ霍溯ｸｪ隶ｰ蠖墓ｯ丈ｸｪ蛟ｼ陲ｫ蠑慕畑逧ｬ｡謨ｰ縲 
蝓ｺ譛ｬ蜴溽炊壼ｰｱ譏ｯ蜿倬逧ｼ慕畑谺｡謨ｰ瑚｢ｫ蠑慕畑荳ｬ｡蛻吝刈1悟ｽ楢ｿ吩ｸｪ蠑慕畑隶｡謨ｰ荳ｺ0譌ｶ瑚｢ｫ隗ｸｺ蜃､屓謾ｶ逧ｯｹ雎｡縲

蜀ｭ倡ｮ｡逅

1縲∽ｻｹ域慮蛟呵ｧｦ蜿大档蝨ｾ蝗樊噺 
蝙慇蝗樊噺蝎ｨ蜻ｨ譛滓霑占｡鯉ｼ悟ｦよ棡蛻逧蟄倬撼蟶ｸ螟夲ｼ碁ぅ荵亥屓謾ｶ蟾･菴應ｹ滉ｼ壼ｾ郁臆蟾ｨ檎｡ｮ螳壼档蝨ｾ蝗樊噺譌ｶ髣ｴ髣ｴ髫泌ｰｱ蜿俶莠ｸｸｪ蛟ｼ蠕玲閠噪髣ｮ鬚倥  
IE6逧档蝨ｾ蝗樊噺譏ｯ譬ｹ謐ｮ蜀ｭ伜驟埼霑占｡檎噪悟ｽ鍋識蠅ｸｭ逧序驥擾ｼ悟ｯｹ雎｡悟ｭ礼ｬｦ荳ｲ霎ｾ蛻ｰ荳ｮ壽焚驥乗慮隗ｦ蜿大档蝨ｾ蝗樊噺縲ょ档蝨ｾ蝗樊噺蝎ｨ荳峩螟ｺ主ｷ･菴懃憾諤ｼ御ｸ･驥榊ｽｱ蜩肴ｵ剰ｧ亥勣諤ｧ閭ｽ縲 
IE7荳ｭ悟档蝨ｾ蝗樊噺蝎ｨ莨壽謐ｮ蜀ｭ伜驟埼荳守ｨ句ｺ丞頃逕ｨ蜀ｭ倡噪豈比ｾ玖ｿ幄｡悟勘諤∬ｰ紛悟ｼｧ句屓謾ｶ蟾･菴懊

2縲∝粋逅噪GC譁ｹ譯茨ｼ1)縲″蜴園譛牙庄隶ｿ髣ｮ逧ｯｹ雎｡; (2)縲∝屓謾ｶ蟾ｲ荳榊庄隶ｿ髣ｮ逧ｯｹ雎｡縲

3縲；C郛ｺ髯ｷ1)縲∝●豁｢蜩榊ｺ泌莉匁桃菴懶ｼ

4縲；C莨伜喧遲也払1)縲∝莉｣蝗樊噺eneration GC(2)縲∝｢樣GC


