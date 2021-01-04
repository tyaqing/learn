function identity<T>(str: T): T {
  return str;
}

identity<string>("name");

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

let ob = { a: 1, b: 2, c: 3 };

getProperty(ob, "b");
