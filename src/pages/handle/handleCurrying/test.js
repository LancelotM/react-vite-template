import { curry } from "./method.js";

let person = [{name: 'kevin'}, {name: 'daisy'}]
let prop = curry(function (key, obj) {
    return obj[key]
});
let name = person.map(prop('name'))
console.log('name',name);


let fn = curry(function(a, b, c) {
    return [a, b, c];
});

console.log(fn("a", "b", "c")) // ["a", "b", "c"]
console.log(fn("a", "b")("c")) // ["a", "b", "c"]
console.log(fn("a")("b")("c")) // ["a", "b", "c"]
console.log(fn("a")("b", "c")) // ["a", "b", "c"]

/**
 * ES6相关的
 */
const obj = {
  name:'ming',
  sayHi1:()=>{
    console.log(this.name);
  },
  sayHi2(){
    console.log(this.name);
  },
  sayHi3:function(){
    console.log(this.name);
  },
  sayHi4(){
    (()=>{
      console.log(this.name);
    })()
  },
}

obj.sayHi2()
obj.sayHi3()
obj.sayHi4()
// obj.sayHi1()