/**
 * get方法用于拦截某个属性的读取操作，可以接受三个参数，依次为目标对象，属性名和proxy
 * 实例本身，最后一个参数可选。
 */





// var person = {
// 	name: '张三'
// }
// var proxy = new Proxy(person, {
// 	get: function (target, propKey) {
// 		if (propKey in target) {
// 			return target[propKey]
// 		} else {
// 			throw new ReferenceError("Prop name \"" + propKey + "\" does not exist.")
// 		}
// 	}
// })
// console.log(proxy.name)
// console.log(proxy.age)






// let photo = new Proxy({}, {
// 	get(target, propertyKey, receiver) {
// 		console.log('GET ' + propertyKey)
// 		return target[propertyKey]
// 	}
// })
// let obj = Object.create(photo)
// console.log(obj.foo)








// function createArray(...elements) {
// 	// console.log(...elements)
// 	let handler = {
// 		get (target, propKey, receiver) {
// 			let index = Number(propKey)
// 			if (index < 0) {
// 				console.log(index)
// 				propKey = String(target.length + index)
// 			}
// 			return Reflect.get(target, propKey, receiver)
// 		}
// 	}
// 	let target = []
// 	target.push(...elements)
// 	// console.log(target)
// 	return new Proxy(target, handler)
// }
// let arr = createArray('a', 'b', 'c')
// console.log(arr)









// var pipe = function (value) {
// 	var funcStack = []
// 	var myProxy = new Proxy({}, {
// 		get: function (pipeObject, fnName) {
// 			console.log('==========')
// 			console.log(pipeObject)
// 			console.log(fnName)
// 			if (fnName === 'get') {
// 				console.log('get')
// 				console.log(funcStack)
// 				return funcStack.reduce((val, fn) => {
// 					console.log(fn(val))
// 					return fn(val)
// 				}, value)
// 			}
// 			console.log(window[fnName])
// 			funcStack.push(window[fnName])
// 			console.log(funcStack)
// 			console.log('1')
// 			console.log(myProxy)
// 			return myProxy
// 		}
// 	})
// 	console.log('21')
// 	return myProxy
// }
// var double = n => n * 2;
// var pow = n => n * n;
// var reverseInt = n => n.toString().split("").reverse().join("") | 0;
// console.log(pipe(3).double.pow.reverseInt.get)







// var arr = [1, 2, 3, 4];
// var sum = arr.reduce(function(prev, cur, index, arr) {
//     console.log(prev, cur, index, arr);
//     return prev + cur;
// },0)
// console.log(arr, sum);








// var a = 23
// const b = 24
// let c = 25
// console.log(a)
// console.log(b)
// console.log(c)
// console.log('-------------------')
// console.log(window.a)
// console.log(window.b)
// console.log(window.c)







// const dom = new Proxy({}, {
// 	get(target, property) {
// 		return function (attrs = {}, ...children) {
// 			const el = document.createElement(property)
// 			for (let prop of Object.keys(attrs)) {
// 				el.setAttribute(prop, attrs[prop])
// 			}
// 			for (let child of children) {
// 				if (typeof child === 'string') {
// 					child = document.createTextNode(child)
// 				}
// 				el.appendChild(child)
// 			}
// 			return el
// 		}
// 	}
// })
// const el = dom.div({},
// 	'Hello, my name is',
// 	dom.a({
// 		href: 'http://www.baidu.com'
// 	}, 'Mark'),
// 	'. I like:',
// 	dom.ul({},
// 		dom.li({}, 'The web'),
// 		dom.li({}, 'Food'),
// 		dom.li({}, '...actually that\s it')
// 	)
// )
// document.body.appendChild(el)





// const proxy = new Proxy({}, {
// 	get: function (target, key, receiver) {
// 		console.log(receiver)
// 		return receiver
// 	}
// })
// console.log(proxy.getReceiver === proxy)





// const proxy = new Proxy({}, {
// 	get: function (target, key, receiver) {
// 		return receiver
// 	}
// })
// const d = Object.create(proxy)
// console.log(d.abc === d)


/**
 * 如果一个属性不可配置（configurable）且不可写（writable）,则Proxy不能修改该属性，否则通过Proxy对象访问该属性会报错。
 */

const target = Object.defineProperties({}, {
	foo: {
		value: 123,
		writable: false,
		configurable: false
	}
})
const handler = {
	get(target, propKey) {
		return 'abc'
	}
}
const proxy = new Proxy(target, handler)
proxy.foo
