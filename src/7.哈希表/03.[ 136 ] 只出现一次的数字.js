/**
 * * 题目名称：只出现一次的数字
 * * 题目地址：https://leetcode-cn.com/problems/single-number
给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

说明：

你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

示例 1:

输入: [2,2,1]
输出: 1
示例 2:

输入: [4,1,2,1,2]
输出: 4

 */

// * 思路：使用indexOf方法

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    const val = nums[i]
    if (nums.indexOf(val) === nums.lastIndexOf(val)) {
      return val
    }
  }
  return null
};

// * 思路二：使用异或解法
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let ans = 0;
  for (const num of nums) {
    ans ^= num;
  }
  return ans;
};

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');