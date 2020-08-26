const getJson = function (url) {
	const promise =  new Promise(function (resolve, reject) {
		const handler = function () {
			if (this.readystate !== 4) {
				return
			}
			if (this.status === 200) {
				resolve(this.response)
			} else {
				reject(new Error(this.statusText))
			}
		}
		const client = new XMLHttpRequest()
		client.open('GET',url)
		client.onreadystatechange = handler()
		client.responstType = 'json'
		client.setRequestHeader('Accept', 'application/json')
		client.send()
	})
	return promise
}
getJson('/posts.json').then(function (json) {
	console.log('contents' + json)
}, function (error) {
	console.log('出错了', error)
})

