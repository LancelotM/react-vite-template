/**
 *! Promise.all
 */
Promise.myall = function (proms){
  let res, rej;
  const p = new Promise((resolve,reject)=>{
    res=resolve;
    rej=reject;
  })
  let i = 0;
  let fulfilled = 0;
  let result = [];
  for (const prom of proms) {
    const index = i;
    i++
    Promise.resolve(prom).then((data)=>{
      result[index] = data;
      fulfilled ++ 
      if(fulfilled === i){
        res(result);
      }
    },rej)
  }
  if(i === 0){
    res([]);
  }
  return p;
}

// const p1 = Promise.resolve(3)
// const p2 = new Promise((resolve)=>{
//   setTimeout(()=>{
//     resolve(4)
//     console.log('5s后啦');
//   },5000)
// })
// const p3 = new Promise((resolve)=>{
//   setTimeout(()=>{
//     resolve(5)
//     console.log('2s后啦');
//   },2000)
// })

// const allPromises = [1,2,p1,p2,p3];
// Promise.all(allPromises).then((res)=>{
//   console.log('all-res 全完事了',res);
// },(err)=>{
//   console.log('all-err',err);
// })

// Promise.myall(allPromises).then((res)=>{
//   console.log('自己的all-res 全完事了',res);
// },(err)=>{
//   console.log('自己的all-err',err);
// })

/** ----------------------------------------------------------------------------------------------------------------------------- */
/**
 *! Promise.allSettled
 */
// Promise.myallSettled = function (proms){
//   let res,rej;
//   const p = new Promise((resolve,reject)=>{
//     res = resolve;
//     rej = reject;
//   })
//   let i = 0;
//   let thenable = 0;
//   let result = [];
//   for (const prom of proms) {
//     const index = i;
//     i++
//     Promise.resolve(prom).then((data)=>{
//       result[index] = {status:'fulfilled',value:data};
//       thenable++;
//       if(i === thenable){
//         res([result])
//       }
//     },(err)=>{
//       result[index] = {status:'rejected',reason:err};
//       thenable++;
//       if(i === thenable){
//         res([result])
//       }
//     })
//   }
//   if(i === 0){
//     res([])
//   }
//   return p
// }

// // 创建三个Promise
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve("p1 resolve")
//     reject('p1 reject error');
//   }, 3000);
// });
 
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('p2 resolve');
//   }, 2000);
// });
 
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('p3 resolve');
//   }, 5000);
// });
 
// // 一定是成功的状态，直接调用then即可
// Promise.allSettled([p1, p2, p3]).then((res) => {
//   // 5秒后打印
//   console.log('all settled:', res);
//   /**
//    * 会按照传参数的顺序打印
//    * [
//    *    {status: 'rejected', reason: 'p1 reject error'} // 失败的信息
//    *    {status: 'fulfilled', value: 'p2 resolve'} // 成功的信息
//    *    {status: 'fulfilled', value: 'p3 resolve'} // 成功的信息
//    * ]
//    */
// });

// Promise.myallSettled([p1, p2, p3]).then((res) => {
//   // 5秒后打印
//   console.log('myallSettled:', res);
// });
/** ----------------------------------------------------------------------------------------------------------------------------- */
/**
 *! Promise.race
 */
// Promise.myrace = function (proms){
//   let res,rej;
//   const p = new Promise((resolve,reject)=>{
//     res = resolve;
//     rej = reject;
//   })
//   let thenable = 0;
//   for (const prom of proms) {
//     Promise.resolve(prom).then((data)=>{
//       thenable++;
//       if(thenable === 1){
//         res(data)
//       }
//     },(err)=>{
//       thenable++;
//       if(thenable === 1){
//         rej(err)
//       }
//     })
//   }
//   return p
// }
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('p1 resolve');
//     // reject("p1 reject error")
//   }, 3000);
// });
 
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve('p2 resolve');
//     reject('p2 reject error');
//   }, 2000);
// });
 
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('p3 resolve');
//   }, 5000);
// });
 
// 特点: 会等到一个Promise有结果(无论这个结果是fulfilled还是rejected)
// 因为p2只用等2秒，它最快，不管它是成功还是失败，都用p2的值
// Promise.race([p1, p2, p3])
//   .then((res) => {
//     console.log('race promise:', res); // race promise: p2 resolve
//   })
//   .catch((err) => {
//     console.log('race promise err:', err); // race promise err: p2 reject error
//   });

// Promise.myrace([p1, p2, p3])
//   .then((res) => {
//     console.log('myrace promise:', res); // race promise: p2 resolve
//   })
//   .catch((err) => {
//     console.log('myrace promise err:', err); // race promise err: p2 reject error
//   });