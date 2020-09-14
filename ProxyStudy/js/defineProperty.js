/**
 * defineProperty 用于拦截Object.defineProperty操作
 */
var handler = {
    defineProperty (target, key, descriptor) {
        console.log(target)
        console.log(key)
        console.log(descriptor)
        return false
    }
}
var target = {}
var proxy = new Proxy(target, handler)
proxy.foo = 'bar'
console.log(proxy.foo)