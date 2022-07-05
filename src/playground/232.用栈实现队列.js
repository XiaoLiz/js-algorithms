/*
 * @lc app=leetcode.cn id=232 lang=javascript
 *
 * [232] 用栈实现队列
 */

// @lc code=start

var MyQueue = function () {
	this.stack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
	this.stack.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
	if (this.stack.length) {
		return this.stack.shift();
	}
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
	if (this.stack.length) {
		return this.stack[0];
	}
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
	if (!this.stack.length) {
		return true
	}
	return false
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

