/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
	if (!nums.length) return null;

	let middle = Math.floor(nums.length / 2)
	console.log(middle, 'middle');
	console.log(nums, 'nums');

	let root = new TreeNode(nums[middle]);
	root.left = sortedArrayToBST(nums.slice(0, middle));
	root.right = sortedArrayToBST(nums.slice(middle + 1));

	return root;
};
// @lc code=end

