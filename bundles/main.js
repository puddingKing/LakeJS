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
/***/ function(module, exports) {

	// var EventUtil = require('../modules/tools/event/EventUtil');
	// var DragDrop = require('../modules/tools/event/DragDrop');
	// var coor = require('../modules/chart/eastmoney/coordinate');
	// var client = require('../modules/tools/checkClient/UserAgent');

	// EventUtil.addHandler(test,'click',function(){
	// 	alert('hello,test');
	// })
	// coor(ctx,90,170,9);
	// EventUtil.addHandler(window,"load",function(event){
	// 	EventUtil.addHandler(window,"orientationchange",function(event){
	// 		test.innerHTML = "current orientation is "+window.orientation;
	// 	});
	// })


	// DragDrop.enable();
	// DragDrop.addHandler("dragstart",function(event){
	// 	console.info("start dragging "+event.target.id);
	// });
	// DragDrop.addHandler("drag",function(event){
	// 	console.info("dragging");
	// });
	// DragDrop.addHandler("dragend",function(event){
	// 	console.info("dragend");
	// });


	// var test = document.getElementById('test');
	// var coordinate = document.getElementById('coordinate');
	// var ctx = coordinate.getContext('2d');


	// var e = client.engine;
	// var b = client.browser;
	// var s = client.system;
	// console.info(e);
	// console.info(b);
	// console.info(s);

/***/ }
/******/ ]);