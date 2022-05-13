/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
	// 动态规划
	// let leng = nums.length;
	// if (!leng) return 0;

	// let dp = Array(leng).fill(1);

	// for (let i = 0; i < leng; i++) {
	// 	for (let j = 0; j < i; j++) {
	// 		if (nums[i] > nums[j]) {
	// 			dp[i] = Math.max(dp[i], dp[j] + 1)
	// 		}
	// 	}
	// }
	// console.log(dp, 'dp');
	// return Math.max(...dp);


	// 二分查找
	let leng = nums.length;
	if (leng <= 1) return leng;

	let tail = [nums[0]];
	for (let i = 0; i < leng; i++) {
		if (nums[i] > tail[tail.length - 1]) {
			// 当nums中的元素比tail中的最后一个大,直接push
			tail.push(nums[i])
		} else {
			// 二分查找+贪心
			let left = 0;
			let right = tail.length - 1;
			while (left < right) {

				// 取中间值 向右移动1位
				let mid = (left + right) >> 1;
				//当前找的值小于 nums[i]目标值更新left
				if (tail[mid] < nums[i]) {
					left = mid + 1;
				} else {
					right = mid;
				}
			}
			tail[left] = nums[i];
		}
	}
	return tail.length;
};
// @lc code=end

