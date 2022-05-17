/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
var isBalanced = function (root) {
	function travese(root) {
		if (root === null) {
			return 0;
		}

		let leftDep = travese(root.left);
		if (leftDep == -1) return -1;

		let rightDep = travese(root.right);
		if (rightDep == -1) return -1;

		if (Math.abs(leftDep - rightDep) > 1) {
			return -1;
		}

		return Math.max(leftDep, rightDep) + 1;
	}

	return travese(root) !== -1;
}
// @lc code=end
