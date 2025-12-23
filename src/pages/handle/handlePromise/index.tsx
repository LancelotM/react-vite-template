import { Box } from "@radix-ui/themes"
import { useEffect, useState } from "react"
import { MyPromise } from "./method";

export default ()=> {
  
  const [val,setVal] = useState('init');

  useEffect(()=>{
    const p = new MyPromise((resolve:Function , reject:Function)=>{
      // resolve(2)
      setTimeout(()=>{
        resolve('change')
        reject('failed')
      },2000)
    })

    // const p1 = p.then(123)

    p.then((result:any)=>{
      setVal(result)
      console.log('成功',result);
    },(result:any)=>{
      setVal(result)
      console.log('失败',result);
    })
    .catch((err:any) => {
      console.log('err',err);
    })

    // const p1 = p.then((result)=>{
    //   1123
    //   setVal(result)
    //   console.log('p.then-成功',result);
    // })
    // .catch((err) => {
    //   setVal(err)
    //   console.log('p.catch-失败',err);
    // })
    // .finally((finaRes)=>{
    //   console.log('p.finally-最后',finaRes);
    // })

    // setTimeout(() => {
    //   console.log('p',p);
    //   console.log('p1',p1);  
    // }, 0);

    // const p2 = new MyPromise(()=>{
    //   // setTimeout(() => {
    //     throw 123;
    //   // }, 0);
    // })
    // console.log('p2',p2);  

    // const p = MyPromise.resolve(11)
    // console.log(p instanceof MyPromise);
    // console.log(p);
    
    // const p1 = MyPromise.resolve(11)
    // const p2 = new MyPromise((resolve , reject)=>{
    //   resolve(p1)
    // })
    // console.log(p1);
    // console.log(p2);
  },[])

  return <Box>
    val:{val}
  </Box>
}