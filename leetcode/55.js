/**
 * 55. 跳跃游戏
 */

// 递归思想 up-bottom

var canJump = function (nums) {
  let totalLength = nums.length;
  let memo = Array(totalLength).fill(0);
  memo[totalLength - 1] = 1;

  function jump(position) {
    if (memo[position] === 1) return true;
    else if (memo[position] === -1) return false;

    let maxJump = Math.min(totalLength - 1, position + nums[position]);
    for (let i = position + 1; i <= maxJump; i++) {
      let jumpResult = jump(i);
      if (jumpResult === true) {
        memo[position] = 1;
        return true;
      }
    }
    memo[position] = -1;
    return false;
  }
  return jump(0);
};
