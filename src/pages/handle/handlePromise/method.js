const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class MyPromise {
  #state = PENDING;
  #result = undefined;
  #thenables = [];

  constructor(excute){
    const resolve = (val)=>{
      this.#changeState(FULFILLED,val)
    }
    const reject = (err)=>{
      this.#changeState(REJECTED,err)
    }

    try {
      excute(resolve, reject)
    } catch (error) {
      this.#changeState(REJECTED,error)
    }
  }

  #changeState(state,result){
    if(this.#state !== PENDING) return;
    this.#state = state;
    this.#result = result;
    // console.log(this.#state,this.#result);
    this.#run()
  }

  #handleCallback(callback,resolve,reject){
    if(typeof callback !== 'function'){
      // 状态穿透
      queueMicrotask(()=>{
        if(this.#state === FULFILLED){
          resolve(this.#result);
        }else{
          reject(this.#result);
        }
      })
      return;
    }
    queueMicrotask(()=>{
      try {
        const data = callback(this.#result);
        resolve(data);
      } catch (error) {
        reject(error);
      }
    })
  }

  #run(){
    if(this.#state === PENDING) return;
    // console.log('run,run,run',this.#state,this.#thenables);
    while (this.#thenables.length) {
      // console.log('this.#thenables',this.#thenables);
      const {onFulfilled,onRejected,resolve,reject} = this.#thenables.shift()
      if(this.#state === FULFILLED){
        this.#handleCallback(onFulfilled,resolve,reject);
      }else{
        this.#handleCallback(onRejected,resolve,reject);
      }
    }
    
  }

  then(onFulfilled,onRejected){
    return new MyPromise((resolve,reject)=>{
      this.#thenables.push({
        onFulfilled,
        onRejected,
        resolve,
        reject,
      })
      this.#run()
    })
  }
}

function isPromiseLike(val){
  return val && typeof val === 'object' && typeof val.then === 'function'
}

MyPromise.prototype.catch = function (onRejected){
  return this.then(undefined, onRejected)
}

MyPromise.prototype.finally = function (onFinally){
  return this.then((data)=>{
    onFinally(data);
    return data;
  },(err)=>{
    onFinally(err);
    throw err;
  })
}

MyPromise.resolve = function (value){
  if (value instanceof MyPromise) return value;
  if(isPromiseLike(value)){
    return new MyPromise((resolve, reject) => {
      value.then(resolve, reject)
    })
  }
  return new MyPromise((resolve) => resolve(value))
}

MyPromise.reject = function (err){
  return new MyPromise((resolve, reject) => {
    reject(err)
  })
}

export {
  MyPromise
}

// const p = new MyPromise((resolve , reject)=>{
//   setTimeout(()=>{
//     resolve('change')
//     reject('failed')
//   },2000)
// })