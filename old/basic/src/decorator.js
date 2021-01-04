@log("hello")
class myClass {}

function log(text) {
  return function (target) {
    target.prototype.logger = () => `${text} ${target.name} 被调用`;
  };
}

const test = new myClass();
console.log(test.logger());

function a() {
  return function (c) {
    console.log(c);
  };
}

a()("hhhh ");
