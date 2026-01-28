// /** 
//  //! 检查是否是类的对象实例
//  //! https://github.com/doocs/leetcode/blob/main/solution/2600-2699/2618.Check%20if%20Object%20Instance%20of%20Class/README.md 
// */
// function checkIfInstance(obj, Constructor){
//   if(Constructor == null || Constructor === undefined){
//     return false;
//   }
//   while(obj){
//     const proto = Object.getPrototypeOf(obj);
//     if(proto === Constructor.prototype) return true;
//     obj = proto;
//   }
//   return false;
// }

// let func = () => checkIfInstance(new Date(), Date)
// console.log('func()1:',func());
// func = () => { class Animal {}; class Dog extends Animal {}; return checkIfInstance(new Dog(), Animal); }
// console.log('func()2:',func());
// func = () => checkIfInstance(Date, Date)
// console.log('func()3:',func());
// func = () => checkIfInstance(5, Number)
// console.log('func()4:',func());

// /** 
//  //! 数组原型对象的最后一个元素
//  //! https://github.com/doocs/leetcode/blob/main/solution/2600-2699/2619.Array%20Prototype%20Last/README.md
// */
// Array.prototype.last = function(){
//   // return this.length? this[this.length-1] :-1;
//   return this.length? this.at(-1) :-1;
// }

// let nums = [null, {}, 3]
// console.log('nums.last()',nums.last());
// nums = []
// console.log('nums.last()',nums.last());

// /** 
//  //! 计数器
//  //! https://github.com/doocs/leetcode/blob/main/solution/2600-2699/2620.Counter/README.md
// */
// function createCounter(n){
//   let i = n;
//   return function () {
//       return i++;
//   };
// }
// const counter = createCounter(10)
// console.log(counter())
// console.log(counter())
// console.log(counter())

// /** 
//  //! 睡眠函数
//  //! https://github.com/doocs/leetcode/blob/main/solution/2600-2699/2621.Sleep/README.md
// */
// function sleep(millis){
//   return new Promise(resolve => setTimeout(resolve, millis));
// }
// let t = Date.now();
// sleep(100).then(() => {
//   console.log(Date.now() - t); // 100
// });

/** 
 //! 有时间限制的缓存
 //! https://github.com/doocs/leetcode/blob/main/solution/2600-2699/2622.Cache%20With%20Time%20Limit/README.md
*/
class TimeLimitedCache{
  #cache = new Map()

  set(key, value, duration){
    
  }
  get(key){
    const value = #cache.get(key);
    return value;
  }
  count(){
    return #cache.size();
  }
}