/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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

//递归
// var minDepth = function (root) {
// 	if (root === null) return 0;

// 	if (root.left === null && root.right === null) {
// 		return 1;
// 	}

// 	if (!root.left) {
// 		return 1 + minDepth(root.right);
// 	}

// 	if (!root.right) {
// 		return 1 + minDepth(root.left);
// 	}

// 	return Math.min(minDepth(root.left), minDepth(root.right)) + 1
// };


// 迭代
var minDepth = function (root) {
	if (root === null) return 0;

	if (root.left === null && root.right === null) {
		return 1;
	}

	const stack = [root]
	let dep = 0; // 计算树的深度

	while (true) {
		dep++;
		let size = stack.length;

		while (size--) {
			let node = stack.shift();

			if (!node.left && !node.right) {
				return dep
			}
			node.left && stack.push(node.left)
			node.right && stack.push(node.right)
		}
	}
}
// @lc code=end

