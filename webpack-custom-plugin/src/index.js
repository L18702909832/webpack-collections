function createComponent() {
	var ele = document.createElement('div')
	ele.innerHTML = 'webpack plugin'
	return ele
}

function createEle() {
	var ele = document.createElement('div')
	ele.innerText = 'hello world'
	return ele
}
function createElement() {
	var div = document.createElement('div')
	document.body.appendChild(div)
}

document.body.appendChild(createComponent())
