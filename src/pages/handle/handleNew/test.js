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

console.log('Parent.prototype.sayName()',Parent.prototype.sayName()); //undefined

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