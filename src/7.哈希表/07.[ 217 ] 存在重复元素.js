/**
 * * 题目名称：存在重复元素
 * * 题目地址：https://leetcode-cn.com/problems/contains-duplicate
给定一个整数数组，判断是否存在重复元素。

如果存在一值在数组中出现至少两次，函数返回 true 。如果数组中每个元素都不相同，则返回 false 。

示例 1:

输入: [1,2,3,1]
输出: true
示例 2:

输入: [1,2,3,4]
输出: false
示例 3:

输入: [1,1,1,3,3,4,3,2,4,2]
输出: true

 */

// * 思路一：使用set去重后观察前后数组长度是否一致

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  return new Set(nums).size !== nums.length
};

// * 思路二：使用indexOf和lastIndexOf方法判断

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate1 = function (nums) {
  for (let num of nums) {
    if (nums.indexOf(num) !== nums.lastIndexOf(num)) return true
  }
  return false
};

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');