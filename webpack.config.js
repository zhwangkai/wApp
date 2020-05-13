const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: path.join(__dirname, 'src', 'index.js'),
	output: { path: '/var/www/build', filename: 'index.bundle.js' },
	mode: process.env.NODE_ENV || 'development',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
					}
		  },
		  {
			test: /\.html$/,
			use: [
			{
				loader: "html-loader"
				}
				]
				}
				]
				},
				
				resolve: {modules: [path.resolve(__dirname, 'src'), 'node_modules']},
				
				plugins: [
				new HtmlWebPackPlugin({
				template: path.join(__dirname, 'public','index.html')
				})
				]
				};
