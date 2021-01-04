/**
 * 66. 加一
 * @param {number[]} digits
 * @return {number[]}
 */
// 这个是自己实现的方法
var plusOne = function (digits) {
  const len = digits.length;
  digits[len - 1]++;
  for (let i = len - 1; i >= 0; i--) {
    if (digits[i] >= 10) {
      // 判断存不存在 digits[i-1]
      if (digits[i - 1] === undefined) {
        digits.unshift(1);
        digits[i + 1] = 0;
      } else {
        digits[i - 1]++;
        digits[i] = 0;
      }
    }
  }
  return digits;
};

// 这个利用了规律
var plusOne = function (digits) {
  const len = digits.length;
  // digits[len-1]++;
  for (let i = len - 1; i >= 0; i--) {
    if (digits[i] !== 9) {
      digits[i]++;
      return digits;
    } else {
      digits[i] = 0;
    }
  }
  return [1, ...digits];
};
