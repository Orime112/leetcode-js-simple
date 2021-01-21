/**
 * * 题目名称：两个数组的交集
 * * 题目地址：https://leetcode-cn.com/problems/intersection-of-two-arrays
给定两个数组，编写一个函数来计算它们的交集。


示例 1：

输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2]

示例 2：

输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出：[9,4]


 */

// * 思路：先找最长数组，再迭代最短数组，或者从最短数组找最长数组也行，差别不大

const intersection = (nums1, nums2) => {

  const result = new Set()
  let maxNums, minNums
  if (nums1.length > nums2.length) {
    maxNums = nums1
    minNums = nums2
  } else {
    maxNums = nums2
    minNums = nums1
  }
  const set = new Set(maxNums)

  for (let i = 0; i < minNums.length; i++) {
    if (set.has(minNums[i])) {
      result.add(minNums[i])
    }
  }
  return [...result]
}

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');
