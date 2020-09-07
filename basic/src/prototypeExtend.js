/**
 
原型继承
 */
function Sup() {
  this.supProp = "Super property";
}
Sup.prototype.showSupProperty = function () {
  console.log(this.supProp);
};

function Sub() {
  this.subProp = "Sub property";
}
// 子类型的原型为父类型的一个实例对象
Sub.prototype = new Sup();
// 让子类型的原型的构造函数指向子类型的 Sub函数
/**
为什么要重新修复这个构造函数的指向呢?
防止别人查看constructor得到错误信息，主要就是这个
 */
Sub.prototype.constructor = Sub;
Sub.prototype.showSubProperty = function () {
  console.log(this.subProp);
};
var sub = new Sub();
sub.otherFunc = function () {};
// sub.showSupProperty();
// sub.showSubProperty();

console.log(sub instanceof Sub);
/**
 这里的构造函数打印出的是Sup
 原因是构造函数在prototype里面而Sub的prototype是new Sup();
 于是找到了Sup的构造函数
 */
// console.log(sub.constructor);
