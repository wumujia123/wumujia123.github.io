// JavaScript Document

var widget={
	banner:function(id){
		var oDiv=document.getElementById(id)
		var aA=oDiv.getElementsByTagName('a')
		var oUl=oDiv.getElementsByTagName('ul')[0]
		var aLi=oUl.children
		var n=0;
		var timer=null;
		var boolean=true;

		aLi[0].style.opacity=1;
		function change(n){
			for (var j=0;j<aBtn.length;j++){
				aBtn[j].className='';
			};
			aBtn[n].className='ac';
		}
		function fade(a,b){
			aLi[a].style.display='block';
			aLi[a].style.opacity=1;;
			
			aLi[b].style.display='block';
			aLi[b].style.opacity=0;
			
			hxsd_tools.move(aLi[a],{'opacity':0},1000);
			hxsd_tools.move(aLi[b],{'opacity':100},1000,function(){
				aLi[a].style.display='none';
				boolean=true;
			});
		};
				
		var ol=document.createElement('ol')
		for(var i=0;i<aLi.length;i++){
			ol.innerHTML+='<li>'+(i+1)+'</li>'
		}
		oDiv.appendChild(ol);
		var aBtn=ol.children
		aBtn[0].className='ac'
		
		for(var i=0; i<aBtn.length; i++){
			aBtn[i].index=i; 
			aBtn[i].onclick=function(){
				
				if(n!=this.index){
					fade(n,this.index);
					n=this.index;
					change(n);
				}
			};
		};
		function move(){
			timer=setInterval(function(){
				n++	
				if(n>aLi.length-1){
					n=0;
					fade(aLi.length-1,0)	
				}else{
					fade(n-1,n)	
				}
				change(n)
			},2000)
		}
		move()
		oDiv.onmouseover=function(){
			clearInterval(timer)	
		}
		oDiv.onmouseout=function(){
			move()	
		}
		aA[0].onclick=function(){
			if(boolean!=true){return}
			boolean=false;
			n--	
			if(n<0){
				n=aLi.length-1;
				fade(0,aLi.length-1)	
			}else{
				fade(n+1,n)	
			}
			change(n)
		}
		aA[1].onclick=function(){
			if(boolean!=true){return}
			boolean=false;
			n++	
			if(n>aLi.length-1){
				n=0;
				fade(aLi.length-1,0)	
			}else{
				fade(n-1,n)	
			}
			change(n)
		}
	},
	
	slide:function(id,showNum){
		var oDiv=document.getElementById(id);
		var oUl=oDiv.getElementsByTagName('ul')[0];
		var aLi=oUl.getElementsByTagName('li');
		var aA=oDiv.getElementsByTagName('a')
		var n=0;
		var clone;
		var boolean=true;
		var timer
		//公共方法
		function changeBtn(n){
			for(var k=0; k<aBtn.length; k++){
				aBtn[k].className='';
			};
			aBtn[n].className='ac';
		};
		//------------------------------------------------
		var li_w=hxsd_tools.getStyle(aLi[0],'width');//得到一个li的宽度
		oUl.style.width=li_w*aLi.length+'px';//设定ul宽度
		
		
		//插入按钮---------------------------------------------
		var ol=document.createElement('ol');
		for( var i=0; i<aLi.length; i++ ){
			ol.innerHTML+='<li>'+(showNum? i+1 : '')+'</li>';
		};
		oDiv.appendChild(ol);
		
		var aBtn=oDiv.getElementsByTagName('ol')[0].children;
		
		aBtn[0].className='ac';
		
		//按钮绑定事件------------------------------------------
		for(var i=0; i<aBtn.length; i++){
			
			aBtn[i].index=i;//发牌照
			aBtn[i].onclick=function (){
				//移动图片
				n=this.index;
				changeBtn(n);
				hxsd_tools.move(oUl,{"left":-li_w*n});
			}
		}
		function move(){
			timer=setInterval(function(){
			var old=document.getElementById('temp_slide_item');//定义一个唯一id
			if(old) oUl.removeChild(old);//如果有，就删除（快速点击不同按钮，会有残留，所以要先删除）
			n++;
				if(n>aLi.length-1){
					n=0;
					clone=aLi[aLi.length-1].cloneNode(true);//克隆节点
					clone.id='temp_slide_item';
					oUl.insertBefore(clone,aLi[0]);
					oUl.style.width=li_w*aLi.length+'px'
					oUl.style.left=-li_w*0+'px'
					hxsd_tools.move(oUl,{"left":-li_w},'fast',function(){
						var old=document.getElementById('temp_slide_item');//定义一个唯一id
						if(old) oUl.removeChild(old);//如果有，就删除（快速点击不同按钮，会有残留，所以要先删除）
						oUl.style.width=li_w*aLi.length+'px'
						oUl.style.left=-li_w*0+'px';
						boolean=true;
					});
				}else{
					oUl.style.left=-li_w*(n-1)+'px';
					hxsd_tools.move(oUl,{"left":-li_w*n},'fast',function(){boolean=true});
				};
				changeBtn(n);
			},2000)
		}
		move()
		oDiv.onmouseover=function(){
			clearInterval(timer)	
		}
		oDiv.onmouseout=function(){
			move()	
		}
		//左右切换-----------------------------------------------
		aA[0].onclick=function(){//前一个
			if(boolean!=true){return}
			boolean=false;
			//var old=document.getElementById('temp_slide_item');//定义一个唯一id
			//if(old) oUl.removeChild(old);//如果有，就删除（快速点击不同按钮，会有残留，所以要先删除）
			n--;
			if(n<0){
				n=aLi.length-1;
				clone=aLi[0].cloneNode(true);//克隆节点
				clone.id='temp_slide_item';
				oUl.appendChild(clone);
				oUl.style.width=li_w*aLi.length+'px'
				oUl.style.left=-li_w*(n+1)+'px'
				hxsd_tools.move(oUl,{"left":-li_w*n},'fast',function(){
					oUl.removeChild(aLi[aLi.length-1]);
					oUl.style.width=li_w*aLi.length+'px';
					boolean=true
					//oUl.style.left=-li_w*n+'px';
				});
			}else{
				oUl.style.left=-li_w*(n+1)+'px';
				hxsd_tools.move(oUl,{"left":-li_w*n},'fast',function(){boolean=true});
			}	
			changeBtn(n);
		};
		
		aA[1].onclick=function(){//前一个\
			if(boolean!=true){return}
			boolean=false;
			//var old=document.getElementById('temp_slide_item');//定义一个唯一id
			//if(old) oUl.removeChild(old);//如果有，就删除（快速点击不同按钮，会有残留，所以要先删除）
			n++;
			if(n>aLi.length-1){
				n=0;
				clone=aLi[aLi.length-1].cloneNode(true);//克隆节点
				clone.id='temp_slide_item';
				oUl.insertBefore(clone,aLi[0]);
				oUl.style.width=li_w*aLi.length+'px'
				oUl.style.left=-li_w*0+'px'
				hxsd_tools.move(oUl,{"left":-li_w},'fast',function(){
					oUl.removeChild(aLi[0]);
					oUl.style.width=li_w*aLi.length+'px'
					oUl.style.left=-li_w*0+'px';
					boolean=true;
				});
			}else{
				oUl.style.left=-li_w*(n-1)+'px';
				hxsd_tools.move(oUl,{"left":-li_w*n},'fast',function(){boolean=true});
			};
			changeBtn(n);
		};
	},

	
	enlarge:function(id1,id2){ //id1：原图的div；id2：放大图的div
		var oBox=document.getElementById(id1);
		var aLi=oBox.getElementsByTagName('li')
		var bigb=document.getElementById(id2);
		var aSpan=oBox.getElementsByTagName('span')
		var aImg=bigb.getElementsByTagName('img')
		for(var i=0;i<aLi.length;i++){
			aLi[i].index=i
			aLi[i].onmousemove=function(ev){
				var ev=ev||event;
				var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
				var l=ev.clientX-hxsd_tools.offsetLeft(this)-aSpan[this.index].offsetWidth/2;	
				var t=ev.clientY+scrollTop-hxsd_tools.offsetTop(this)-aSpan[this.index].offsetHeight/2;
				aSpan[this.index].style.display='block';
				bigb.style.display='block';
				
				aImg[this.index].style.display='block';
				if(l<0){
					l=0;	
				}
				if(l>this.offsetWidth-aSpan[this.index].offsetWidth){
					l=this.offsetWidth-aSpan[this.index].offsetWidth;	
				}
				if(t<0){
					t=0;	
				}
				if(t>this.offsetHeight-aSpan[this.index].offsetHeight){
					t=this.offsetHeight-aSpan[this.index].offsetHeight;	
				}
				var rate1=l/(oBox.offsetWidth-aSpan[this.index].offsetWidth);
				var rate2=t/(oBox.offsetHeight-aSpan[this.index].offsetHeight);	
				aSpan[this.index].style.left=l+'px';
				aSpan[this.index].style.top=t+'px';
				aImg[this.index].style.left=-(aImg[this.index].offsetWidth-bigb.offsetWidth)*rate1+'px';
				aImg[this.index].style.top=-(aImg[this.index].offsetHeight-bigb.offsetHeight)*rate2+'px';
			}
			aLi[i].onmouseleave=function(){
				aSpan[this.index].style.display='none';
				aImg[this.index].style.display='none';
				bigb.style.display='none';
			}
		}
	},
	
	
	floor_jump:function(listCls,floorCls){
		var LocationFloorList=hxsd_tools.getByClass(document,listCls)[0];
		var aLi=LocationFloorList.getElementsByTagName('li');
		var aFloor=hxsd_tools.getByClass(document,floorCls);
		var boolean=true;

		//var arr=[];
			
		//-------------------------------------------------
			
		/*for(var i=0; i<aFloor.length; i++){
			var json={};
			json.name=i;
			json.offsetTop=aFloor[i].offsetTop;
			arr.push(json);
		};*/
		var num=0;
		hxsd_tools.addEvent(window,'scroll',function(){
			//显示楼层编号-------------------------------------------------
			console.log(boolean)
			var scrolltop=document.documentElement.scrollTop || document.body.scrollTop;
			if(scrolltop>800){
				LocationFloorList.style.display='block';
			}else{
				LocationFloorList.style.display='none';
			};
			
			// 根据楼层滚动位置，定位编号------------------------------------------------
			//var last_arr=[];
			for(var j=0; j<aFloor.length; j++){
				if(aFloor[j].offsetTop<scrolltop+400){
					num=j;
				}
			};
			//console.log(num)
			//var li_index=last_arr[last_arr.length-1];
			for(var l=0; l<aFloor.length; l++){
				aLi[l].className='';
			};
			aLi[num].className='ac';
			
		})
		
		hxsd_tools.addEvent(window,'mousewheel',function(ev){
			var ev=ev||event
			if(boolean!=true){
				ev.preventDefault();
				return false;
			}
		})
		//点击编号，跳转到相对楼层-----------------------------------------------
		for(var i=0; i<aFloor.length; i++){
			aLi[i].index=i;
			aLi[i].onclick=function(){
				boolean=false;
				var start=document.documentElement.scrollTop || document.body.scrollTop;
				var end=aFloor[this.index].offsetTop;
				move(start,end,function(){
					boolean=true;
				})
			}
			aLi[i].onmousedown=function(){
				return false;
			}
		};
		//move-------------------------------------------------------
		var timer;
		function move(start,end,fn){
			var dis=end-start;
			var count=parseInt(1500/30);
			var n=0;
			clearInterval(timer);
			timer=setInterval(function(){
				n++;
				var a=1-n/count;
				var step_dis=start+dis*(1-a*a*a*a);
				window.scrollTo(0,step_dis);
				if(n==count){
					clearInterval(timer);
					fn&&fn()
				};
			},30)
		};		
	},
	
	menu:function(listId,mainId,cls){ //cls：更换部分的clssname
		var oMenu=document.getElementById(listId);
		var aLi=oMenu.getElementsByTagName('li');
		var oMenuCont=document.getElementById(mainId);
		var aDl=hxsd_tools.getByClass(oMenuCont,cls);
		
		var show_t;//显示弹框计算器
		var hide_t;//隐藏弹框计算器
		var move_t;//鼠标从弹框移入菜单延迟用计时器
		
		//删除所有li上的ac
		function del_li_ac(){
			for(var i=0; i<aLi.length; i++){
				aLi[i].className="";
			};
		}
	//----------------------------------------------------------------------------------------
		
		//触发什么行为（事件）
		for(var i=0; i<aLi.length; i++){
			aLi[i].index=i;//发牌照
			aLi[i].onmouseover=function(){ //为每一个li标签绑定onmouseover事件
				clearTimeout(hide_t);//清除关闭
				clearTimeout(move_t);//清除鼠标移动
			
				var _this=this; //计时器中的this是window，所以要先声明一个_this变量，用这个变量传入计时器 
				show_t=setTimeout(function(){
					
					oMenuCont.style.display="block";//oMenuCont弹框 显示
					
					//显示相对应的内容(就是选项卡的原理)
					for(var i=0; i<aDl.length; i++){
						aDl[i].style.display="none";
					};
					aDl[_this.index].style.display="block";
					
					
					del_li_ac();//删除所有li上的ac  
					_this.className="ac";//自己增加ac
				},50);
				
			
			};
			
			
			aLi[i].onmouseout=function(){  //为每一个li标签绑定onmouseout 事件
				clearTimeout(show_t);
				clearTimeout(hide_t);
				var _this=this;  
				hide_t=setTimeout(function(){
					oMenuCont.style.display="none"; //oMenuCont弹框 隐藏
					
					del_li_ac();//删除所有li上的ac  
				},50);
			};
	//-------------------------------------------------------------------------------------		
		};
		
		//oMenuCont绑定两个事件
		oMenuCont.onmouseover=function(){
			clearTimeout(hide_t);
			clearTimeout(move_t);
			this.style.display="block"; //让自己显示
		};
		
		oMenuCont.onmouseout=function(){
			var _this=this;
			move_t=setTimeout(function(){//延时隐藏
				_this.style.display="none";
				del_li_ac();//删除所有li上的ac  
			},100);
		}
	},
	tab:function(listId,mainId,cls){ //cls：更换部分的clssname
		var oMenu=document.getElementById(listId);
		var aLi=oMenu.getElementsByTagName('li');
		var oMenuCont=document.getElementById(mainId);
		var aDl=hxsd_tools.getByClass(oMenuCont,cls);
		
		
		//删除所有li上的ac
		function del_li_ac(){
			for(var i=0; i<aLi.length; i++){
				aLi[i].className="";
			};
		}
	//----------------------------------------------------------------------------------------
		aDl[0].style.display='block';
		aLi[0].className='ac';
		
		//触发什么行为（事件）
		for(var i=0; i<aLi.length; i++){
			aLi[i].index=i;//发牌照
			aLi[i].onmouseover=function(){ //为每一个li标签绑定onmouseover事件
				for(var i=0; i<aDl.length; i++){
					aDl[i].style.display="none";
				};
				aDl[this.index].style.display="block";
				del_li_ac();//删除所有li上的ac  
				this.className="ac";//自己增加ac
			};
		};
	},

	tab1:function(listId,mainId,cls){ //cls：更换部分的clssname
		var oMenu=document.getElementById(listId);
		var aLi=oMenu.getElementsByTagName('li');
		var oMenuCont=document.getElementById(mainId);
		var aDl=hxsd_tools.getByClass(oMenuCont,cls);
		
		
		//删除所有li上的ac
		function del_li_ac(){
			for(var i=0; i<aLi.length; i++){
				aLi[i].className="";
			};
		}
	//----------------------------------------------------------------------------------------
		aDl[0].style.display='block';
		aLi[0].className='ac';
		
		//触发什么行为（事件）
		for(var i=0; i<aLi.length; i++){
			aLi[i].index=i;//发牌照
			aLi[i].onclick=function(){ //为每一个li标签绑定onmouseover事件
				for(var i=0; i<aDl.length; i++){
					aDl[i].style.display="none";
				};
				aDl[this.index].style.display="block";
				del_li_ac();//删除所有li上的ac  
				this.className="ac";//自己增加ac
			};
		};
	},
	
	tab2:function(Id,cls){ //cls：更换部分的clssname
		var oMenu=document.getElementById(Id);
		var aLi=oMenu.getElementsByTagName('li');
		//var oMenuCont=document.getElementById(mainId);
		var aDl=hxsd_tools.getByClass(oMenu,cls);
		var timer=null
		
		//删除所有li上的ac
		function del_li_ac(){
			for(var i=0; i<aLi.length; i++){
				aLi[i].className="";
			};
		}
	//----------------------------------------------------------------------------------------
		/*aDl[0].style.display='block';
		aLi[0].className='ac';*/
		
		//触发什么行为（事件）
		for(var i=0; i<aDl.length; i++){
			aLi[i].index=i;//发牌照
			aLi[i].onmouseover=function(){ //为每一个li标签绑定onmouseover事件
				clearTimeout(timer)
				var that=this
				timer=setTimeout(function(){
					for(var i=0; i<aDl.length; i++){
						aDl[i].style.display="none";
					};
					aDl[that.index].style.display="block";
					//del_li_ac();//删除所有li上的ac  
					//this.className="ac";//自己增加ac
				},200)
			};
			aLi[i].onmouseout=function(){
				clearTimeout(timer)
			}
		};
	},
	
	icon:function(listId,cls,mainId){
		var oMenu=document.getElementById(listId);
		var aA=hxsd_tools.getByClass(oMenu,cls);
		var aLi=oMenu.getElementsByTagName('li')
		var oMenuCont=document.getElementById(mainId);
		var aSpan=oMenuCont.getElementsByTagName('span');
		var b=true;	
		var a=false
		var timer=null	
		var timer1=null	
		for(var i=0;i<aA.length;i++){
			aA[i].index=i
			aLi[i].onmouseenter=function(ev){
				var ev=ev||event
				ev.cancelBubble=true;
				clearTimeout(timer);
				clearTimeout(timer1);
				var that=this;
				if(b){
					timer=setTimeout(function(){
						hxsd_tools.move(oMenuCont,{"top":31},400);
						if(a){
							for(var k=0; k<aA.length; k++){
								aA[k].className="float";
							};
							aA[that.index].className="float ac";
						};
						
						timer1=setTimeout(function(){
							for(var j=0;j<aA.length;j++){
								hxsd_tools.move(aA[j],{"top":-40},200,function(){
									for(var i=0; i<aA.length; i++){
										aA[i].className="float";
									};
									aA[that.index].className="float ac";
									a=true;
								})
							}
						},150)
					},200)
				}
			}
			aLi[i].onmouseleave=function(){
				clearTimeout(timer);
				clearTimeout(timer1);
				
			}
		}
		
		for(var i=0;i<aSpan.length;i++){
			aSpan[i].onclick=function(){
				b=false;
				a=false;
				for(var i=0; i<aA.length; i++){
					aA[i].className="float";
				};
				hxsd_tools.move(oMenuCont,{"top":208},500,function(){b=true});
				for(var j=0;j<aA.length;j++){
					hxsd_tools.move(aA[j],{"top":0},200)
				}
			}
		}
	},
	
	size:function(id){
		var oDiv=document.getElementById(id)
		var aLi=oDiv.getElementsByTagName('li')	
		for(var i=0;i<aLi.length;i++){
			aLi[i].onclick=function(){
				for(var j=0;j<aLi.length;j++){
					aLi[j].className=''	
				}
				this.className='ac';
			}	
		}
	},
	/*cursor:no-drop;*/
	plus:function(id){
		var oDiv=document.getElementById(id);
		var aA=oDiv.getElementsByTagName('a');
		var text=oDiv.getElementsByTagName('input')[0];
		var timer=null
		text.onkeyup=function(){
			clearTimeout(timer);
			timer=setTimeout(function(){
				if(isNaN(text.value)||parseInt(text.value)<1){
					text.value=1
				}else{
					text.value=parseInt(text.value)
				}
			},500)	
		}
		aA[0].onclick=function(){
			//alert(111)
			aA[1].style.cursor='pointer';
			text.value=parseInt(text.value)+1;
		}
		aA[1].onclick=function(){
			text.value=parseInt(text.value)-1
			if(parseInt(text.value)<1){
				text.value=1;
			}
			if(parseInt(text.value)==1){
				this.style.cursor='no-drop';
			}else{
				this.style.cursor='pointer';
			}
		}
	},
	
	
	address:function(addId,detailId){
		var oDiv=document.getElementById(addId);
		var oDiv1=document.getElementById(detailId);
		var oSpan=oDiv1.getElementsByTagName('span')[0];
		var timer=null;
		var timer1=null;
		oDiv.onmouseenter=function(){
			oDiv1.style.display='block';
			this.style['border-bottom']='1px solid #fff'
		}
		oDiv.onmouseleave=function(){
			timer=setTimeout(function(){
				oDiv1.style.display='none';	
				oDiv.style['border-bottom']='1px solid #ccc'
			},50)
		}
		oDiv1.onmouseenter=function(){
			clearTimeout(timer)
			clearTimeout(timer1)
			this.style.display='block';
			oSpan.onclick=function(){
				oDiv1.style.display='none';
				oDiv.style['border-bottom']='1px solid #fff'
			}
		}
		oDiv1.onmouseleave=function(){
			timer1=setTimeout(function(){
				oDiv1.style.display='none';
				oDiv.style['border-bottom']='1px solid #ccc'
			},100)
		}
	}
}