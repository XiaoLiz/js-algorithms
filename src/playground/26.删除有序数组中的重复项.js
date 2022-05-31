/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
	// 暴力破解 可以实现去重，不符合题目要求

	// 算法复杂度
	// 时间复杂度： O(n)
	// 空间复杂度： O(n)

	// if(!nums.length) return;
	// let arry = [];
	// for(let i = 0; i < nums.length; i++) {
	//     if(nums[arry.length-1] != nums[i]) {
	//         arry.push(nums[i]);
	//     } else {
	//         continue
	//     }
	// }
	// return arry.length;

	/**
	 * 双指针
	 * 算法复杂度
	 * 时间复杂度： O(n)
	 * 空间复杂度： O(1)
	*/

	// if (!nums.length) return 0;
	// let i = 1;   // 慢指针
	// //let j = 1; // 快指针
	// for (let j = 1; j < nums.length; j++) {
	// 	if (nums[j] != nums[i - 1]) {
	// 		nums[i] = nums[j]
	// 		i++;
	// 	}
	// }
	// return i;


	if (!nums.length) return 0;
	let fast = 0;
	let slow = 0;
	while (fast < nums.length) {
		if (nums[fast] != nums[slow - 1]) {
			nums[slow] = nums[fast]
			slow++;
		}
		fast++;
	}
	return slow;


};
// @lc code=end

