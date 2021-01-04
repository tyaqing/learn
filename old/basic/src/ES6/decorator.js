/**
 * 装饰器的用法
 *
 */

// 可以完成对原型属性或方法的增加

// function f(isTestable) {
//   // 这个是个静态方法,并不会继承
//   return function (target) {
//     target.prototype.bbj = "321";
//     target.isTestable = isTestable;
//   };
// }

// @f(false)
// class MyClass {}

// let p = new MyClass();
// console.log(MyClass.isTestable);
// console.log("p.bbj", p.bbj);

// 装饰类

// function mixin(...list) {
//   return function (target) {
//     Object.assign(target.prototype, ...list);
//   };
// }

// const Fun = {
//   say: function () {
//     console.log("hhh");
//   },
// };

// @mixin(Fun)
// class newFun {}

// // newFun.say();
// let p = new newFun();
// p.say();

// 装饰方法
// function funDec(target, name, descriptor) {
//   console.log(arguments);
// }

// class MyClass {
//   @funDec
//   sayMe() {}
// }

// 打印方法
// class Math {
//   @log
//   add(a, b) {
//     return a + b;
//   }
// }

// function log(target, name, descriptor) {
//   let oldDescriptor = descriptor.value;
//   descriptor.value = function () {
//     // console.log("Calling with" + name, arguments);

//     return oldDescriptor.apply(this, arguments);
//   };
// }

// // log()(Math)

// const math = new Math();
// const result = math.add(1, 2);
// console.log(result);

function dec(id) {
  console.log("evaluated", id);
  return (target, property, descriptor) => {
    console.log("executed", id);
    // console.log("p", target);
  };
}

class Example {
  // @dec(1)
  // @dec(2)
  method() {}
}

// 可以用语法糖还原来解释装饰器函数的作用
dec(1)(dec(2)(Example));
