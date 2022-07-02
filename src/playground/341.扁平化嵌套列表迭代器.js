/*
 * @lc app=leetcode.cn id=341 lang=javascript
 *
 * [341] 扁平化嵌套列表迭代器
 */

// @lc code=start
/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function(nestedList) {
	this.ret = []
    const dfs = (nestedList) => {
		for (let i = 0; i < nestedList.length; i++) {
			if(nestedList[i].isInteger()) {
				this.ret.push(nestedList[i].getInteger())
			} else {
				dfs(nestedList[i].getList())
			}
		}
	}
	dfs(nestedList)
};


/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function() {
    return this.ret.length > 0
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function() {
   	return this.ret.shift()

   	// const val = this.ret[0];
   	// this.ret = this.ret.slice(1);
	// return val;
};

function flatArray(arr) {
	const stack = [arr]
	const ret = []

	while(stack.length) {
		let next = stack.pop()
		if(Array.isArray(next)) {
			stack.push(...next)
		} else {
			ret.push(next)
		}
	}

	return ret
}

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
*/
// @lc code=end

