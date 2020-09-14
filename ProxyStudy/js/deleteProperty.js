/**
 * deleteProperty 方法用于拦截delete操作，如果这个方法抛出错误或者返回false，
 * 当前属性就无法被delete命令删除
 */
var handler = {
	deleteProperty (target, key) {
		console.log(key)
		console.log(target)
		console.log('---------------')
		console.log(target[key])
		console.log('---------------')
		invariant (key, 'delete')
		delete target[key]
		return true
	}
}
function invariant (key, action) {
	// console.log(key)
	// console.log(action)
	if (key[0] === '_' ) {
		throw new Error(`Invalid attempt to ${action} private "${key}" property`)
	}
}
var target = {_prop: 'foo'}
var proxy = new Proxy(target, handler)
// console.log(proxy)
delete proxy._prop
console.log(proxy)


