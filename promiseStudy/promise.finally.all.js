/**
 * promise.prototype.finally()
 */

// Promise.prototype.finally = function (callback) {
// 	let P = this.constructor
// 	return this.then(
// 		value => P.resolve(callback()).then(() => value),
// 		reason => P.resolve(callback()).then(() => {throw reason})
// 	)
// }

// var p = new Promise((resolve, reject) => {
// 	resolve('resolved')
// })
// p.then(val => {

// 	})
// 	.finally(() => {
// 		console.log(this.constructor)
// 		console.log('sssss')
// 	})

/**
 * Promise.all()用于将多个Promise实例，包装成一个新的Promise实例
 */

//  const p = Promise.all([p1, p2,p3])
// const promises = [2,3,4,5,6,7,].map(item => {
// 	return new Promise((resolve, reject) => {
// 		return resolve(item+1)
// 	})
// })
// console.log(promises);

// var a = Promise.all(promises).then(val => {
// 	console.log(val);
// })


// const p1 = new Promise((resolve, reject) => {
// 	resolve('hello')
// })
// .then(val => val)
// .catch(err => err)

// const p2 = new Promise((resolve, reject) => {
// 	throw new Error('errors')
// })
// .then(val => val)
// .catch(err => err)

// Promise.all([p1, p2])
// .then(result => console.log(result))
// .catch(err => console.log(err))

const p1 = new Promise((resolve, reject) => {
	resolve('resolved')
})
.then(res => res)
const p2 = new Promise((resolve, reject) => {
	throw new Error('出错了')
})
.then(res => res)
Promise.all([p1, p2]).then(res => {
	console.log(res)
}).catch(err => {
	console.log(err)
})