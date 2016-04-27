/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	// var EventUtil = require('../modules/tools/event/EventUtil');
	var DragDrop = __webpack_require__(3);
	// var coor = require('../modules/chart/coordinate');
	// var test = document.getElementById('test');
	// var coordinate = document.getElementById('coordinate');
	// var ctx = coordinate.getContext('2d');

	// EventUtil.addHandler(test,'click',function(){
	// 	alert('hello,test');
	// })
	// coor(ctx,90,170,9);
	// EventUtil.addHandler(window,"load",function(event){
	// 	EventUtil.addHandler(window,"orientationchange",function(event){
	// 		test.innerHTML = "current orientation is "+window.orientation;
	// 	});
	// })
	DragDrop.enable();
	// DragDrop.addHandler("dragstart",function(event){
	// 	console.info("start dragging "+event.target.id);
	// });
	// DragDrop.addHandler("drag",function(event){
	// 	console.info("dragging");
	// });
	// DragDrop.addHandler("dragend",function(event){
	// 	console.info("dragend");
	// });

/***/ },
/* 1 */
/***/ function(module, exports) {

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

/***/ },
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var EventUtil = __webpack_require__(1);
	var EventTarget = __webpack_require__(4);

	var DragDrop = function(){
		var dragdrop = new EventTarget(),
		dragging = null,
		diffX = 0,
		diffY = 0;

		function handleEvent(event){
			//获取事件和对象
			event = EventUtil.getEvent(event);
			var target = EventUtil.getTarget(event);

			//确定事件类型
			switch(event.type){
				case "mousedown":
					if (target.className.indexOf("draggable")>-1) {
						dragging = target;
						diffX = event.clientX - target.offsetLeft;
						diffY = event.clientY - target.offsetTop;
						dragdrop.fire({type:"dragstart",target:dragging,x:event.clientX,y:event.clientY});
					}
					break;

				case "mousemove":
					if (dragging !== null) {
						//指定位置
						dragging.style.left = (event.clientX - diffX) + "px";
						dragging.style.top = (event.clientY - diffY) + "px";
						dragdrop.fire({type:"drag",target:dragging,x:event.clientX,y:event.clientY});
					}
					break;

				case "mouseup":
					dragdrop.fire({type:"dragend",target:dragging,x:event.clientX,y:event.clientY});
					dragging = null;
					break;
			}
		};

		//public interface
		dragdrop.enable = function(){
			EventUtil.addHandler(document,"mousedown",handleEvent);
			EventUtil.addHandler(document,"mousemove",handleEvent);
			EventUtil.addHandler(document,"mouseup",handleEvent);
		}

		dragdrop.disable = function(){
			EventUtil.addHandler(document,"mousedown",handleEvent);
			EventUtil.addHandler(document,"mousemove",handleEvent);
			EventUtil.addHandler(document,"mouseup",handleEvent);
		}
		return dragdrop;
	}();
	module.exports = DragDrop;

/***/ },
/* 4 */
/***/ function(module, exports) {

	//使用观察者模式自定义事件
	function EventTarget(){
		this.handlers = {};
	}
	EventTarget.prototype = {
		constructor:EventTarget,
		addHandler:function(type,handler){
			if (typeof this.handlers[type] == "undefined") {
				this.handlers[type] = [];
			}
			this.handlers[type].push(handler);
		},
		fire: function(event){
			if (!event.target) {
				event.target = this;
			}
			if (this.handlers[event.type] instanceof Array) {
				var handlers = this.handlers[event.type];
				for (var i = 0, len = handlers.length; i < len; i++) {
					handlers[i](event);
				}
			}
		},
		removeHandler:function(type,handler){
			if (this.handlers[type] instanceof Array) {
				var handlers = this.handlers[type];
				for (var i = 0, len = handlers.length; i < len; i++) {
					if (handlers[i] === handler) {
						break;
					}
				}
				handlers.splice(i,1);
			}
		}
	}
	module.exports = EventTarget;

/***/ }
/******/ ]);