const promise = new Promise(function (resolve, reject) {
	// if () {
	//     resolvse(value)
	// } else {
	//     reject(error)
	// }
})
promise.then(function (value) {
	console.log(value)
}, function (error) {
	conslole.log(error)
})
/**-------------------------------------------------------------------------------------------- */

function timeout(ms) {
	return new Promise((resolve, reject) => {
		setTimeout(resolve, ms, 'done2');
	});
}

timeout(100).then((value) => {
	console.log(value);
});

/**-------------------------------------------------------------------------------------------- */

let promise2 = new Promise(function (resolve, reject) {
	console.log('Promise1');
	resolve();
});

promise2.then(function () {
	setTimeout(() => {
		console.log('timeout4')
	}, 1000)
	console.log('resolved2');
});

console.log('Hi!3');

/**
 * 上面代码中，Promise 新建后立即执行，所以首先输出的是Promise。然后，then方法指定的回调函数，将在当前脚本所有同步任务执行完才会执行，所以resolved最后输出。
 * 上面代码中，Promise新建后立即执行，所以首先输出的是promise，然后，then方法指定的回调函数，将在当前脚本所有同步任务执行完才会执行，所以resokved最糊输出。
 */

/**-------------------------------------------------------------------------------------------- */
const getJSON = function (url) {
	const promise = new Promise(function (resolve, reject) {
		const handler = function () {
			if (this.readyState !== 4) {
				return;
			}
			if (this.status === 200) {
				resolve(this.response);
			} else {
				reject(new Error(this.statusText));
			}
		};
		const client = new XMLHttpRequest();
		client.open("GET", url);
		client.onreadystatechange = handler;
		client.responseType = "json";
		client.setRequestHeader("Accept", "application/json");
		client.send();

	});

	return promise;
};

getJSON("/posts.json").then(function (json) {
	console.log('Contents: ' + json);
}, function (error) {
	console.error('出错了', error);
});
/**-------------------------------------------------------------------------------------------- */

const p1 = new Promise(function (resolve, reject) {
  // ...
});

const p2 = new Promise(function (resolve, reject) {
  // ...
  resolve(p1);
})