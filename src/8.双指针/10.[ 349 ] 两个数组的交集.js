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
 

说明：

输出结果中的每个元素一定是唯一的。
我们可以不考虑输出结果的顺序。

 */

// * 思路一：用字典+集合

const intersection = (nums1, nums2) => {
  const resObj = {}
  for (let v of nums1) {
    resObj[v] ? resObj[v] += 1 : resObj[v] = 1
  }
  console.log(resObj);
  const res = []
  for (let v of nums2) {
    if (resObj[v]) {
      res.push(v)
      resObj[v]--
    }
  }
  return [...new Set(res)]
}

// * 思路二：只用集合

const intersection1 = (nums1, nums2) => {
  const resSet = new Set(nums1)
  const res = []
  for (let v of nums2) {
    if (resSet.has(v)) {
      res.push(v)
      resSet.delete(v)
    }
  }
  return res
}

// 测试用例
let nums1 = [1, 2, 2, 1], nums2 = [2, 2]

console.time('执行用时');
console.log(intersection1(nums1, nums2));
console.timeEnd('执行用时');