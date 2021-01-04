/**
借用构造函数继承
 */

function Person(name, age) {
  this.name = name;
  this.age = age;
  // this.getName = () => {};
}
Person.prototype.setName = function (name) {
  this.name = name;
};

function Student(name, age, price) {
  /**
  相当于this.Persion(name,age);
  意思是Person这个函数在这里执行,而执行上下文是这里的this 
  但是这里没有继承关系,通过call调用父类型的构造函数,获得了属性
  仅仅只减少了代码
  */
  Person.call(this, name, age);
  this.price = price;
}
// 为了能看到父类型的方法
Student.prototype = new Person();
Student.prototype.constractor = Student;
Student.prototype.setPrice = function (price) {
  this.price = price;
};

let s = new Student("bob", 12, 222);
s.setName("Tome");
s.setPrice(16000);
console.log(s);

let s = new Date();
let s  = Math.random();

let p = new Person('good',123);
