/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 * 深度优先遍历
 * - 状态： 每个节点标识求解问题的不同阶段
 * - 深度遍历回到上一节点重置算法成为 - 回溯 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

function backtrack(list, temp, nums) {
	if (temp.length === nums.length) {
		return list.push([...temp])
	}

	for (let i = 0; i < nums.length; i++) {
		if (temp.includes(nums[i])) {
			continue;
		}

		temp.push(nums[i]);
		backtrack(list, temp, nums);

		temp.pop();
	}
}

var permute = function (nums) {
	let list = [];
	backtrack(list, [], nums)

	return list
};
// @lc code=end

