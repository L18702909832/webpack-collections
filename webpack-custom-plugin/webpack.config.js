const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const HelloWorldPlugin = require('./plugins/hello-world')
// const No2WebpackPlugin = require('./plugins/no2-webpack-plugin')
const FileListPlugin = require('./plugins/file-list-plugin')
const path = require('path')
module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'custom plugin',
		}),
		new CleanWebpackPlugin(),
		new FileListPlugin({
			filename: 'filelist.md',
		}),
	],
}
