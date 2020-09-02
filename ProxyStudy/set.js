/**
 * set()方法用来拦截某个属性的赋值操作，可以接受四个参数，依次为目标对象、属性名、属性值和Proxy实例本身，其中最后一个参数可选。
 *
 */


// let validator = {
// 	set: function (obj, prop, value) {
// 		if (prop === 'age') {
// 			if (!Number.isInteger(value)) {
// 				throw new TypeError('the age is not an integer')
// 			}
// 			if (value > 200) {
// 				throw new RangeError('the age seems invalid')
// 			}
// 		}
// 		obj[prop] = value
// 	}
// }
// let person = new Proxy({}, validator)
// person.age = 102
// console.log(person.age)









// function invariant (key, action) {
// 	console.log(key)
// 	if (key[0] === '_') {
// 		throw new Error(`Invalid attempt to ${action} private "${key}" property`)
// 	}
// }
// const handler = {
// 	get (target, key) {
// 		console.log(target, key)
// 		invariant(key, 'get')
// 		return target[key]
// 	},
// 	set (target, key, value) {
// 		console.log('111')
// 		invariant(key, 'set')
// 		console.log(value)
// 		target[key] = value
// 		return true
// 	}
// }
// const target = {}
// const proxy = new Proxy(target, handler)
// proxy.props = 9









// const handler = {
// 	set: function (obj, prop, value, receiver) {
// 		obj[prop] = receiver
// 	}
// }
// const proxy = new  Proxy({}, handler)
// proxy.age = '12'
// console.log(proxy.age)
// console.log(proxy.age === proxy)







const handler = {
	set (obj, prop, value, receiver) {
		obj[prop] = value
	}
}
const proxy = new Proxy({}, handler)
const myObj = {}
Object.setPrototypeOf(myObj, proxy)
// Object.setPrototypeOf() 方法设置一个指定的对象的原型 ( 即, 内部[[Prototype]]属性）到另一个对象或  null。
/**
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf
 *
 *
 * 警告: 由于现代 JavaScript 引擎优化属性访问所带来的特性的关系，更改对象的 [[Prototype]]在各个浏览器和 JavaScript 引擎上都是一个很慢的操作。
 * 其在更改继承的性能上的影响是微妙而又广泛的，这不仅仅限于 obj.__proto__ = ... 语句上的时间花费，而且可能会延伸到任何代码，
 * 那些可以访问任何[[Prototype]]已被更改的对象的代码。如果你关心性能，你应该避免设置一个对象的 [[Prototype]]。
 * 相反，你应该使用 Object.create()来创建带有你想要的[[Prototype]]的新对象。
 */
