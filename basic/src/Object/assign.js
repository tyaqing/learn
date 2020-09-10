/**
 * 实现对象拷贝(浅拷贝)
 * 深拷贝可以参考lodash的 deepColon
 */

let user = {
  name: "admin",
};

let permisionA = {
  read: true,
};

let permisionB = {
  write: false,
};

Object.assign(user, permisionA, permisionB);

console.log(user);
