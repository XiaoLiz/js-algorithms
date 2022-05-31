/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
var isValidBST = function (root) {
	let prev = -Infinity;

	function dfs(node) {
		if (node == null) return true;

		let left = dfs(node.left);
		if (prev >= node.val) {
			return false;
		}
		prev = node.val;

		let right = dfs(node.right);
		return left && right;
	}

	return dfs(root);
};
// @lc code=end

