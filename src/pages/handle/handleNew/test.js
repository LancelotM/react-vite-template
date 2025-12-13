import { newMethod } from "./method.js";


// 构造器函数
const Parent = function (name, age) {
    this.name = name;
    this.age = age;
    this.sayName2 = ()=>{
      console.log('sayName2',this.name);
    };
    this.sayName3 = function(){
      console.log('sayName3',this.name);
    };
};
Parent.prototype.sayName = function () {
    console.log('sayName',this.name);
};

Parent.prototype.sayName() //undefined

//创建实例，将构造函数Parent与形参作为参数传入
const child = newMethod(Parent, 'echo', 26);
child.sayName() //'echo';
child.sayName2() //'echo';
child.sayName3() //'echo';

//最后检验，与使用new的效果相同
console.log(child instanceof Parent)//true
console.log(child.hasOwnProperty('name'))//true
console.log(child.hasOwnProperty('age'))//true
console.log(child.hasOwnProperty('sayName'))//false
console.log(child.hasOwnProperty('sayName2'))//true
console.log(child.hasOwnProperty('sayName3'))//true

/**
 * ES6相关的
 */
const obj = {
  name:'ming',
  sayHi1:()=>{ //箭头函数中this指向对象调用时的this，需要看运行环境
    console.log(this?this.name:undefined);
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

obj.sayHi2() //ming
obj.sayHi3() //ming
obj.sayHi4() //ming
obj.sayHi1() //''或者undefined