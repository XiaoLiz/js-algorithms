/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 * 
 * 输入：
 * board = [
 * 	["A","B","C","E"],
 * 	["S","F","C","S"],
 * 	["A","D","E","E"]
 * ], 
 * word = "ABCCED"
 *  输出：true
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
	//终止条件
	if (!board.length) {
		return false;
	}
	if (!word.length) {
		return false;
	}

	// 循环查找
	let row = board.length;
	let col = board[0].length;

	for (let i = 0; i < row; i++) {
		for (let j = 0; j < col; j++) {
			const ret = find(i, j, 0)

			if (ret) {
				return ret
			};
		}
	}

	return false;

	// 递归函数
	function find(i, j, cur) {
		// 查找空间处理
		if (i >= row || i < 0) {
			return false;
		}
		if (j >= col || j < 0) {
			return false;
		}

		// 用来标识查找到的某一单词
		let letter = board[i][j];

		// 查询判断结束
		if (letter !== word[cur]) {
			return false;
		}
		if (cur === word.length - 1) {
			return true;
		}

		//匹配到的当前字母重置为null
		board[i][j] = null;

		//调用递归函数
		const ret = find(i + 1, j, cur + 1) ||
			find(i - 1, j, cur + 1) ||
			find(i, j + 1, cur + 1) ||
			find(i, j - 1, cur + 1);

		board[i][j] = letter //回撤

		return ret;
	}
};
// @lc code=end

