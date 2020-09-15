/**
 * 121. 买卖股票的最佳时机
 * @param {number[]} prices
 * @return {number}
 */

// 自己实现 80ms 空间使用更少
var maxProfit = function (prices) {
  let max = 0;
  let min = prices[0];
  for (let i = 1; i < prices.length; i++) {
    min = Math.min(prices[i], min);
    max = Math.max(max, prices[i] - min);
    //    minArr[]
  }
  return max;
};
