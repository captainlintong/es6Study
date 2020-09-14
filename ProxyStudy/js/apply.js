/**
 * apply 方法拦截函数的调用、call和apply操作 可以接受三个参数，分别是目标对象、目标对象上下文对象（this）和目标对象的参数数组
 *
 */

// var handler = {
// 	apply(target, ctx, args) {
// 		return Reflect.apply(...arguments)
// 	}
// }








// var target = function () {
// 	return 'I am the target'
// }
// var handler = {
// 	apply: function () {
// 		return 'I am the proxy'
// 	}
// }
// var p = new Proxy(target, handler)
// console.log(p())
// 上面代码中，变量p是Proxy的实例，当他作为函数调用时，就会被apply方法拦截，返回一个字符串







var twice = {
	apply (target, ctx, args) {
		// console.log('22222')
		console.log(target)
		// console.log(ctx)
		console.log(...args)
		return Reflect.apply(...arguments) * 2
	}
}
function sum (left, right) {
	return left + right
}
var proxy = new Proxy(sum, twice)
console.log(proxy(1, 2))
