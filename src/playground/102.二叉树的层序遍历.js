/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
	let ret = [];
	if (root == null) return ret;

	let queue = [root];
	while (queue.length) {
		let len = queue.length;
		let currLevel = []; //每一层级数据

		for (let i = 0; i < len; i++) {
			let node = queue.shift() // 弹出当前节点
			currLevel.push(node.val);

			node.left && queue.push(node.left);
			node.right && queue.push(node.right);
		}

		ret.push(currLevel)
	}

	return ret;
};
// @lc code=end

