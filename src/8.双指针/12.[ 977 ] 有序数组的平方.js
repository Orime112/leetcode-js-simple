/**
 * * 题目名称：有序数组的平方
 * * 题目地址：https://leetcode-cn.com/problems/squares-of-a-sorted-array
给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。

示例 1：

输入：nums = [-4,-1,0,3,10]
输出：[0,1,9,16,100]
解释：平方后，数组变为 [16,1,0,9,100]
排序后，数组变为 [0,1,9,16,100]
示例 2：

输入：nums = [-7,-3,2,3,11]
输出：[4,9,9,49,121]
 

提示：

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums 已按 非递减顺序 排序
 

 */

// * 思路：先算平方再排序

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  const squareNums = nums.map(item => item ** 2)
  return squareNums.sort((a, b) => a - b)
};

// 测试用例
let test = [-4, -1, 0, 3, 10]

console.time('执行用时');
console.log(sortedSquares(test));
console.timeEnd('执行用时');