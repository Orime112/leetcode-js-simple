/**
 * * 题目名称：有多少小于当前数字的数字
 * * 题目地址：https://leetcode-cn.com/problems/how-many-numbers-are-smaller-than-the-current-number
给你一个数组 nums，对于其中每个元素 nums[i]，请你统计数组中比它小的所有数字的数目。

换而言之，对于每个 nums[i] 你必须计算出有效的 j 的数量，其中 j 满足 j != i 且 nums[j] < nums[i] 。

以数组形式返回答案。

 

示例 1：

输入：nums = [8,1,2,2,3]
输出：[4,0,1,1,3]
解释： 
对于 nums[0]=8 存在四个比它小的数字：（1，2，2 和 3）。 
对于 nums[1]=1 不存在比它小的数字。
对于 nums[2]=2 存在一个比它小的数字：（1）。 
对于 nums[3]=2 存在一个比它小的数字：（1）。 
对于 nums[4]=3 存在三个比它小的数字：（1，2 和 2）。
示例 2：

输入：nums = [6,5,4,8]
输出：[2,1,0,3]
示例 3：

输入：nums = [7,7,7,7]
输出：[0,0,0,0]

 */

// * 思路：先排序，从前往后数count

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  if (!nums.length) return []
  let originList = [...nums] // ! 数组经过排序后会改变原数组
  nums.sort((a, b) => a - b) // [4,5,5,6,8] // ! sort 陷阱 如果不传参数 [5, 0, 10, 0, 10, 6] => [0, 0, 10, 10, 5, 6]
  const map = {}
  for (let i = 0; i < nums.length; i++) {
    if (nums[i - 1] !== nums[i]) {
      map[nums[i]] = i
    }
  }
  // console.log(map)
  return originList.map((item) => map[item])
}

// 测试用例
let test = [6, 5, 4, 8]
let test1 = [5, 0, 10, 0, 10, 6]

console.time("执行用时")
console.log(smallerNumbersThanCurrent(test))
console.log(smallerNumbersThanCurrent(test1))
console.timeEnd("执行用时")
