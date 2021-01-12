/**
 * * 题目名称：拼写单词
 * * 题目地址：https://leetcode-cn.com/problems/find-words-that-can-be-formed-by-characters
给你一份『词汇表』（字符串数组） words 和一张『字母表』（字符串） chars。

假如你可以用 chars 中的『字母』（字符）拼写出 words 中的某个『单词』（字符串），那么我们就认为你掌握了这个单词。

注意：每次拼写（指拼写词汇表中的一个单词）时，chars 中的每个字母都只能用一次。

返回词汇表 words 中你掌握的所有单词的 长度之和。

 

示例 1：

输入：words = ["cat","bt","hat","tree"], chars = "atach"
输出：6
解释： 
可以形成字符串 "cat" 和 "hat"，所以答案是 3 + 3 = 6。
示例 2：

输入：words = ["hello","world","leetcode"], chars = "welldonehoneyr"
输出：10
解释：
可以形成字符串 "hello" 和 "world"，所以答案是 5 + 5 = 10。
 */

// * 思路：依次循环 words，每一个单词进行匹配

/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
  let count = 0
  for (let word of words) {
    if (canSpell(word)) count += word.length
  }
  return count
  function canSpell(word) {
    const list = chars.split("")
    for (let char of word) {
      const position = list.indexOf(char)
      if (position !== -1) {
        list.splice(position, 1)
      } else {
        return ''
      }
    }
    return word
  }
};

// * 思路二：哈希表思想

/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters1 = function (words, chars) {
  let count = 0
  const charsMap = {}
  for (let char of chars) {
    charsMap[char] ? charsMap[char]++ : charsMap[char] = 1
  }
  for (let word of words) {
    const wordMap = {}
    for (let w of word) {
      wordMap[w] ? wordMap[w]++ : wordMap[w] = 1
    }
    let canSpell = true
    for (let [key, value] of Object.entries(wordMap)) {
      if (!charsMap[key] || charsMap[key] < value) {
        canSpell = false
        break
      }
    }
    if (canSpell) count += word.length
  }
  return count
};

// 测试用例
// let words = ["cat", "bt", "hat", "tree"], chars = "atach"
let words = ["hello", "world", "leetcode"], chars = "welldonehoneyr"

console.time('执行用时');
console.log(countCharacters(words, chars));
console.log(countCharacters1(words, chars));
console.timeEnd('执行用时');