var EventUtil = require('../modules/event/EventUtil');
var test = document.getElementById('test');

EventUtil.addHandler(test,'click',function(){
	alert('hello,test');
})