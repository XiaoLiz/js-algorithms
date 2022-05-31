/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 * 0、1、1、2、3、5、8、13、21、34
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

// 备忘录 递归
function helper(memo, n) {
	if (n <= 1) {
		return n
	}

	if (memo[n]) return memo[n];

	memo[n] = helper(memo, n - 1) + helper(memo, n - 2)
	return memo[n];
}

var fib = function (n) {
	if (n <= 1) {
		return n
	};

	// 暴力递归
	// return fib(n - 1) + fib(n - 2);

	// 备忘录 递归
	// let memo = []
	// return helper(memo, n);

	// 动态规划
	// let dp = [0, 1];
	// for (let i = 2; i <= n; i++) {
	// 	dp[i] = dp[i - 1] + dp[i - 2];
	// 	// dp[4] = 5
	// }
	// return dp[n];

	let prev = 0;
	let cur = 1;
	for (let i = 2; i <= n; i++) {
		sum = prev + cur;
		prev = cur;
		cur = sum
	}

	return cur;
};
// @lc code=end

