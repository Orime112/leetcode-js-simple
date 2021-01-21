/**
 * * 题目名称：字符串中的第一个唯一字符
 * * 题目地址：https://leetcode-cn.com/problems/first-unique-character-in-a-string
给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。


示例：

s = "leetcode"
返回 0

s = "loveleetcode"
返回 2
 
 */

// * 思路一：哈希表

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const obj = {}
  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    obj[char] ? obj[char] = { ...obj[char], time: obj[char].time ? obj[char].time + 1 : 1 } : obj[char] = { index: i, time: 1 }
  }
  // console.log(obj);
  for (let key in obj) {
    if (obj[key].time === 1) return obj[key].index
  }
  return -1
};

// * 思路二：indexOf和lastIndex

// * 思路三：使用map存储出现次数，键为索引而不是字母，找出第一个即可；或者键位字母用indexOf找出索引即可

// 测试用例
let s = "leetcode"
let s1 = "loveleetcode"

console.time('执行用时');
console.log(firstUniqChar(s));
console.log(firstUniqChar(s1));
console.timeEnd('执行用时');