// 第一版
// 1.创建一个插件的构造函数
// function HelloWorldPlugin(options) {
// 	this.options = options
// }
// // 2. 定义插件原型上的 apply方法
// HelloWorldPlugin.prototype.apply = function (complier) {
// 	let that = this
// 	complier.plugin('done', function () {
// 		console.log('that.options', that.options)
// 	})
// }
// 第二版
// class HelloWorldPlugin {
// 	constructor(options) {
// 		this.options = options
// 	}
// 	apply(complier) {
// 		complier.plugin('done', () => {
// 			console.log('this.options', this.options)
// 		})
// 	}
// }

// 第三版

function HelloWorldPlugin(options) {
	this.options = options
}

HelloWorldPlugin.prototype.apply = function (complier) {
	let self = this
	complier.hooks.done.tap('Hello', function () {
		console.log('self.options', self.options)
	})
}

// 3. 导出插件
module.exports = HelloWorldPlugin
