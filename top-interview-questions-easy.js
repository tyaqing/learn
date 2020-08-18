


/**
 * @param {number[]} prices
 * @return {number}
 * 
 */

// TODO

var maxProfit = function (prices) {
    let l = 0, r = 1;
    // 利润值
    let gain = 0, max_gain = 0, gain_total = 0;
    while (l < prices.length) {
        //这里遍历第一次
        while (r < prices.length) {
            gain = prices[r] - prices[l];
            console.log(`gian is ${gain}`)
            if (max_gain < gain) {
                max_gain = gain;
                // l = r + 1;
                // r += 2;
                break;
            }
            r++;
        }
        console.log(`max gian is ${max_gain}`)
        r = 0;
        l++;
        gain_total += max_gain;
        max_gain = 0;
    }
    return gain_total;
};

let a = maxProfit([7, 1, 5, 3, 6, 4]);
console.log(`总盈利为${a}元`)