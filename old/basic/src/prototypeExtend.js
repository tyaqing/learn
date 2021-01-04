/**
 
原型继承
 */
function Parent() {
  this.ParentProp = "Parenter property";
}
Parent.prototype.showParentProperty = function () {
  console.log(this.ParentProp);
};

function children() {
  this.childrenProp = "children property";
}
// 子类型的原型为父类型的一个实例对象
children.prototype = new Sup();
// 让子类型的原型的构造函数指向子类型的 children函数
/**
为什么要重新修复这个构造函数的指向呢?
防止别人查看constructor得到错误信息，主要就是这个
 */
children.prototype.constructor = children;
children.prototype.showchildrenProperty = function () {
  console.log(this.childrenProp);
};
var children = new children();
children.otherFunc = function () {};
// children.showSupProperty();
// children.showchildrenProperty();

console.log(children instanceof children);
/**
 这里的构造函数打印出的是Sup
 原因是构造函数在prototype里面而children的prototype是new Sup();
 于是找到了Sup的构造函数
 */
// console.log(children.constructor);
