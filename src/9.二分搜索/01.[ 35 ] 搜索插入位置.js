/**
 * * 题目名称：搜索插入位置
 * * 题目地址：https://leetcode-cn.com/problems/search-insert-position
给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

你可以假设数组中无重复元素。

示例 1:

输入: [1,3,5,6], 5
输出: 2
示例 2:

输入: [1,3,5,6], 2
输出: 1
示例 3:

输入: [1,3,5,6], 7
输出: 4
示例 4:

输入: [1,3,5,6], 0
输出: 0

 */

// * 思路：二分搜索法->从求等于转化为求等于/越界后返回小于等于

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0, right = nums.length - 1, ans = 0
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    const midValue = nums[mid]
    if (target === midValue) return mid
    if (target < midValue) {
      right = mid - 1
    } else {
      left = mid + 1
    }
    ans = left
  }
  return ans
};

// 测试用例
let test = [1, 3, 5, 6], target = 0

console.time('执行用时');
console.log(searchInsert(test, 5));
console.log(searchInsert(test, 2));
console.log(searchInsert(test, 7));
console.log(searchInsert(test, 0));
console.timeEnd('执行用时');