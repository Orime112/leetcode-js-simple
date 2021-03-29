/**
 * * 题目名称：滑动窗口的最大值
 * * 题目地址：https://leetcode-cn.com/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof
给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。

示例:

输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
输出: [3,3,5,5,6,7] 
解释: 

  滑动窗口的位置                最大值
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7

 */

// * 思路：先获取第一个窗口的最大值，后面加入的依次比较
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  if (!nums.length) return []
  const res = []
  const stack = []
  let max = null
  // *  找最大值
  function findMax(list) {
    let max = -Infinity
    for (let i = 0; i < list.length; i++) {
      const val = list[i]
      max = val > max ? val : max
    }
    return max
  }
  for (let i = 0; i < k; i++) {
    const val = nums[i]
    stack.push(val)
  }
  max = findMax(stack)
  res.push(max)
  for (let i = k; i < nums.length; i++) {
    const val = nums[i]
    const tail = stack.shift()
    stack.push(val)
    if (val >= max) {
      // 如果新加入的值比当前最大值还要大
      max = val
    } else if (tail === max) {
      // 如果新加入的值没有最大值大并且shift出去的值就是当前最大值
      max = findMax(stack)
    } else {
      // 新加入的值没有当前最大值大，并且shift出去的也不是当前最大值，那就不用动
    }
    res.push(max)
  }
  return res
}

// 测试用例
let nums = [1, 3, -1, -3, 5, 3, 6, 7],
  k = 3

console.time("执行用时")
console.log(maxSlidingWindow(nums, k))
console.timeEnd("执行用时")
