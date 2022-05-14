/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// 思考推演 方式1
// 原数据 [0,1,0,3,12]
// [1,0,0,3,12]
// [1,3,0,0,12]
// [1,3,12,0,0]

// 思考推演 方式2
// k慢指针, 两次循环 
// 时间复杂度 O(n) 
// 空间复杂度 O(1)
// 原数据 [0,1,0,3,12]

//第一次循环
// [1,1,0,3,12] k=1
// [1,3,0,3,12] k=2
// [1,3,12,3,12] k=3

//第二次循环
// [1,3,12,0,12] k=3 nums[3] = 0
// [1,3,12,0,0] k=4 nums[4] = 0

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
	if (!nums.length) return;

	let k = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] != 0) {
			nums[k++] = nums[i]
		}
	}
	for (let i = k; i < nums.length; i++) {
		nums[i] = 0
	}
	return nums;
};
// @lc code=end

