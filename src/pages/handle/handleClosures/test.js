/**
 * 在不改变代码的情况下改变obj中的值
 */
const a = (function(){
  let obj = {
    a:1,
    b:2,
  }
  // 防护措施
  // Object.setPrototypeOf(obj,null);
  //或者
  // const obj = Object.create(null);
  // obj.a = 1;
  // obj.b = 2;
  return {
    get:function (key) {
      return obj[key]
    }
  }
})()
console.log(a.get('a'));
/** 答案 */
// console.log(a.get('valueOf')()); //报错this指到了最近的window
Object.defineProperty(Object.prototype,'hack',{
  get(){
    return this;
  }
})
console.log(a.get('hack'));
const obj = a.get('hack');
obj.a = 100;
obj.b = 200;
console.log(a.get('hack'));