/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
	let ret = false;
	if (root === null) return ret;

	let queue = [root];
	let queueVal = [root.val];

	while (queue.length) {
		let node = queue.shift();
		let temp = queueVal.shift();

		if (!node.left && !node.right) {
			if (temp === targetSum) {
				return true;
			}
		}
		if (node.left) {
			queue.push(node.left);
			queueVal.push(node.left.val + temp);
		}

		if (node.right) {
			queue.push(node.right);
			queueVal.push(node.right.val + temp);
		}
	}

	return false;
};
// @lc code=end

