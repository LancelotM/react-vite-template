/**
 *! 状态吸收，当有2个Promise叠加的时候，外层Promise会吸收内层的状态并且分为【准备、吸收】2个步骤加入微队列
 */

// const p1 = new Promise((resolve , reject)=>{
//   resolve()
// })
// const p2 = new Promise((resolve , reject)=>{
//   resolve(p1)
// })

// console.log(p1);
// console.log(p2);
/** ----------------------------------------------------------------------------------------------------------------------------- */
// async function async1(){
//   console.log(1);
//   await async2();
//   console.log('AAA');
// }

// async function async2(){ /** 输出顺序 1,准备,queueMicrotask,吸收,3,4,AAA,5,timeout        async干掉就是 1,AAA,queueMicrotask,3,4,5,timeout */
//   return Promise.resolve(2);
// }
// setTimeout(() => console.log('timeout'), 0);
// async1()
// queueMicrotask(() => console.log('queueMicrotask'));

// Promise.resolve()
//   .then(()=>{
//     console.log(3);
//   })
//   .then(()=>{
//     console.log(4);
//   })
//   .then(()=>{
//     console.log(5);
//   })

/** ----------------------------------------------------------------------------------------------------------------------------- */
// const promise1 = Promise.resolve('First');
// const promise2 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve('second')
//   },1000)
// })
// const promise3 = Promise.reject('Third');
// function handlePromise(promise){
//   return promise
//     .then((value)=>{
//       console.log(value);
//       return value;
//     })
//     .catch((error)=>{
//       console.error(error);
//       return 'Error handled';
//     })
// }
 
// async function runPromises(){
//   try {
//     const result1 = await handlePromise(promise1);
//     console.log('Result1:', result1);
//     const result2 = await handlePromise(promise2);
//     console.log('Result2:',result2);
//     const result3 = await handlePromise(promise3);
//     console.log('Result3:',result3);
//   } catch (error) {
//     console.error('Caught error:',error);
//   }
// }
// runPromises();


// const p = new Promise((resolve , reject)=>{
//   setTimeout(()=>{
//     // resolve('change')
//     reject('failed')
//   },2000)
// })
// p.then((result) => {
//   console.log('成功',result);
// },(result)=>{
//   console.log('失败',result);
// }).catch((err) => {
//   console.log('err',err);
// });

// const p = new Promise((resolve , reject)=>1)
// console.log('p',p);
// p.then((res)=>{
//   console.log('p.then',res);
// })
