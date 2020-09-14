/**
 * has方法用来拦截HasProperty操作，即判断对象是否具有某个属性时，这个方法会生效。
 * 典型的操作就是in运算符
 * has方法
 * 可以接受两个参数，分别是目标对象、需要查询的属性名
 *
 */




// var handler = {
// 	has (target, key) {
// 		if (key[0] === '_') {
// 			return false
// 		}
// 		return key in target
// 	}
// }
// var target = {
// 	_prop: 'foo',
// 	prop: 'foo'
// }
// var proxy = new Proxy(target, handler)
// console.log('_prop' in proxy)











// var obj = {
// 	a: 10
// }
// // Object.preventExtensions(obj)
// var p = new Proxy(obj, {
// 	has: function (target, prop) {
// 		return false
// 	}
// })
// console.log('a' in p)







// has 方法拦截的是HasProperty 操作， 而不是HasOwnProperty操作， 即has方法不判断一个属性是 对象自身的属性，还是继承的属性
// has拦截对 for... in循环不生效
let stu1 = {
	name: '张三',
	score: 59
}
let stu2 = {
	name: '李四',
	score: 99
}
let handler = {
	has(target, prop) {
		if (prop === 'score' && target[prop] < 60) {
			console.log(`${target.name} 不及格`)
			return false
		}
		return prop in target
	}
}
let proxy1 = new Proxy(stu1, handler)
let proxy2 = new Proxy(stu2, handler)
// console.log('score' in proxy1)
// console.log('score' in proxy2)

for (let a in proxy1) {
	// console.log(proxy1)
	// console.log(a)
	console.log(proxy1[a])
}