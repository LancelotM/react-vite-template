function asyncToGenerator(genFn) {
  return function () {
    return run(genFn);
  };
}

function run(generatorFn){
  return new Promise((resolve,reject)=>{
    const iterator = generatorFn();

    function step(nextFn, arg) {
      let result;
      try {
        result = nextFn.call(iterator, arg);
      } catch (err) {
        reject(err);
        return;
      }
      console.log('result',result);
      const { value, done } = result;
      if (done) {
        resolve(value);
      } else {
        // step(iterator.next, value);
        Promise.resolve(value).then(
          res => step(iterator.next, res),
          err => step(iterator.throw, err)
        );
      }
    }
    
    step(iterator.next);
  })
}

export {asyncToGenerator, run}