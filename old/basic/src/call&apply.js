// 这个是call函数最基本的用法,可以用来访问对方作用域的参数
const obj = {
  x: 2,
};

function fun(name, age) {
  console.log(name, age);
  console.log(this.x);
}

function fun2() {
  console.log(this.value);
}

// fun.call(obj);

/**
call() 方法使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数。

 */
// 首先来实现第一个版本的call2函数

Function.prototype.call2 = function (context) {
  context.fn = this;
  context.fn();
  delete context.fn;
  // console.log(this);
};

// fun.call2(obj);

//第二部实现带有call参数的call2函数

Function.prototype.call3 = function (context) {
  var context = context || window;
  context.fn = this;
  let args = [];
  for (var i = 1, len = arguments.length; i < len; i++) {
    args.push("arguments[" + i + "]");
  }
  // 因为args的参数数量不确定,需要eval去用字符串执行
  const result = eval("context.fn(" + args + ")");
  //这里 args 会自动调用 Array.toString() 这个方法。
  delete context.fn;
  return result;
};

// 这里需要注意的是,这里如果是ES6的规范,
// var let const 都不会将变量提升到window对象上面
// var value = 123;
// fun2.call3(null);
// console.log(window.value);

// apply 与call 的区别就在于call可以连续传参  call(obj,arg1,arg2,arg3)
// 而apply则是需要用数组传参 apply(obj,[arg1,arg2,arg3])
Function.prototype.apply2 = function (context, arr) {
  var context = context || window;
  context.fn = this;
  var result;
  if (arr) {
    let arrs = [];
    for (let i = 0, len = arr.length; i < len; i++) {
      arrs.push("arr[" + i + "]");
    }
    result = eval("context.fn(" + arrs + ")");
  } else {
    result = context.fn();
  }
  delete context.fn;
  return result;
};
fun.apply2(obj, ["kevin", 21]);

// 到这里完成
