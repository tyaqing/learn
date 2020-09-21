/**
 * 349. 两个数组的交集
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// 88ms
var intersection = function (nums1, nums2) {
  let res = [];
  let set = new Set();
  // 先给nums1去重
  for (const i of nums1) {
    set.add(i);
  }
  for (const i of nums2) {
    if (set.has(i)) {
      res.push(i);
      set.delete(i);
    }
  }
  return res;
};
