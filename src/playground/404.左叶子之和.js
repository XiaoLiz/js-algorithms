/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
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
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
	let leftSum = 0;

	function travse(root) {
		if (root == null) return leftSum;

		if (root.left && !root.left.left && !root.left.right) {
			leftSum += root.left.val;
		}

		travse(root.left);
		travse(root.right);
	}
	travse(root);

	return leftSum;
};
// @lc code=end

