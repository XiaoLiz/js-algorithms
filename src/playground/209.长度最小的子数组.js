/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
	let len = nums.length;
	let left = right = 0;
	let sum = 0;
	let res = len + 1;

	while (right < len) {
		sum += nums[right++];
		while (sum >= target) {
			res = res < right - left ? res : right - left;
			sum -= nums[left++];
		}
	}
	return res > len ? 0 : res;
};
// @lc code=end

