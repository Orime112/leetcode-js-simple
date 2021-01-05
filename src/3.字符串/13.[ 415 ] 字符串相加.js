/**
 * * 题目名称：字符串相加
 * * 题目地址：https://leetcode-cn.com/problems/add-strings
给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。

提示：

num1 和num2 的长度都小于 5100
num1 和num2 都只包含数字 0-9
num1 和num2 都不包含任何前导零
你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式

 */

// * 思路：

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  // * '100' '10' ==> 110
  let next = 0,
      res = ''
  num1.length > num2.length ? num2 = num2.padStart(num1.length, '0') : num1 = num1.padStart(num2.length, '0')
  for(let i = num1.length - 1; i >= 0; i--){
    const sum = Number(num1[i]) + Number(num2[i]) +next
    if(sum >= 10){
      res += String(sum)[String(sum).length - 1]
      next = 1
      if(i === 0){
        res += next
        break
      }
    } else {
      res += sum
      next = 0
    }
  }
  return [...res].reverse().join('')
};

// 测试用例
let num1 = '100', num2 = '10'

console.time('执行用时');
console.log(addStrings(num1, num2));
console.timeEnd('执行用时');