var foo = {
  value: 1,
};

// function bar() {
//   console.log(this.value);
// }

// 返回了一个函数
var bindFoo = bar.bind(foo);

// bindFoo(); // 1

Function.prototype.bind2 = function (context) {
  let self = this;
  return function () {
    return self.call(context);
  };
};

function bar(name, age) {
  console.log(this.value);
  console.log(name);
  console.log(age);
}

var test = bar.bind(foo, "bob");
// test(28);

Function.prototype.bind3 = function (context) {
  let self = this;

  let args = Array.prototype.slice.call(arguments, 1);
  return function () {
    var bindArgs = Array.prototype.slice.call(arguments);
    return self.apply(context, args.concat(bindArgs));
  };
};

var test = bar.bind3(foo, "bob");
test(28);
