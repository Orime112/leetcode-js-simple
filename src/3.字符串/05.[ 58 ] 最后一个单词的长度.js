/**
 * * 题目名称：最后一个单词的长度
 * * 题目地址：https://leetcode-cn.com/problems/length-of-last-word
给定一个仅包含大小写字母和空格 ' ' 的字符串 s，返回其最后一个单词的长度。如果字符串从左向右滚动显示，那么最后一个单词就是最后出现的单词。

如果不存在最后一个单词，请返回 0 。

说明：一个单词是指仅由字母组成、不包含任何空格字符的 最大子字符串。

 

示例:

输入: "Hello World"
输出: 5
 */

// * 思路：

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let res = ''
  let isStart = false
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === ' ') {
      if (!isStart) {
        continue
      } else {
        break
      }
    }
    isStart = true
    res += s[i]
  }
  return res.length
};

// 测试用例
let test = "Hello World"
let test1 = "a "

console.time('执行用时');
console.log(lengthOfLastWord(test));
console.log(lengthOfLastWord(test1));
console.timeEnd('执行用时');