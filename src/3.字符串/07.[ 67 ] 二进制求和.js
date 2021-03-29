/**
 * * 题目名称：二进制求和
 * * 题目地址：https://leetcode-cn.com/problems/add-binary
给你两个二进制字符串，返回它们的和（用二进制表示）。

输入为 非空 字符串且只包含数字 1 和 0。

示例 1:

输入: a = "11", b = "1"
输出: "100"
示例 2:

输入: a = "1010", b = "1011"
输出: "10101"
 

提示：

每个字符串仅由字符 '0' 或 '1' 组成。
1 <= a.length, b.length <= 10^4
字符串如果不是 "0" ，就都不含前导零。

 */

// * 思路：二进制原则（逢二进一）

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  a.length >= b.length ? b = b.padStart(a.length, '0') : a = a.padStart(b.length, '0')
  let res = '',
      next = 0
  for(let i = a.length - 1; i >= 0; i--){
    const sum = parseInt(a[i])+parseInt(b[i])+next
    if(sum <= 1){ // * 0或者1
      res += String(sum)
      next = 0
    } else if(sum <= 2) { // * 2
      res += '0'
      next = 1
    } else {
      res += '1'
      next = 1
    }
  }
  if(next){
    res+=String(next)
  }
  return res.split('').reverse().join('')
};

/**
 * * 使用parseInt第二位描述前面数字进制转为10进制，相加后利用toString参数描述进制转回2进制
 * @param {string} a 
 * @param {string} b 
 * @returns {string}
 */
var addBinary1 = (a,b) => {
  return (parseInt(a, 2) + parseInt(b, 2)).toString(2)
}

/**
 * * 使用bigInt在字符串前拼接“0B”或“0b”声明按照二进制方式相加，相加后利用toString参数描述进制转回2进制
 * @param {string} a 
 * @param {string} b 
 * @returns {string}
 */
var addBinary2 = (a,b) => {
  // return (BigInt("0b" + a) + BigInt("0b" + b)).toString(2);
  return (BigInt("0B" + a) + BigInt("0B" + b)).toString(2);
}



// 测试用例
let a = "1010", b = "1011"
let a1 = "100", b1 = "10"
let a2 = "1", b2 = "111"
let a3 = "1111", b3 = "1111"

console.time('执行用时');
console.log(addBinary(a, b));
console.log(addBinary1(a1, b1));
console.log(addBinary(a2, b2));
console.log(addBinary(a3, b3));
console.log(addBinary1(a3, b3));
console.log(addBinary2(a3, b3));
console.timeEnd('执行用时');