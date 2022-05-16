/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
	let prev = null;
	let curr = head;
	let next = head;

	for (let i = 1; i < left; i++) {
		prev = curr;
		curr = curr.next;
	}

	let prev2 = prev;
	let curr2 = curr;
	for (let i = left; i <= right; i++) {
		let next = curr.next;
		curr.next = prev;
		prev = curr;
		curr = next;
	}

	if (prev2 !== null) {
		prev2.next = prev;
	} else {
		head = prev
	}

	curr2.next = curr;
	return head


	// let dummyNode = {
	// 	next: head
	// }

	// let pre = dummyNode;
	// // 第1步：从虚拟头节点走 left - 1 步，来到 left 节点的前一个节点
	// for (let i = 0; i < left - 1; i++) {
	// 	pre = pre.next;
	// }

	// // 第2步：从pre再走right-left + 1，到right节点
	// let rightNode = pre;
	// for (let i = 0; i < right - left + 1; i++) {
	// 	rightNode = rightNode.next;
	// }

	// // 第 3 步：切断出一个子链表（截取链表）
	// let leftNode = pre.next
	// let curr = rightNode.next; //right最后一个节点

	// // 切断
	// pre.next = null;
	// rightNode.next = null;

	// // 反转
	// reverseLinkedList(leftNode)

	// pre.next = rightNode;
	// leftNode.next = curr
	// return dummyNode.next;
};

const reverseLinkedList = (head) => {
	console.log(head, 'head')
	let pre = null;
	let cur = head;

	while (cur) {
		const next = cur.next;
		cur.next = pre;
		pre = cur;
		cur = next;
	}
}
// @lc code=end

