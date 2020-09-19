/**
 * let const var
 */

/**
 *  let
 *  1.在块级作用域有效
 *  2.不能重复定义
 *  3,不预处理(变量提升的过程 ),不会变量提升(注意:预处理后可能会变成var)
 */

// console.log(username);
// console.log(a);
// let a = 123;
let btns = document.getElementsByClassName("item");
console.log(btns);
// 如果使用var alert 都是3 是因为 i是全局的,里面的i都是指向window的i
// 但是let 有自己的块级作用域,所以每循环一次都会把i保存在自己的块上下文中
for (let i = 0; i < btns.length; i++) {
  btns[i].onclick = function () {
    alert(i);
  };
}

// 块级作用域相关

function fun() {
  if (false) {
    let a = 123;
  }
  // console.log(a);  这里是访问不到的
}
fun();

const arr = [1, 2, 3, 4];
for (var i = 0; i < 4; i++) {
  console.log(arr[i]);
}

/**
 * const
 * 1.不可修改
 * 2.其他和let相同
 */
