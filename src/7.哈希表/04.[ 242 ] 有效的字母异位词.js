/**
 * * 题目名称：有效的字母异位词
 * * 题目地址：https://leetcode-cn.com/problems/valid-anagram
给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

示例 1:

输入: s = "anagram", t = "nagaram"
输出: true
示例 2:

输入: s = "rat", t = "car"
输出: false
说明:
你可以假设字符串只包含小写字母。

进阶:
如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？

 */

// * 思路：

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * ! sort对字符进行排序的时候，默认按照a ---> z的顺序升序排列，如果(a, b) => a-b,则按照ascII码进行排序，指定(a, b) => a.localeCompare(b)的效果与传空一直
 * ! sort对数字进行排序的时候，默认按照ASCII码进行排序，“80”会被排到”9“之前
 */
var isAnagram = function (s, t) {
  console.log(s.length === t.length);
  console.log([...s].sort().join(''));
  console.log([...t].sort().join(''));
  return s.length === t.length && [...s].sort().join('') === [...t].sort().join('')
};

// 测试用例
let s = "anagram", t = "nagaram"

console.time('执行用时');
console.log(isAnagram(s, t));
console.timeEnd('执行用时');