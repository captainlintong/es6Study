// const getJson = function (url) {
// 	const promise =  new Promise(function (resolve, reject) {
// 		const handler = function () {
// 			if (this.readystate !== 4) {
// 				return
// 			}
// 			if (this.status === 200) {
// 				resolve(this.response)
// 			} else {
// 				reject(new Error(this.statusText))
// 			}
// 		}
// 		const client = new XMLHttpRequest()
// 		client.open('GET',url)
// 		client.onreadystatechange = handler()
// 		client.responstType = 'json'
// 		client.setRequestHeader('Accept', 'application/json')
// 		client.send()
// 	})
// 	return promise
// }
// getJson('/posts.json').then(function (json) {
// 	console.log('contents' + json)
// }, function (error) {
// 	console.log('出错了', error)
// })




const p1 = new Promise(function (resolve, reject) {
	setTimeout(() => reject(new Error('fail')), 3000)
})
const p2 = new Promise(function (resolve, reject) {
	setTimeout(() => resolve(p1), 1000)
})
p2.then(result => console.log(result))
.catch(error => console.log(error))




new Promise((resolve, reject) => {
	resolve(1)
	console.log('2')
}).then(r => {
	console.log('1')
})
/**
 * 注意：调用resolve reject 并不会终结Promise的参数函数的执行
 * 上面代码中，调用resolve(1)以后，后面的consolve.log（2）还是会执行，并且会首先打印出来，因为立即resolved
 * 的promise是在本轮事件循环的末尾执行，总是晚于本轮循环的同步任务。
 *
 * 一般来说，调用resolve reject
 * 以后，promise的使命就完成了，后继操作应该放到then方法里面，而不应该直接写在resolve 或reject里面
 * 所以最好在他们前面加上return语句
 */

