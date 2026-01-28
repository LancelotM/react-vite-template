/**
 * 实现柯里化
 * @param {*} fn 
 * @param  {...any} outerArgs 
 * @returns function
 */
const curry = (fn,...outerArgs)=>{
  return (...innerArgs) => {
    let allArgsArr = [...outerArgs,...innerArgs];
    if(allArgsArr.length < fn.length){
      return curry(fn,...allArgsArr)
    }
    return fn.apply(this,allArgsArr)
  }
}

export {
  curry,
}