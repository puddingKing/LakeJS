var EventUtil = require('../modules/tools/event/EventUtil');
var coor = require('../modules/chart/coordinate');
var test = document.getElementById('test');
var coordinate = document.getElementById('coordinate');
var ctx = coordinate.getContext('2d');

EventUtil.addHandler(test,'click',function(){
	alert('hello,test');
})
coor(ctx,90,170,9);