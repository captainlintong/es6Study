/**
 *Promise.prototype.then()
 */
// getJSON('/post/1.json').then(function (post) {
// 	return getJSON(post.commentURL)
// }).then(function (comments) {
// 	console.log('resolved', comments)
// }, function (err) {
// 	console.log('rejected', err)
// })

// getJSON('/post/1.json').then(
// 	post => getJSON(post.commentURL)
// ).then(
// 	comments => console.log('resolved', comments),
// 	err => console.log('rejected', err)
// )

/**
 * Promise.prototype.catch()方法是.then(null, rejection)或
 * .then(undefined, rejection)的别名，
 * 用于发生指定错误时的回调函数。
 */
// getJSON('/post.json').then(function (posts) {

// }).catch(function (error) {
// 	console.log('发生错误！', error)
// })

/**------------------------------------------------------------------------------ */
// p.then(val => console.log('fulfilled:', val)).catch(err => console.log('rejected', err))
// // 等同于
// p.then(val => console.log('fulfilled:', val))
// 	.then(null, err => console.log('rejected:', err))

/**------------------------------------------------------------------------------ */

// const promise = new Promise((resolve, reject) => {
// 	throw new Error('text')
// })
// promise.catch(error => {
// 	console.log(error)
// })

// const promise = new Promise((resolve, reject) => {
// 	try {
// 		throw new Error('test2')
// 	} catch (e) {
// 		reject(e)
// 	}
// })
// promise.catch(error => {
// 	console.log(error)
// })

// const promise = new Promise((resolve, reject) => {
// 	reject(new Error('test3'))
// })
// promise.catch(error => {
// 	console.log(error)
// })

// const promise = new Promise((resolve, reject) => {
// 	resolve('ok')
// 	throw new Error('test4')
// })
// promise.then(val => {
// 	console.log(val)
// }).catch(err => {
// 	console.log(err)
// })
/**
 * 如果promise状态已经变成rejected，再抛出错误是无效的，因为promide的状态一旦改变，
 * 就永久保持该状态，不会再改变了。
 */



// promise.then(function (val) {

// }, function (err) {

// })


// promise.then(val => {

// }).catch(err => {

// })


// const someAsyncThing = function () {
// 	return new Promise((resolve, reject) => {
// 		resolve(x+2)
// 	})
// }
// someAsyncThing().then(val => {
// 	console.log('everything is ok!')
// })
// setTimeout(() => {
// 	console.log('123')
// }, 2000)

// const someAsyncThing = function () {
// 	return new Promise(function (resolve, reject) {
// 		resolve(x+2)
// 	})
// }
// someAsyncThing()
// .catch(function (error) {
// 	console.log('oh no', error)
// })
// .then(function () {
// 	console.log('carry on')
// })

// const someAsyncThing = function () {
// 	return new Promise(function (resolve, reject) {
// 		resolve(2)
// 	})
// }
// someAsyncThing()
// .catch(function (error) {
// 	console.log('oh no', error)
// })
// .then(function (val) {
// 	console.log(val)
// })

// const someAsyncThing = function () {
// 	return new Promise(function (resolve, reject) {
// 		resolve(x+2)
// 	})
// }
// someAsyncThing().then(function () {
// 	return someAsyncThing()
// }).catch(function (error) {
// 	console.log('oh no', error)
// 	y+2
// }).catch(function (error) {
// 	console.log('carry on', error)
// })