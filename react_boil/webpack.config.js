var path = require('path');

module.exports = {
	entry: __dirname + "/src/index.js",
	output: {
		path: __dirname + "/build",
		filename: "bundle.js"
	},
	module: {
		loaders:[
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loaders: ['babel-loader']
			}
		]
	}
}