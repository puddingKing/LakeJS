var webpack = require('webpack');
var path = require('path');

module.exports = {
	//页面入口配置
	entry:{
		main:'./dev/main.js'  
	},
	output:{
		filename:'./bundles/[name].js'
	},
	module: {
        //加载器配置
        // loaders: [
        //     { test: /\.css$/, loader: 'style-loader!css-loader' },
        //     { test: /\.js$/, loader: 'jsx-loader?harmony' },
        //     { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
        //     { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        // ]
    },
    resolve:{
    	//为解决方案配置
    	root:[
    		path.resolve('./modules/')
    	],
    	alias:{  //模块简称/模块重定向
    		jsonp:'tools/jsonp.js'
    	}
    }
}