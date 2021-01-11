/**
 * * 题目名称：将数组分成和相等的三个部分
 * * 题目地址：https://leetcode-cn.com/problems/partition-array-into-three-parts-with-equal-sum
给你一个整数数组 A，只有可以将其划分为三个和相等的非空部分时才返回 true，否则返回 false。

形式上，如果可以找出索引 i+1 < j 且满足 A[0] + A[1] + ... + A[i] == A[i+1] + A[i+2] + ... + A[j-1] == A[j] + A[j-1] + ... + A[A.length - 1] 就可以将数组三等分。

示例 1：

输入：[0,2,1,-6,6,-7,9,1,2,0,1]
输出：true
解释：0 + 2 + 1 = -6 + 6 - 7 + 9 + 1 = 2 + 0 + 1
示例 2：

输入：[0,2,1,-6,6,7,9,-1,2,0,1]
输出：false
示例 3：

输入：[3,3,6,5,-2,2,5,1,-9,4]
输出：true
解释：3 + 3 = 6 = 5 - 2 + 2 + 5 + 1 - 9 + 4
 */

// * 思路：先求出总和 / 3 的值，自然可以分组了

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function (arr) {
  const len = arr.length
  const sum = arr.reduce((pre, cur) => pre + cur)
  const part = sum / 3
  if (parseInt(part) !== part) return false // ! 如果不能被3整除（不是整数），则返回false
  let group = 0
  let currentSum = 0
  for (let i = 0; i < len; i++) {
    currentSum += arr[i]
    if (currentSum === part) {
      group++
      currentSum = 0
    }
    if (group === 3) {
      return true
    }
  }
  return group === 3
}

// 测试用例
let test = [0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1]
let test1 = [18, 12, -18, 18, -19, -1, 10, 10]
let test2 = [10, -10, 10, -10, 10, -10, 10, -10]

console.time("执行用时")
console.log(canThreePartsEqualSum(test))
console.log(canThreePartsEqualSum(test1))
console.log(canThreePartsEqualSum(test2))
console.timeEnd("执行用时")
