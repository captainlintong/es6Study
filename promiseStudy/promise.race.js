/**
 * Promise.race()同样是将个Promise实例，包装成一个新的Promise
 * 实例
 */
// const p = Promise([p1, p2, p3])
// 上面代码中只要p1 p2 p3中有一个实例率先改变状态，p的状态就跟着改变。
// 那个率先改变的Promise实例的返回值，就传递给p的回调函数。

const p = Promise.race([
    // fetch('/resource-that-may-t'),
    new Promise((resolve, reject) => {
        resolve('ojbk')
        // setTimeout(() => resolve('okl'), 3000)
    }),
    new Promise((resolve, reject) => {
        // setTimeout(() => reject(new Error('timeout')), 2000)
        resolve('ojbk2')
    })
])

p.then(val => console.log(val)).catch(err => console.log(err))
console.log(p)