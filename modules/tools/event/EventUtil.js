var EventUtil = {
	addHandler:function(e,t,handler){
		if (e.addEventListener) {
			e.addEventListener(t,handler,false);
		}else if(e.attachEvent){
			e.attachEvent("on"+t,handler);
		}else{
			e["on"+t] = handler;
		}
	},
	getEvent:function(event){
		return event?event:window.event;
	},
	getTarget:function(event){
		return event.target || event.srcElement;
	},
	getRelatedTarget:function(event){  //一般是在mouseout或者mouseover事件中触发
		if (event.relatedTarget) {
			return event.relatedTarget;
		}else if(event.toElement){
			return event.toElement;
		}else if(event.fromElement){
			return event.fromElement;
		}else{
			return null;
		}
	},
	getButton:function(event){
		if (document.implementation.hasFeature("MouseEvents","2.0")) {  //浏览器是否支持DOM版鼠标事件
			return event.button;
		}else{
			switch(event.button){   //0:表示没有按下按钮 1:表示按下了主鼠标的按钮 2：表示按下了次鼠标的按钮 3：表示同时按下了主次鼠标的按钮 4：表示按下了中间鼠标的按钮 5：表示同时按下了主鼠标以及中间鼠标的按钮 6：表示同时按下次鼠标和中间鼠标的按钮 7：表示同时按下三个鼠标
				case 0:
				case 1:
				case 3:
				case 5:
				case 7:
					return 0
				case 2:
				case 6:
					return 2;
				case 4:
					return 1;
			}
		}
	},
	getWheelDelta:function(){  //如果wheelDelta为正 滚轮是往下滚的
		if (event.wheelDelta) {
			return (client.enginee.opera && client.enginee.opera < 9.5 ? -event.wheelDelta:event.wheelDelta); //opera9.5之前版本是相反的
		}else{
			return -event.detail *40;  //支持firefox
		}
	},
	preventDefault:function(event){
		if (event.preventDefault) {
			event.preventDefault();
		}else{
			event.returnValue = false;
		}
	},
	removeHandler:function(e,t,handler){
		if (e.removeEventListener) {
			e.removeEventListener(t,handler,false);
		}else if(e.detachEvent){
			e.detachEvent("on"+t,handler);
		}else{
			e["on"+t] = null;
		}
	},
	stopPropagation:function(event){
		if (event.stopPropagation) {
			event.stopPropagation();
		}else{
			event.cancelBubble = true;
		}
	}
}
module.exports = EventUtil;