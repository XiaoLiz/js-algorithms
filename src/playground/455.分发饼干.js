/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
	g.sort((a, b) => a - b);
	s.sort((a, b) => a - b);

	let ret = 0;
	let index = s.length - 1;
	for (let i = g.length - 1; i >= 0; i--) {
		console.log(s[index], index, 's[index]')
		console.log(g[i], i, 'g[i]')
		if (index >= 0 && s[index] >= g[i]) {
			ret++;
			index--;
		}
	}

	return ret
};
// @lc code=end

