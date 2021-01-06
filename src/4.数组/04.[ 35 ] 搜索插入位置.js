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

// * 思路：注意左边界，<= 就直接返回 i，最后返回 nums.length

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) { // [1,3,5,6] 2
  if(target <= nums[0]){
    return 0
  }
  let res = null
  for(let i = 1; i < nums.length; i++){
    if(target <= nums[i]){
      res = i
      break
    }
  }
  return res ?? nums.length
};

// * 思路：二分搜索法

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert1 = function(nums, target) { // [1,3,5,6] 2
  let left = 0, right = nums.length - 1
  while(left < right) {
    let mid = Math.floor((left+right)/2)
    let midVal = nums[mid]
    if(midVal === target){
      return mid
    } else if (midVal < target){
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return target <= nums[left] ? left : left + 1
};

// 测试用例
let test = [1,3,5,6]

console.time('执行用时');
console.log(searchInsert1(test, 5));
console.timeEnd('执行用时');