/*!
 * JDRecharge v1.0.1 , http://chongzhi.jd.com
 * @snandy 2015-05-28 18:45:58
 */
~function(t){"use strict";t.Recharge={};var e={addBook:'<div class="phone-book"><div class="thickbox"><div class="thickwrap"><div class="thicktitle">电话薄</div><div class="thickcon"><div class="search"><input data-place="在我的联系人中搜索" class="text keyword" value="在我的联系人中搜索"></div><div class="tab"><ul class="title"><li data-title="recently">最近充值</li><li data-title="addressList" class="curr">我的联系人（<span class="cnum">0</span>）</li></ul><div class="tab-con"><ul class="tab-booklist recently" style="display:none"></ul><ul class="tab-booklist addressList"></ul><p class="msg mlist hide">您的电话薄里暂无联系人</p></div><div class="sure-sub"><input type="button" value="确认" class="btn"><a href="javascript:;" class="add">+添加联系人</a></div></div></div><a href="javascript:;" class="thickclose">×</a></div></div></div>',conRow:'<li><a class="del" href="javascript:;">删除</a><input class="sels" type="checkbox"><div class="name"><input value="姓名" class="name-txt" maxlength="6" data-place="姓名"><span title="双击可编辑" class="na"></span></div><div class="number"><input value="手机号码" class="number-txt" maxlength="11" data-place="手机号码"><span title="双击可编辑" class="nu"></span></div><div class="msg"></div><div style="clear:both;"></div></li>',manyli:'<li class="clearfix addLi"><div class="fore1"><div class="o-name-con"><span class="oname"></span></div><div class="fmv many-tishi"><p class="number"><input maxlength="11" skuid="" type="text" value="请输入手机号" class="num gray"/><span title="双击可编辑" class="num-txt"></span></p><p class="tishi hide">请输入正确的手机号</p></div><span class="address"></span></div><div class="fore2"><div class="fmv"><span class="money" style="display:none"></span><select class="skuId"><option>100元</option><option>10元</option><option>20元</option><option>30元</option><option>50元</option><option>200元</option><option>300元</option><option>500元</option></select></div></div><div class="fore3"><b class="price">--</b></div><div class="fore4"><a href="javascript:;" class="delete">删除</a></div></li>',recRow:'<li><a href="javascript:;" title="添加到我的联系人" class="add-person">+</a><input class="sels" type="checkbox" class="checked"/><span class="name"></span><span class="number"></span></li>'};t.Recharge.template=e}(jQuery),~function(t){function e(e,a){t.getJSON("http://passport.jd.com/loginservice.aspx?method=Login&callback=?",function(t){var n=t.Identity.IsAuthenticated;n?e(t):a(t)})}function a(e){jdModelCallCenter.settings={clstag1:"login|keycount|5|5",clstag2:"login|keycount|5|6",fn:function(){void 0==e&&(e=location.href),jdModelCallCenter.autoLocation(e);var a=t("#loginbar"),n=a.find(".link-logout");n.length&&n.attr("href","http://passport.jd.com/uc/login?ltype=logout&returnUrl=http://tuan.jd.com")}},jdModelCallCenter.login()}function n(e){var a='[name="'+e+'"]:checked';return t(a).val()}function i(e,a){var n="/json/order/search_searchPhone.action",i={mobile:e};t.ajax(n,{data:i,async:!1,dataType:"json",cache:!1,success:function(t){a&&a(t)}})}function s(e,a){var n="/json/order/search_searchHidPrice.action",i={hidParamStr:e};e&&t.ajax(n,{data:i,async:!1,cache:!1,dataType:"json",success:function(t){a&&a(t)}})}function o(e,a){var n="/json/order/search_searchSkuId.action";t.ajax(n,{data:e,async:!1,cache:!1,dataType:"json",success:function(t){a&&a(t)}})}var c=t.Recharge;c.defaultPrice={50:"7.5-10元",100:"9.95-20元",200:"19.9-20.5元",300:"29-29.9元",500:"49-50元"},c.priceRangeObj={10:"9.80-11.00元",20:"19.60-21.00元",30:"29.40-31.00元",50:"49.00-50.00元",100:"98.00-100.00元",200:"196.00-200.00元",300:"294.00－300.00元",500:"490.00－500.00元"},c.priceManRangeObj={10:"10.00元",20:"20.00元",30:"29.61-30.00元",50:"低至9.6折！",100:"低至9.6折！",200:"197.00-199.00元",300:"低至9.6折！",500:"低至9.6折！"},c.priceTwManRangeObj={10:"10.00元",20:"20.00元",30:"低至9.75折！",50:"低至9.75折！",100:"低至9.75折！",200:"低至9.75折！",300:"低至9.75折！",500:"低至9.75折！"},c.flowRecharge=function(){return{datasrc:{},loadIspArea:function(e,a){var n="http://liuliang.jd.com/ajax/search_searchPhone.action";t.get(n,{mobile:e},function(t){a&&a(t)})},loadIspAreaJsonP:function(e,a){var n="http://liuliang.jd.com/ajax/search_searchPhoneJsonP.action?callback=?";t.getJSON(n,{mobile:e},function(t){a&&a(t)})},loadSku:function(e,a,n){var i="http://liuliang.jd.com/ajax/search_searchSku.action";t.get(i,{areaCode:e,mutCode:a},function(t){n&&n(t)})},loadSkuJsonP:function(e,a,n){var i="http://liuliang.jd.com/ajax/search_searchSkuJsonP.action?callback=?";t.getJSON(i,{areaCode:e,mutCode:a},function(t){n&&n(t)})},submitOrder:function(t){var e=t.skuId,a=t.mobile;if(t.faceAmount,t.areaUsed,t.source)var n="http://liuliang.jd.com/order/order_place.action?source="+t.source+"&skuId="+e+"&mobile="+a+"&t="+(new Date).getTime();else var n="http://liuliang.jd.com/order/order_place.action?skuId="+e+"&mobile="+a+"&t="+(new Date).getTime();window.open(n)}}}(),c.isLogin=e,c.login=a,c.loadSkuData=o,c.loadIspArea=i,c.loadHiddenPrice=s,c.getRadioVal=n}($),~function(t){"use strict";function e(t){return t===+t}t.Recharge;var a=/^1\d{10}$/;t.fn.placeHolder=function(){this.each(function(){var e=t(this),a=e.val();e.focus(function(){e.val()===a&&e.val(""),e.css("color","#333")}).blur(function(){""===e.val()&&e.val(a).css("color","#999")})})},t.addBook=function(n,i){function s(e,a,n){t.ajax({type:"POST",dataType:"json",url:e,data:a,success:n})}function o(e){var a="/json/order/phoneBook_queryContactList.action",n={flag:e};s(a,n,function(e){if(e.status){var a=e.contactsInfo;a.length?(t.each(a,function(e,a){var n=t(R),i=a.name,s=a.phoneNo,o=a.contactId;n.find(".name-txt").val(i).hide(),n.find(".na").text(i).show(),n.find(".number-txt").val(s).hide(),n.find(".nu").text(s).show(),n.attr({cid:o,num:s,na:i}),n.appendTo(S)}),$.text(a.length)):(S.height(50),_.text("您的通讯录里暂无联系人").show())}})}function c(e,a){var n=t(R);return n.find("[data-place]").placeHolder(),S.append(n),S.scrollTop(1e3),e&&n.find(".name-txt").val(e),a&&n.find(".number-txt").val(a),N=!1,n}function l(t){var e=t.find(".name-txt"),n=t.find(".number-txt"),i=t.find(".msg"),s=e.val(),o=n.val();if(""===s||"姓名"===s)return i.text("姓名不能为空").show(),e[0].focus(),N=!1;if(""===o||"手机号码"===o)return i.text("手机号码不能为空").show(),n[0].focus(),N=!1;if(!a.test(o))return i.text("手机号码不正确").show(),n[0].focus(),N=!1;i.hide();var c=e.next(),l=n.next();return c.text(s).show(),l.text(o).show(),e.hide(),n.hide(),N=!0}function r(a){e(a);var n=S.find("li"),i=RegExp(a);n.hide(),n.each(function(){var e=t(this),a=e.find(".na").text();i.test(a)&&e.show()}),n.each(function(){var e=t(this),a=e.find(".nu").text();i.test(a)&&e.show()})}function d(e){var a=e.target;t.contains(P[0],a)||P.remove()}function u(t,e,a){var n="/json/order/phoneBook_addContact.action",i={name:t,phoneNo:e};s(n,i,function(n){if(n.status){N=!0;var i=n.contactsInfo[0];a.attr("na",t),a.attr("num",e),a.attr("cid",i.contactId);var s=$.text()-0+1;$.text(s)}else N=!1,a.find(".name-txt").show(),a.find(".na").hide(),a.find(".number-txt").show(),a.find(".nu").hide(),alert(n.resultMsg)})}function f(t,e){var a=e.phoneNo,n=e.name,i="/json/order/phoneBook_updateContact.action";s(i,e,function(e){if(e.status)a&&t.attr("num",a),n&&t.attr("na",n);else{alert(e.resultMsg);var i=t.attr("num");t.find(".number-txt").val(i).show(),t.find(".nu").hide()}})}function v(t,e){if(t){var a="/json/order/phoneBook_delContact.action",n={contactId:t,phoneNo:e.find(".number-txt").val()};s(a,n,function(t){if(t.status){var a=parseInt($.text(),10);a>0&&$.text(a-1),e.remove()}else alert("删除失败，请稍后再试")})}else e.remove(),N=!0}function h(){var t=y.offset(),e=t.top+x,a=t.left+w;P.css({top:e,left:a})}function p(t){var e=t.find(".name-txt").val(),a=t.find(".number-txt").val(),n=t.attr("na"),i=t.attr("num"),s=t.attr("cid"),o={contactId:s};s?(n!==e?o.name=e:i!==a&&(o.phoneNo=a),(n!==e||i!==a)&&f(t,o)):u(e,a,t)}function m(e){var a=!1;return S.find(".number-txt").each(function(){var n=t(this);return n.val()==e?a=!0:void 0}),a}var g=t(".phone-book");if(!g.length){var b=n.forOne||!1;n.dataUrl||"";var k=n.elTrigger,x=n.diffTop||0,w=n.diffLeft||0,i=i||function(){},y=t(k),j=y.offset(),C=j.top+x,I=j.left+w,T=t.Recharge.template,P=t(T.addBook);P.css({top:C,left:I}).appendTo(document.body);var R=T.conRow;T.recRow;var $=P.find(".cnum"),S=P.find(".addressList"),M=P.find(".recently"),_=P.find(".mlist"),N=!0,L="address";P.delegate(".thickclose","click",function(){P.remove()}).delegate(".keyword","keyup",function(){var e=t(this).val();"address"!==L&&P.find("li[data-title=addressList]").click(),r(e)}).delegate(".title li","click",function(){var e=t(this),a=e.attr("data-title");P.find(".title li").removeClass("curr"),e.addClass("curr"),P.find(".tab-booklist").hide(),P.find("."+a).show();var n=P.find(".add");"recently"===a?(n.hide(),L="recently"):(n.show(),L="address")}).delegate(".add","click",function(){if(P.find(".mlist").hide(),N)c();else{var t=S.find("li:last");t.find(".name-txt")[0].focus()}}).delegate(".sure-sub .btn","click",function(){var e="address"===L,a=e?S:M,n=a.find("[type=checkbox]:checked").map(function(){var a=t(this).closest("li"),n=e?a.find(".na").text():a.find(".name").text(),i=e?a.find(".nu").text():a.find(".number").text();return{name:n,mobile:i}});i(n),P.remove()}).delegate(".add-person","click",function(){var e=t(this).closest("li"),a=e.find(".number"),n=a.text();if(m(n))alert("联系人中已存在该号码");else{P.find("[data-title=addressList]").click();var i=c("",n),s=i.find(".number-txt"),o=s.val();s[0].focus(),s.val(""),s.val(o)}}).delegate(".sels","click",function(){var e=t(this),a=e.closest(".tab-booklist"),n=e.prop("checked");b&&n?(a.find(".sels").prop("disabled","disabled"),e.removeProp("disabled")):a.find(".sels").removeProp("disabled")}),S.delegate(".name-txt","blur",function(){var e=t(this).closest("li"),a=l(e);a&&p(e)}).delegate(".number-txt","blur",function(){var e=t(this).closest("li"),a=l(e);a&&p(e)}).delegate(".number-txt","keyup",function(){var e=t(this).closest("li"),n=e.find(".number-txt"),i=e.find(".msg"),s=n.val();return a.test(s)?void 0:(n.val(s.replace(/\D/g,"")),i.text("手机号码不正确").show(),n[0].focus(),N=!1)}).delegate(".name span, .number span","dblclick",function(){var e=t(this),a=e.prev(),n=a.val();a.show(),e.hide(),a[0].focus(),a.val(""),a.val(n)}).delegate(".del","click",function(e){e.stopPropagation();var a=t(this).closest("li"),n=a.attr("cid");v(n,a)}),o(1),P.find("[data-place]").placeHolder(),t(document).unbind("click",d).bind("click",d),t(window).unbind("resize",h).bind("resize",h),window.top!==window&&t(window.top.document).unbind("click",d).bind("click",d)}}}(jQuery),~function(t){"use strict";function e(e,a){a=a||"default";var n=t(e);n.focus(function(){n.val()===a&&n.val("").css("color","#000")}).blur(function(){""===n.val()&&n.val(a).css("color","#999")})}t.Recharge.placeHolder=e,t("#sms").click(function(){var e=t(this).prop("checked"),a=t("#selectZhiBianWord");e?a.show():a.hide()}),e("#inputSendName","选填"),e("#inputMessageArea","请输入你想对TA说的话（充值成功后会短信发至充值手机），最多34字哦"),t(".preview").mouseover(function(){var e=t("#inputSendName").val(),a=t("#inputMessageArea").val(),n=t("#defaultInputMessage").val(),i=t("#inputMessageArea").val(),s=t("[name=radiobutton]:checked").val();if(null!=e&&null!=i&&n!=i){var o={sendName:e,messageContent:a,facePrice:s};t.post(pageConfig.zibianMsg,o,function(e){t("#messageFilterContent").html(e).attr("style","word-wrap:break-word;white-space:normal;")})}t("#i-preview").show()}).mouseout(function(){t("#i-preview").hide()}),t("#selectZhiBianWord").delegate("select","change",function(){var e=t(this).val();t("#inputMessageArea").val(e),t("#inputSendName").css("color","#999")})}(jQuery),$.fn.suggest=function(t){function e(t,e){return 0==t.lastIndexOf(e,0)}function a(t){for(var a=0;c.length>a;a++)if(e(c[a],t))return!0;return!1}function n(t){return t>=48&&57>=t?!0:t>=96&&105>=t?!0:8==t?!0:!1}var i=t.callbackClick,s=$('<div class="num-big">'),o="";if(o)var c=o.replace(/"/g,"").split(",");this.each(function(){function t(){if(o){for(var t="",e=c.length,a=0;e>a;a++){var n=c[a];t+='<li><div class="fl">'+n+'</div><div class="fr" data-num='+n+">X</div></li>"}t="<ul>"+t+"</ul>",u.append(t)}}function e(t,e){setTimeout(function(){parseInt(t,10);var a=t.substring(0,3),n=t.substring(3,7),i=t.substring(7,11),o="";a.length&&(o=3>a.length?a:a+"-"),n.length&&(o+=4>n.length?n:n+"-"),i.length&&(o+=i),11>=t.length&&0!=t.length?(s.text(o).appendTo(r).show(),11==t.length&&e&&setTimeout(function(){s.remove()},200)):s.remove()},50)}function l(){u.hide(),s.hide()}var r=$(this),d=r.find("input"),u=r.find(".i-list");d.keyup(function(t){var i=d.val();return""==i?(s.remove(),u.hide(),void 0):o&&a(i)?(u.find("li").each(function(){$(this).find(".fl").text().match("^"+i)?$(this).show():$(this).hide()}),u.show(),s.hide(),void 0):(u.hide(),n(t.keyCode)?(e(i,!0),void 0):!1)}).click(function(){var t=d.val();e(t,!1)}),u.delegate("li","mouseenter",function(){var t=$(this);t.addClass("hover")}).delegate("li","mouseleave",function(){$(this).removeClass("hover")}).delegate("li","click",function(){var t=$(this);d.val(t.find(".fl").text()),i&&i.call(d,d.val()),l()}).delegate(".fr","click",function(){var t=$(this);t.parent("li").remove()});var f=r.find(".arrow");f.click(function(){d.css("color","#333"),u.show(),s.hide()}),$(document).click(function(t){var e=t.target;e==f[0]||$(e).parents().hasClass("i-list")||l()});try{window.top!==window&&$(window.top.document).bind("click",l)}catch(v){}t()})};