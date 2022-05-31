/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
	if (!nums.length) return 0;
	// let fast = 0;
	// let slow = 0;
	// while (fast < nums.length) {
	// 	if (val != nums[fast]) {
	// 		nums[slow] = nums[fast];
	// 		slow++;
	// 	}
	// 	fast++;
	// }
	// return slow;

	// i 慢指针 1 快指针
	let i = 0;   // 慢指针
	for (let j = 0; j < nums.length; j++) {
		if (val !== nums[j]) {
			nums[i++] = nums[j]
		}
	}
	return i;
};
// @lc code=end

