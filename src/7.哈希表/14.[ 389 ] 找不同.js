/**
 * * 题目名称：找不同
 * * 题目地址：https://leetcode-cn.com/problems/find-the-difference
给定两个字符串 s 和 t，它们只包含小写字母。

字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。

请找出在 t 中被添加的字母。


示例 1：

输入：s = "abcd", t = "abcde"
输出："e"
解释：'e' 是那个被添加的字母。
示例 2：

输入：s = "", t = "y"
输出："y"
示例 3：

输入：s = "a", t = "aa"
输出："a"
示例 4：

输入：s = "ae", t = "aea"
输出："a"

 */

// * 思路一：哈希表记录字母出现次数

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  const sObj = {}
  for (let c of s) {
    sObj[c] ? sObj[c]++ : sObj[c] = 1
  }
  for (let char of t) {
    if (sObj[char]) sObj[char]--
    else return char
  }
  return ''
};

// * 思路二：ASCII码值求和后求差

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference1 = function (s, t) {
  let as = 0, at = 0;
  for (let i = 0; i < s.length; i++) {
    as += s[i].charCodeAt();
  }
  for (let i = 0; i < t.length; i++) {
    at += t[i].charCodeAt();
  }
  return String.fromCharCode(at - as);
};

// * 思路三：位运算

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference2 = function (s, t) {
  let ret = 0;
  for (const ch of s) {
    ret ^= ch.charCodeAt();
  }
  for (const ch of t) {
    ret ^= ch.charCodeAt();
  }
  return String.fromCharCode(ret);
};

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');