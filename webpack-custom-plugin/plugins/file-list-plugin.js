function FileListPlugin(options) {
	this.options = options
	this.filename = this.options.filename || 'filelist.md'
}

FileListPlugin.prototype.apply = function (compiler) {
	compiler.hooks.emit.tapAsync('FileList', (compilation, cb) => {
		const fileListName = this.filename
		let len = Object.keys(compilation.assets).length
		let content = `## 一共有${len}个文件 \n\n`
		for (const filename in compilation.assets) {
			content += `- ${filename} \n`
		}
		compilation.assets[fileListName] = {
			source: function () {
				return content
			},
			size: function () {
				return content.length
			},
		}
		cb()
	})
}

module.exports = FileListPlugin
