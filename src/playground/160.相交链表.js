/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
	if (headA == null || headA == null) {
		return null
	}

	let nodeA = headA;
	let nodeB = headB;

	while (nodeA != nodeB) {

		if (nodeA == null) {
			nodeA = headB;
		} else {
			nodeA = nodeA.next;

		}
		if (nodeB == null) {
			nodeB = headA;
		} else {
			nodeB = nodeB.next;
		}
	}

	return nodeA;
};
// @lc code=end

