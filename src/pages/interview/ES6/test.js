// /**
//  * Generator  执行 Generator 函数会返回一个遍历器对象，可以依次遍历 Generator 函数内部的每一个状态
//  */
// function* helloWorldGenerator() {
//   yield 'hello';
//   yield 'world';
//   return 'ending';
// }
// var hw = helloWorldGenerator();

// console.log(hw.next());
// // { value: 'hello', done: false }

// console.log(hw.next());
// // { value: 'world', done: false }

// console.log(hw.next());
// // { value: 'ending', done: true }

// console.log(hw.next());
// // // { value: undefined, done: true }

// for (let v of helloWorldGenerator()) {
//   console.log(v);
// }

// let jane = { first: 'Jane', last: 'Doe' };

// function* objectEntries(obj) {
//   let propKeys = Reflect.ownKeys(obj);

//   for (let propKey of propKeys) {
//     yield [propKey, obj[propKey]];
//   }
// }

// console.log('Object.entries(jane)',Object.entries(jane));
// for (let [key, value] of objectEntries(jane)) {
//   console.log(`${key}: ${value}`);
// }
/** ----------------------------------------------------------------------------------------------------------------------------- */
/**
 * Proxy    修改的是程序默认形为，就形同于在编程语言层面上做修改，属于元编程(meta programming)
 */

// // const target = Object.defineProperties({}, {
// //   foo: {
// //     value: 123,
// //     writable: false,
// //     configurable: false
// //   },
// // });
// const target = {
//   foo: 123,
// }

// const handler = {
//   get(target, propKey) {
//     console.log('target',target);
//     console.log('propKey',propKey);
//     return 'abc';
//   }
// };

// const proxy = new Proxy(target, handler);

// console.log('proxy.foo',proxy.foo);
// // TypeError: Invariant check failed

// let validator = {
//   set: function(obj, prop, value) {
//     if (prop === 'age') {
//       if (!Number.isInteger(value)) {
//         throw new TypeError('The age is not an integer');
//       }
//       if (value > 200) {
//         throw new RangeError('The age seems invalid');
//       }
//     }

//     // 对于满足条件的 age 属性以及其他属性，直接保存
//     obj[prop] = value;
//   }
// };

// let person = new Proxy({}, validator);

// person.age = 100;

// person.age // 100
// person.age = 'young' // 报错
// person.age = 300 // 报错

const queuedObservers = new Set();

const observe = fn => queuedObservers.add(fn);
const observable = obj => new Proxy(obj, {set});

function set(target, key, value, receiver) {
  const result = Reflect.set(target, key, value, receiver);
  queuedObservers.forEach(observer => observer());
  console.log('result',result);
  return result;
}

const obj = {
  foo: 123,
}
observe(()=>{
  console.log('obj changed');
})

const o = observable(obj);

console.log('o.foo',o.foo);
o.foo = 'abc'
console.log('o.foo',o.foo);