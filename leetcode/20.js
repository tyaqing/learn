/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let mapping = new Map();
  mapping.set("(", ")").set("[", "]").set("{", "}");
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (mapping.has(s[i])) {
      stack.push(mapping.get(s[i]));
    } else {
      if (stack.pop() !== s[i]) return false;
    }
  }
  if (stack.length != 0) return false;
  return true;
};
