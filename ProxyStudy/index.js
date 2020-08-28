// let obj = new Proxy({}, {
// 	get: function (target, propKey, receiver) {
// 		console.log(`getting ${propKey}!`)
// 		// console.log(JSON.stringify(target))
// 		// console.log(receiver)
// 		return Reflect.get(target, propKey, receiver)
// 	},
// 	set: function (target, propKey, value, receiver) {
// 		console.log(`setting ${propKey}!`)
// 		// console.log(JSON.stringify(target))
// 		// console.log(value)
// 		// console.log(receiver)
// 		return Reflect.set(target, propKey, value, receiver)
// 	}
// })
// obj.count = 1
// ++obj.count

/**
 * ES6提供Proxy构造函数，用来生成Proxy实例
 */
// var proxy = new Proxy(target, handler)


// var proxy = new Proxy({}, {
// 	get: function (target, propKey) {
// 		return 35
// 	}
// })
// console.log(proxy.name)
// console.log(proxy.names)


// var target = {}
// var handler = {}
// var proxy = new Proxy(target, handler)
// proxy.a= 'b'
// target.a = 'c'
// console.log(proxy.a)



// var object = {
// 	proxy: new Proxy(target, handler)
// }


// var proxy = new Proxy({}, {
// 	get: function(target, propKey) {
// 		return 34
// 	}
// })
// let obj = Object.create(proxy)
// console.log(obj.age)


var handler = {
	get: function (target, name) {
		if (name === 'prototype') {
			return Object.prototype
		}
		return 'Hello,' + name
	},
	apply: function (target, thisBinding, args) {
		return args[0]
	},
	construct: function (target, args) {
		return {value: args[1]}
	}
}
var proxy1 = new Proxy(function (x, y) {
	return x + y
}, handler)
console.log(proxy1(1, 2))
console.log(new proxy1(1, 2))
console.log(proxy1.prototype === Object.prototype)
console.log(proxy1.ages)
