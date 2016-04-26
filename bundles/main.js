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
	var coor = __webpack_require__(2);
	var test = document.getElementById('test');
	var coordinate = document.getElementById('coordinate');
	var ctx = coordinate.getContext('2d');

	EventUtil.addHandler(test,'click',function(){
		alert('hello,test');
	})
	coor(ctx,90,170,9);

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

/***/ },
/* 2 */
/***/ function(module, exports) {

	
	//计算坐标轴上面的y方向的点坐标
	function pointsList(min,max,count,height,yUnit){
		//min：数据的最小值 || max：数据的最大值 || count：y方向的轴个数 || height：canvas的高度 || yUnit:y方向上单元格的高度
		var result = [];
		var ratio = (max-min)/(count-1);
		for (var i = 0; i < count; i++) {
			result.push({
				x:0,
				y:height -yUnit*3- i*yUnit,
				num:ratio*i+min
			})
		}
		console.info(result);
		return result;
	}
	//绘制坐标轴
	function coordinate(ctx,min,max,count){ //min:坐标轴上的最小数值 max:最大数值 count:纵坐标的个数
		var width = ctx.canvas.width;
		var height = ctx.canvas.height;
		var yUnit = height/(count-1+3);
		var points_list = pointsList(min,max,count,height,yUnit); //得到一组点,eg:（0，90）（0，100）（0，110）...
		console.info("canvas高度为："+height);
		console.info(points_list);
		ctx.fillStyle = 'white';
		ctx.rect(0,0,width,height);
		ctx.fill();

		ctx.beginPath();//开始绘制坐标轴的上半部分
		ctx.strokeStyle = 'rgba(0,0,0, 0.1)';
		// ctx.fillStyle = 'red';
		ctx.lineWidth = 1; 
		ctx.font = "12px Arial";
		for (var i = 0; i < count; i++) {
			if (i < (count - 1) / 2) {
				ctx.fillStyle = '#007F24';
			}
			else if(i > (count - 1) / 2){
				ctx.fillStyle = '#FF0A16';
			}
			else{
				ctx.fillStyle = '#333333';
			}
			ctx.moveTo(0,points_list[i].y);
			ctx.lineTo(width,points_list[i].y);//完成绘制坐标轴的上半部分
			ctx.fillText(points_list[i].num.toFixed(2).toString(),0,points_list[i].y-5);
		}	
		ctx.rect(yUnit,height-2*yUnit,width-yUnit,2*yUnit); //绘制坐标轴的下半部分
		ctx.moveTo(yUnit,height-yUnit);
		ctx.lineTo(width,height-yUnit);
		ctx.stroke();
	}
	module.exports = coordinate;

/***/ }
/******/ ]);