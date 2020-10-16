let bool: boolean = true;
let hexLiteral: number = 0b101;
let octalLiteral: number = 0o123;

let str: string = "Im string";
let tempstr: string = `${bool}+${hexLiteral}`;

let arr: number[] = [123, 33];
// let arr: Array<number> = [1, 2, 3];
enum Color {
  Blue,
  Green,
  Red,
}
let a: undefined = undefined;
let b: null | number = null;

let list: any[] = [123, 3213, 123, "asdkfjsk"];
function print(): void {
  console.log(list);
}

function showError(msg: string): never {
  // 报错或者无限循环
  throw Error("哈哈哈哈");
}
print();

let someStr: any = "asldkfjalsdkf";
let len: number = (someStr as string).length;

export default {};
