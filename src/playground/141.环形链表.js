/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 * @return {boolean}
 */
var hasCycle = function(head) {
    // 迭代
    // let res = [];
    // while(head) {
    //     if(res.includes(head)){
    //         return true;
    //     }

    //     res.push(head)
    //     head = head.next;
    // }
    // return false;

    //快慢指针
    let slow = head;
    let fast = head;
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if(slow === fast) return true;
    }
    return false;

};
// @lc code=end

