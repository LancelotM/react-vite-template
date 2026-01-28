/**
  宏任务
    包含整个script代码块，setTimeout, setIntval
  微任务
    Promise , queueMicrotask , process.nextTick(node自己实现的，优先级高于 Promise 微任务，并且会在每个事件循环阶段结束后、进入下一个阶段前立即清空。)
  Promise与事件循环
  注：promise在初始化的时候先会执行里面的函数，然后注册then回调。注册完成后，then不会执行，只有等同步代码执行完成后，再会到微任务的event queue里去查询是否有可用的promise回调，如果有，那么执行，如果没有，继续下一个事件循环。
 */

// console.log('start');
// setTimeout(() => console.log('timeout'), 0);
// Promise.resolve().then(() => console.log('promise'));
// queueMicrotask(() => console.log('queueMicrotask'));
// console.log('end');
/** 输出顺序 start,end,promise,queueMicrotask,timeout */
/** ----------------------------------------------------------------------------------------------------------------------------- */
// //主线程直接执行
// console.log('1');
// //丢到宏事件队列中
// setTimeout(function() {
//     console.log('2');
//     queueMicrotask(function() {
//         console.log('3');
//     })
//     new Promise(function(resolve) {
//         console.log('4');
//         resolve();
//     }).then(function() {
//         console.log('5')
//     })
// })
// //微事件1
// queueMicrotask(function() {
//     console.log('6');
// })
// //主线程直接执行
// new Promise(function(resolve) {
//     console.log('7');
//     resolve();
// }).then(function() {
//     //微事件2
//     console.log('8')
// })
// //丢到宏事件队列中
// setTimeout(function() {
//     console.log('9');
//     queueMicrotask(function() {
//         console.log('10');
//     })
//     new Promise(function(resolve) {
//         console.log('11');
//         resolve();
//     }).then(function() {
//         console.log('12')
//     })
// })
/** 输出顺序 1,7,6,8-2,4,3,5-9,11,10,12 */
/** ----------------------------------------------------------------------------------------------------------------------------- */
// new Promise(function (resolve) { 
//     console.log('1')// 宏任务一
//     resolve()
// }).then(function () {
//     console.log('3') // 宏任务一的微任务
// })
// setTimeout(function () { // 宏任务二
//     console.log('4')
//     setTimeout(function () { // 宏任务五
//         console.log('7')
//         new Promise(function (resolve) {
//             console.log('8')
//             resolve()
//         }).then(function () {
//             console.log('10')
//             setTimeout(function () {  // 宏任务七
//                 console.log('12')
//             })
//         })
//         console.log('9')
//     })
// })
// setTimeout(function () { // 宏任务三
//     console.log('5')
// })
// setTimeout(function () {  // 宏任务四
//     console.log('6')
//     setTimeout(function () { // 宏任务六
//         console.log('11')
//     })
// })
// console.log('2') // 宏任务一
/** ----------------------------------------------------------------------------------------------------------------------------- */
// setTimeout(() => {
//     //执行后 回调一个宏事件
//     console.log('内层宏事件3')
// }, 0)
// console.log('外层宏事件1');

// new Promise((resolve) => {
//     console.log('外层宏事件2');
//     resolve()
// }).then(() => {
//     console.log('微事件1');
// }).then(()=>{
//     console.log('微事件2')
// })
/** 输出顺序 外层宏事件1,外层宏事件2-微事件1,微事件2,内层宏事件3 */
/** ----------------------------------------------------------------------------------------------------------------------------- */
// async function asy1(){
//   console.log(1);
//   await asy2();
//   console.log(2);
// }
// const asy2 = async () => {
//   // await Promise.resolve(123);相当于把setTimeout整个都放到宏队列中
//   await setTimeout(() => {
//     Promise.resolve().then(()=>{
//       console.log(3);
//     });
//     console.log(4);
//   }, 0);
// }
// const asy3 = async () => {
//   Promise.resolve().then(()=>{
//     console.log(6);
//   });
// }
// asy1()
// console.log(7);
// asy3()
/** 输出顺序 1,准备,7,吸收,6,2,4,3 */