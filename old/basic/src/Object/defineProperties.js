"use strict";
//属性标志和属性描述符

let user = {
  name: "bob",
};

Object.getOwnPropertyDescriptor;
// Object.getOwnPropertyDescriptors;
Object.defineProperties;
Object.defineProperty;
Object.getOwnPropertyDescriptor;

// 配套getOwnPropertyDescriptor一起使用

Object.defineProperty(user, "name", {
  // value: "tom",
  writable: false,
});
// const result = Object.getOwnPropertyDescriptor(user, "name");

user.name = "Tom";
// console.log(result);

//使属性变成不可配置是一条单行道。我们无法使用 defineProperty 把它改回去。
