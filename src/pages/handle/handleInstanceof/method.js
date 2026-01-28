function myInstanceof1(obj, Constructor) {
  if (obj == null) return false;
  if (typeof Constructor !== 'function') {
    throw new TypeError('Right-hand side is not callable');
  }

  let proto = Object.getPrototypeOf(obj);
  const prototype = Constructor.prototype;

  while (proto) {
    if (proto === prototype) {
      return true;
    }
    proto = Object.getPrototypeOf(proto);
  }

  return false;
}


function myInstanceof2(left, right) {
    // 获取 right 的 prototype 对象
    let prototype = right.prototype;

    // 获取 left 的原型对象
    left = left.__proto__;

    // 不断循环查找 left 的原型链
    while (true) {
        // 如果查找到原型链的末尾，返回 false
        if (left === null) return false;

        // 如果在原型链中找到了 prototype，返回 true
        if (left === prototype) return true;

        // 继续沿着原型链向上查找
        left = left.__proto__;
    }
}