/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
	// 暴力破解
	// return nums.map(v => v * v).sort((a, b) => a - b);

	// 双指针
	let left = 0;
	let right = nums.length - 1;
	let arr = Array(nums.length);
	let k = right;

	while (left <= right) {
		let l = left * left;
		let r = right * right;

		if (l > r) {
			arr[k] = l;
			left++;
		} else {
			arr[k] = r;
			right--
		}
		k--;
	}

	return arr;
};
// @lc code=end

