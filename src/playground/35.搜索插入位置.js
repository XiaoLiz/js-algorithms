/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
	let left = 0;
	let right = nums.length - 1;

	while (left <= right) {
		let middle = left + ((right - left) >> 1);

		if (nums[middle] < target) {
			left = middle + 1;
		} else if (nums[middle] > target) {
			right = middle - 1;
		} else {
			return middle
		}
	}

	return right + 1;
};
// @lc code=end

