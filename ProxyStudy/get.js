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


var pipe = function (value) {
	var funcStack = []
	var myProxy = new Proxy({}, {
		get: function (pipeObject, fnName) {
			if (fnName === 'get') {
				// console.log('get')
				return funcStack.reduce((val, fn) => {
					// console.log(fn(val))
					return fn(val)
				}, value)
			}
			funcStack.push(window[fnName])
			console.log('1')
			return myProxy
		}
	})
	console.log('2')
	return myProxy
}

var double = n => n * 2;
var pow = n => n * n;
var reverseInt = n => n.toString().split("").reverse().join("") | 0;

// pipe(3).double.pow.reverseInt.get; // 63
console.log(pipe(3))





// var arr = [1, 2, 3, 4];
// var sum = arr.reduce(function(prev, cur, index, arr) {
//     console.log(prev, cur, index);
//     return prev + cur;
// })
// console.log(arr, sum);