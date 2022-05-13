/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换 
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
	if (!amount) return 0;

	let dp = Array(amount + 1).fill(Infinity);
	dp[0] = 0;

	for (let i = 0; i < coins.length; i++) {
		for (let j = coins[i]; j <= amount; j++) {
			dp[j] = Math.min(dp[j - coins[i]] + 1, dp[j])
		}
	};
	return dp[amount] === Infinity ? -1 : dp[amount];


	// 状态方程
	//dp[i] = dp[i - coin] + 1

	// coins = [1, 2, 5], amount = 5
	// x = 5
	//dp(i) = Math.min(dp(5-1), dp(5-2), dp(5-5)) + 1
	//dp(5) =>  minx: 0 + 1  = 1




};
// @lc code=end

