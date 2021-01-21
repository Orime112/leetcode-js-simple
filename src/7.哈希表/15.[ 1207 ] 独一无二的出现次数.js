/**
 * * 题目名称：独一无二的出现次数
 * * 题目地址：https://leetcode-cn.com/problems/unique-number-of-occurrences
给你一个整数数组 arr，请你帮忙统计数组中每个数的出现次数。

如果每个数的出现次数都是独一无二的，就返回 true；否则返回 false。

示例 1：

输入：arr = [1,2,2,1,1,3]
输出：true
解释：在该数组中，1 出现了 3 次，2 出现了 2 次，3 只出现了 1 次。没有两个数的出现次数相同。
示例 2：

输入：arr = [1,2]
输出：false
示例 3：

输入：arr = [-3,0,1,-3,1,1,1,-3,10,0]
输出：true


 */

// * 思路：

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  const obj = {}
  for (let num of arr) {
    obj[num] ? obj[num]++ : obj[num] = 1
  }
  const set = new Set()
  console.log(obj);
  for (let [k, v] of Object.entries(obj)) {
    if (set.has(v)) return false
    set.add(v)
  }
  return true
};

// 测试用例
let arr = [1, 2]

console.time('执行用时');
console.log(uniqueOccurrences(arr));
console.timeEnd('执行用时');