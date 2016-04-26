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

	var EventUtil = __webpack_require__(1);
	var test = document.getElementById('test');

	EventUtil.addHandler(test,'click',function(){
		alert('hello,test');
	})

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

/***/ }
/******/ ]);