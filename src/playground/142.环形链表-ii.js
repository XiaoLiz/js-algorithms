/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
	if (head == null) {
		return null;
	}

	let fast = head;
	let slow = head;
	let isCycle = false;
	// 判断是否有环
	while (fast.next != null && fast.next.next != null) {
		fast = fast.next.next;
		slow = slow.next;

		if (fast == slow) {
			isCycle = true;
			break;
		}
	}

	if (!isCycle) return null;

	slow = head;
	while (slow != fast) {
		slow = slow.next;
		fast = fast.next;
	}

	return fast;
};
// @lc code=end

