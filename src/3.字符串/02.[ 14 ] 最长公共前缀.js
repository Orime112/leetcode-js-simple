/**
 * * 题目名称：最长公共前缀
 * * 题目地址：https://leetcode-cn.com/problems/longest-common-prefix
编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

示例 1:

输入: ["flower","flow","flight"]
输出: "fl"
示例 2:

输入: ["dog","racecar","car"]
输出: ""
解释: 输入不存在公共前缀。
说明:

所有输入只包含小写字母 a-z 。

 */

// * 思路：公共前缀肯定是大家都有的前缀，就从前往后找，只要有一个没有该前缀了，就结束搜索（也可称之为纵向扫描
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = (strs) => {
  const len = strs.length
  if (len === 0) return ""
  if (len === 1) return strs[0]
  let longestFix = strs[0] // * strs有不止一组，有比较的必要，取出第一组的第一个字符为最长公共前缀
  // * 双重循环，对现有最长前缀进行匹配，每次更新最长前缀（可能更长，可能更短），一旦短到空串就停止外层遍历
  for (let i = 1; i < len; i++) {
    if (!longestFix.length) {
      // * 如果取出第一组就是个空串，则返回空串
      break
    }
    let newFix = ""
    for (let j = 0; j < longestFix.length; j++) {
      if (longestFix[j] === strs[i][j]) {
        newFix += longestFix[j]
      } else {
        longestFix = newFix
        break
      }
    }
  }
  return longestFix
}

// 测试用例
let test = ["flower", "flow", "flight"]
let test1 = ["dog", "racecar", "car"]

console.time("执行用时")
console.log(longestCommonPrefix(test))
console.log(longestCommonPrefix(test1))
console.timeEnd("执行用时")
