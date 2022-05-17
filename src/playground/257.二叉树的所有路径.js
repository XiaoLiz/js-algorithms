/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
	let arr = [];
	function dfs(root, path) {
		if (root == null) return [];
		if (root.left === null && root.right === null) {
			arr.push(path + root.val);
		};

		dfs(root.left, path + root.val + '->');
		dfs(root.right, path + root.val + '->');
	}
	dfs(root, '');
	return arr;
};
// @lc code=end

