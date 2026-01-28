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
console.log('child.__proto__',child.__proto__ === Parent.prototype)//true
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


function Parent1() {
  this.name = ["echo", "时间跳跃", "听风是风"];
};

Parent1.prototype.say = function() {
  console.log(this.name);
};

let parent = new Parent1();
function Child1() {};

Child1.prototype = parent;

let kid = new Child1();

function Son1() {
  Parent1.call(this);
};

let son = new Son1();
parent.name.push('二狗子');
son.name.push('狗剩');
kid.name.push('狗蛋');
console.log(parent.name);// [ 'echo', '时间跳跃', '听风是风', '二狗子', '狗蛋' ]
console.log(son.name);// [ 'echo', '时间跳跃', '听风是风', '狗剩' ]
console.log(kid.name);// [ 'echo', '时间跳跃', '听风是风', '二狗子', '狗蛋' ]
console.log('Child1.prototype:',Child1.prototype);// Parent1 { name: [ 'echo', '时间跳跃', '听风是风', '二狗子', '狗蛋' ] }
let parent1 = new Parent1();
let kid1 = new Child1();
console.log(parent1.name);// [ 'echo', '时间跳跃', '听风是风' ]
console.log(kid1.name);// [ 'echo', '时间跳跃', '听风是风', '二狗子', '狗蛋' ]

function Parent2(name) {
  this.name = name || "Adam";
};
Parent2.prototype.say = function () {
  console.log(this.name);
};
function Child2 (name) {
  // Parent2.apply(this,arguments);
  Parent2.call(this,...arguments);
};
let kid2 = new Child2('Patrick');
console.log(kid2)// Child2 { name: 'Patrick' }
console.log(kid2.name)// Patrick

/** var会穿透块级作用域 */
{
  var v = 10;
  let l = 20;
}
console.log(v); //10
// console.log(l); //报错没有被定义

let varArr = [];
for (var varIndex = 0; varIndex < 5; varIndex++) {
  varArr[varIndex] = function(){
    console.log(varIndex);
  }
}
console.log('varIndex2',varIndex2);// undefined
for (var varIndex2 = 0; varIndex2 < varArr.length; varIndex2++) {
  varArr[varIndex2]() //5个5
}
console.log('varIndex',varIndex);// 5
console.log('varIndex2',varIndex2);// 5

let letArr = [];
for (let letIndex = 0; letIndex < 5; letIndex++) {
  letArr[letIndex] = function(){
    console.log(letIndex);
  }
}
// console.log('letIndex2',letIndex2);// 报错没有被定义
for (let letIndex2 = 0; letIndex2 < letArr.length; letIndex2++) {
  letArr[letIndex2]() //5个5
}
// console.log('letIndex',letIndex);// 报错没有被定义
// console.log('letIndex2',letIndex2);// 报错没有被定义
/** var不能穿透函数作用域 */
function init() {
  var haha = "Mozilla"; // name 是 init 创建的局部变量
}
// console.log(haha) //报错没有被定义

/** */
let a = {n:1};
const obj1 = {a};
a= {n:2}; // 不会改变
// a.n++; // 会改变
console.log(obj1.a.n);