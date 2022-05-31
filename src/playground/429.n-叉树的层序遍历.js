/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N 叉树的层序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
	let ret = [];
	if (root === null) return ret;

	let queue = [root];
	while (queue.length) {
		let len = queue.length;
		let currlevel = [];

		for (let i = 0; i < len; i++) {
			let node = queue.shift();
			currlevel.push(node.val);

			node.children.forEach(child => {
				queue.push(child)
			});
		}
		ret.push(currlevel);
	};

	return ret;
};
// @lc code=end

