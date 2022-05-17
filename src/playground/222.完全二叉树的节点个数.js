/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
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
var countNodes = function (root) {
	if (root === null) return 0;

	let nodeLeft = countNodes(root.left);
	let nodeRight = countNodes(root.right);
	console.log(nodeLeft, 'nodeLeft');
	console.log(nodeRight, 'nodeRight');

	return nodeLeft + nodeRight + 1;
}

// var countNodes = function (root) {
// 	let res = 0;
// 	function dfs(root) {
// 		if (root == null) return;
// 		res++;
// 		dfs(root.left)
// 		dfs(root.right)
// 	}

// 	dfs(root);
// 	return res
// };
// @lc code=end

