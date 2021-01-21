/**
 * * 题目名称：单词规律
 * * 题目地址：https://leetcode-cn.com/problems/word-pattern
给定一种规律 pattern 和一个字符串 str ，判断 str 是否遵循相同的规律。

这里的 遵循 指完全匹配，例如， pattern 里的每个字母和字符串 str 中的每个非空单词之间存在着双向连接的对应规律。

示例1:

输入: pattern = "abba", str = "dog cat cat dog"
输出: true
示例 2:

输入:pattern = "abba", str = "dog cat cat fish"
输出: false
示例 3:

输入: pattern = "aaaa", str = "dog cat cat dog"
输出: false
示例 4:

输入: pattern = "abba", str = "dog dog dog dog"
输出: false
说明:
你可以假设 pattern 只包含小写字母， str 包含了由单个空格分隔的小写字母。    

 */

// * 思路：同时对模式和非空单词组进行比较

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const sList = s.split(' ')
  if (pattern.length !== sList.length) return false
  const map = {} // * 存放模式为键的映射
  const set = new Set() // * 存放s集合
  for (let i = 0; i < pattern.length; i++) {
    if (map[pattern[i]]) { // * 如果map中有模式，则检查模式
      if (sList[i] !== map[pattern[i]]) { // * 如果模式不匹配返回false
        return false
      }
    } else if (set.has(sList[i])) { // * 否则查看双向映射中是否存在
      return false
    } else { // * 否则新建模式
      map[pattern[i]] = sList[i]
      set.add(sList[i])
    }
  }
  return true
};

// 测试用例
let pattern = "abba", str = "dog dog dog dog"
let pattern1 = "abc", str1 = "b c a"

console.time('执行用时');
console.log(wordPattern(pattern, str));
console.log(wordPattern(pattern1, str1));
console.timeEnd('执行用时');