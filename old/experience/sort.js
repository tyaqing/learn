this.name = 123;

// sort('aoiucdde');
function sort(str) {
  str = str.split("");
  str.sort();
  return str.join("");
}

console.log(sort("aoiuasldkfjADASDWDQEWeeeeeetttcdde"));
