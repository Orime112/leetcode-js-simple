/**
 * * 题目名称：删除排序数组中的重复项
 * * 题目地址：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array
给定一个排序数组，你需要在 原地 删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。

不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

 

示例 1:

给定数组 nums = [1,1,2], 

函数应该返回新的长度 2, 并且原数组 nums 的前两个元素被修改为 1, 2。 

你不需要考虑数组中超出新长度后面的元素。
示例 2:

给定 nums = [0,0,1,1,1,2,2,3,3,4],

函数应该返回新的长度 5, 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4。

你不需要考虑数组中超出新长度后面的元素。
 
 */

// * 思路：双指针，快慢指针交替前进

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let i = 0
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) { // * 如果是不一样，i+1，并且i+1所在值为j的值，j+1
      nums[++i] = nums[j]
    }
  }
  nums.splice(i + 1)
  return i + 1
};

// 测试用例
let test = [1, 1, 2]

console.time('执行用时');
console.log(removeDuplicates(test));
console.timeEnd('执行用时');