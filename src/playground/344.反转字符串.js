/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
	// 暴力解决 不符合题意
	// return s.reverse().join('')

	// 双指针
	let left = 0;
	let right = s.length - 1;

	while (left <= right) {
		// let temp = s[left];
		// s[left] = s[right]
		// s[right] = temp;
		[s[left], s[right]] = [s[right], s[left]]
		left++;
		right--;
	}
	return s;
};
// @lc code=end

