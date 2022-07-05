/*
 * @lc app=leetcode.cn id=380 lang=javascript
 *
 * [380] O(1) 时间插入、删除和获取随机元素
 */

// @lc code=start

var RandomizedSet = function() {
    this.list = []
    this.map = {}
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(val in this.map) {
        return false
    }
    this.list.push(val)
    this.map[val] = this.list.length - 1;
    return true
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (val in this.map) {
        const index = this.map[val]
        const last = this.list[this.list.length-1];

        this.list[index] = last;
        this.map[last] = index;

        delete this.map[val]
        this.list.pop()
        return true
    }

    return false
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const index = Math.floor(Math.random()*this.list.length)
    return this.list[index]
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
// @lc code=end

