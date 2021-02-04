/**
 * * 题目名称：反转字符串中的元音字母
 * * 题目地址：https://leetcode-cn.com/problems/reverse-vowels-of-a-string

编写一个函数，以字符串作为输入，反转该字符串中的元音字母。

示例 1：

输入："hello"
输出："holle"
示例 2：

输入："leetcode"
输出："leotcede"
 

提示：

元音字母不包含字母 "y" 。

 */

// * 思路：双指针对撞

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  s = s.split('')
  const vowels = ['a', 'e', 'i', 'o', 'u']
  let i = 0, j = s.length - 1, iVow, jVow
  while (i <= j) {
    vowels.includes(s[i]) && (iVow = s[i])
    vowels.includes(s[j]) && (jVow = s[j])
    if (iVow && jVow) {
      if (iVow !== jVow) {
        let temp = s[i]
        s[i] = s[j]
        s[j] = temp
      }
      iVow = jVow = null
    }
    !iVow && i++
    !jVow && j--
  }
  return s.join('')
};

// 测试用例
// let test = "hello"
let test = "leetcode"

console.time('执行用时');
console.log(reverseVowels(test));
console.timeEnd('执行用时');