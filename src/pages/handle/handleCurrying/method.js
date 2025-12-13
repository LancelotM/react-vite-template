/**
 * 实现柯里化
 * @param {*} fn 
 * @param  {...any} outerArgs 
 * @returns function
 */
const curry = (fn,...outerArgs)=>{
  return (...innerArgs) => {
    let allArgs = [...outerArgs,...innerArgs];
    if(allArgs.length < fn.length){
      return curry(fn,...allArgs)
    }
    return fn.apply(this,allArgs)
  }
}

export {
  curry,
}