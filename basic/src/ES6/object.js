/**
 * Object.create()
 * 创建一个对象,该对象的隐式原型链指向第一个对象参数
 */
const obj = {
  name: "bob",
  age: 30,
};

const obj1 = Object.create(obj, {
  sex: {
    value: "男",
    writable: true, //可写
    configurable: true, //可删除
    enumerable: true, //可枚举
  },
});

obj1.sex = "女";

// obj1的隐式原型链是obj
console.log(obj1);

/**
 * Object.defineProperties
 * 方法直接在一个对象上定义新的属性或修改现有属性，并返回该对象。
 */

var obj2 = {
  name: "obo",
};

Object.defineProperties(obj2, {
  fullName: {
    get: function () {
      return this.name + ":Bob";
    },
    set: function (data) {
      this.name = data;
      console.log(this.fullName, data);
      // this.fullName = data;
    },
    // writable: true,
  },
});
console.log(obj2.fullName);
obj2.fullName = "asd";
console.log(obj2);

/**
 * 也可以直接在obj上使用set  get方法
 */

const obj3 = {
  firstName: "bob",
  lastName: "Smith",
  get fullName() {
    return this.firstName + " " + this.lastName;
  },
};
console.log(obj3.fullName);
