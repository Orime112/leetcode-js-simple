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

// * 思路：

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const map = {}
  let res = -1
  // * 第一次遍历将字符串出现次数存储起来{字符：次数}
  for(let v of s){
    if(map[v]){
      map[v] = ++map[v]
    } else {
      map[v] = 1
    }
  }
  // * 第二次遍历将 map 中值为1的那个家伙找出来
  let target = null
  for(let k in map){
    if(map[k] === 1){
      target = k
      break
    }
  }
  return target ? s.indexOf(target) : -1
};

// * 解法一 使用indexOf和lastIndexOf是否相等来判断

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar1 = function(s) {
  let res = -1
  for(let i = 0; i < s.length; i++){
    const char = s[i]
    if(s.indexOf(char) === s.lastIndexOf(char)){
      res = i
      break
    }
  }
  return res
};

// 测试用例
let test = "leetcode"
let test1 = "loveleetcode"

console.time('执行用时');
console.log(firstUniqChar(test));
console.log(firstUniqChar1(test1));
console.timeEnd('执行用时');