/*
 * @lc app=leetcode.cn id=109 lang=javascript
 *
 * [109] 有序链表转换二叉搜索树
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
	// 快慢指针
	if (head === null) {
		return null
	}
	if (head.next === null) {
		return new TreeNode(head.val)
	}

	let midNode = getMidNode(head);
	let root = new TreeNode(midNode.val)

	root.left = sortedListToBST(head);
	root.right = sortedListToBST(midNode.next);

	return root;
};
function getMidNode(head) {
	let pre = null;
	let slow = fast = head;

	while (fast && fast.next) {
		fast = fast.next.next;
		pre = slow;
		slow = slow.next;
	}
	if (pre) {
		pre.next = null;
	}

	return slow;
}
// @lc code=end

