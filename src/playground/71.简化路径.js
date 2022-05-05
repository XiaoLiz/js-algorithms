/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const names = path.split('/');
    const stack = [];

    for (let item of names) {
        if(item === '..') {
            if(stack.length) {
                stack.pop();
            }
        } else {
            if(item.length && item !== '.') {
                stack.push(item)
            }
        }
    }

    return '/' + stack.join('/');
};
// @lc code=end

