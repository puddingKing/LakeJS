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
	getRelatedTarget:function(event){
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