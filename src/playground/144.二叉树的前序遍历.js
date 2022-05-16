/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
	// 递归
	// let arr = [];
	// function dfs(root) {
	// 	if (root == null) return;

	// 	arr.push(root.val);
	// 	dfs(root.left);
	// 	dfs(root.right);
	// }
	// dfs(root);
	// return arr;

	// 栈 + 迭代
	let stack = [];
	let arr = [];
	if (root == null) return arr;

	stack.push(root);
	while (stack.length) {
		let node = stack.pop();
		if (node) {
			arr.push(node.val);
		} else {
			continue;
		}
		stack.push(node.right);
		stack.push(node.left);
	}
	return arr
};
// @lc code=end

