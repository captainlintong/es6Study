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
// 			throw new ReferenceError("Prop name \"" + propKey +  "\" does not exist.")
// 		}
// 	}
// })
// console.log(proxy.name)
// console.log(proxy.age)


// let photo = new Proxy({}, {
// 	get (target, propertyKey, receiver) {
// 		console.log('GET ' + propertyKey)
// 		return target[propertyKey]
// 	}
// })
// let obj = Object.create(photo)
// console.log(obj.foo)

