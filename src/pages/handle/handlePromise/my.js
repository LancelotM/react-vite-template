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

const p1 = Promise.resolve(3)
const p2 = new Promise((resolve)=>{
  setTimeout(()=>{
    resolve(4)
    console.log('5s后啦');
  },5000)
})
const p3 = new Promise((resolve)=>{
  setTimeout(()=>{
    resolve(5)
    console.log('2s后啦');
  },2000)
})

const allPromises = [1,2,p1,p2,p3];
Promise.all(allPromises).then((res)=>{
  console.log('all-res 全完事了',res);
},(err)=>{
  console.log('all-err',err);
})

Promise.myall(allPromises).then((res)=>{
  console.log('自己的all-res 全完事了',res);
},(err)=>{
  console.log('自己的all-err',err);
})

