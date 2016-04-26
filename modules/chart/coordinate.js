
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