function a() {
  function b() {
    var b = 234;
  }

  var a = 123;

  b();
}
console.log(a);
var glob = 100;
a();
