/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
	let left = 0;
	let right = nums.length - 1;
	if (!nums.length) return -1;

	while (left <= right) {
		let middle = left + ((right - left) >> 1); //不整除的情况
		if (nums[middle] < target) {
			left = middle + 1;
		} else if (nums[middle] > target) {
			right = middle - 1;
		} else {
			return middle;
		}
	}
	return -1;
};
// @lc code=end

