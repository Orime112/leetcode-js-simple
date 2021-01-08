/**
 * * 题目名称：移动零
 * * 题目地址：https://leetcode-cn.com/problems/move-zeroes
给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

示例:

输入: [0,1,0,3,12]
输出: [1,3,12,0,0]
说明:

必须在原数组上操作，不能拷贝额外的数组。
尽量减少操作次数。

 */

// * 思路一：快慢双指针，j 是慢指针，i是快指针，i跟随遍历，如果遇到非0，就找机会和j互换
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let j = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      if (i === j) {
        j++
      } else {
        // 遇到非0元素了，要和0元素交换位置
        [nums[j++], nums[i]] = [nums[i], nums[j]]
      }
    }
  }
}

// * 思路二：自身操作
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes1 = function (nums) {
  let count = 0
  for (let i = 0; i < nums.length - count; i++) {
    if (nums[i] === 0) {
      nums.push(nums.splice(i, 1)[0])
      count++
      i--
    }
  }
}

// * 思路三：另类双指针
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes2 = function (nums) {
  let len = nums.length
  let j = 0
  for (let i = 0; i < len; i++) {
    if (nums[i]) {
      nums[j++] = nums[i]
    }
  }
  for (let i = j; i < len; i++) {
    nums[i] = 0
  }
  return nums
};

// 测试用例
let test = [0, 1, 0, 3, 12]
let test1 = [0, 0, 1]

console.time('执行用时');
console.log(moveZeroes1(test));
console.log(test);
console.timeEnd('执行用时');