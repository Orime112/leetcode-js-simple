/**
 * * 题目名称：两数之和
 * * 题目地址：https://leetcode-cn.com/problems/two-sum
给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 的那 两个 整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

你可以按任意顺序返回答案。

示例 1：

输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
示例 2：

输入：nums = [3,2,4], target = 6
输出：[1,2]
示例 3：

输入：nums = [3,3], target = 6
输出：[0,1]

 */

// * 思路：使用 map 结构存储

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const map = {} // {7: {index: 0}} [2,7,11,15]
  const res = []
  for(let i = 0; i < nums.length; i++){
    const val = nums[i]
    if(map[val]){
      res.push(map[val].index, i)
      break
    } else {
      map[target - val] = {index: i}
    }
  }
  return res
};

// 测试用例
let test = [2,7,11,15], target = 9

console.time('执行用时');
console.log(twoSum(test, target));
console.timeEnd('执行用时');