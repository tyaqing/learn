/* 
创建对象的方式
1. new Object();
  - 代码过多
2. {}大括号创建
  - 创建多个对象,代码有重复代码
3. 工厂模式 function cretePerson(){return obj}
  - 对象没有一个具体的类型,都是Object类型
4. 自定义构造函数
  - 每个对象都有相同的属性,浪费内存
5. 构造函数+原型模式

*/

function Person(name, age) {
  // 在构造函数中只定义一般函数
  this.name = name;
  this.age = age;
}

Person.prototype.setName = function (name) {
  this.name = name;
};

var p1 = new Person("bob", 123);

p1.setName("Tom");
console.log(p1);
