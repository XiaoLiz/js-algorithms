/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str = x.toString();
    let arr = [];

    for (let i = 0; i < str.length; i++) {
        arr.push(str[i])
    }

    if (arr.join('') === str) {
        return true;
    }
};
// @lc code=end

