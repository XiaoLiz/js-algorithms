/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
	if (p === null && q === null) {
		return true
	}

	if (p === null || q === null) {
		return false
	}

	if (p.val !== q.val) {
		return false
	}

	return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};

//迭代
// var isSameTree = function (p, q) {
// 	if (p === null && q === null) {
// 		return true
// 	}

// 	if (p === null || q === null) {
// 		return false
// 	}

// 	let queueP = [p]
// 	let queueQ = [q]
// 	while (queueP.length && queueQ.length) {
// 		const nodeP = queueP.pop();
// 		const nodeQ = queueQ.pop();

// 		if (nodeP.val !== nodeQ.val) {
// 			return false;
// 		}

// 		if (nodeP.left && nodeQ.left) {
// 			queueP.push(nodeP.left)
// 			queueQ.push(nodeQ.left)
// 		} else if (nodeP.left || nodeQ.left) {
// 			return false;
// 		}

// 		if (nodeP.right && nodeQ.right) {
// 			queueP.push(nodeP.right)
// 			queueQ.push(nodeQ.right)
// 		} else if (nodeP.right || nodeQ.right) {
// 			return false;
// 		}

// 		return queueP.length === 0 && queueQ.length === 0;
// 	}
// };
// @lc code=end

