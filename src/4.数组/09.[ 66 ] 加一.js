/**
 * * 题目名称：加一
 * * 题目地址：https://leetcode-cn.com/problems/plus-one
给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。

最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

你可以假设除了整数 0 之外，这个整数不会以零开头。

 

示例 1：

输入：digits = [1,2,3]
输出：[1,2,4]
解释：输入数组表示数字 123。
示例 2：

输入：digits = [4,3,2,1]
输出：[4,3,2,2]
解释：输入数组表示数字 4321。
示例 3：

输入：digits = [0]
输出：[1]


 */

// * 思路：根据无数次试错发现是十进制相加

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  // * 先给数组的最后一位加1
  const last = digits.splice(digits.length - 1, 1)[0] + 1
  digits.push(last)
  // * 如果最后一位加完之后 < 10 则直接返回
  if (last < 10) return digits
  // * 由于只存储单个数字，所以结果只可能是10或其他
  let next = 0
  for (let i = digits.length - 1; i >= 0; i--) {
    const sum = digits[i] + next
    if (sum < 10) {
      digits.splice(i, 1, sum)
      break
    } else {
      // * 进位
      digits.splice(i, 1, 0)
      if (i === 0) {
        // * 到了第一位
        digits.unshift(1)
        break
      }
      next = 1
    }
  }
  return digits
};

// * 思路二：精简解法

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne1 = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] !== 9) {
      digits[i]++
      return digits
    } else {
      digits[i] = 0
    }
  }
  // * 如果走到这里，说明第一项也是9，那么前面补个1
  digits = [1, ...digits]
  return digits
};

// * 思路三：更精简解法

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne2 = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i]++
    digits[i] %= 10
    if (digits[i] !== 0) {
      return digits
    }
  }
  // * 如果走到这里，说明第一项也是9，那么前面补个1
  digits = [1, ...digits]
  return digits
};

// * 思路四：BigInt解法

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne3 = function (digits) {
  const numStr = digits.join('')
  const numBig = BigInt(numStr)
  const resBig = numBig + BigInt(1)
  return resBig.toString().split('').map(Number)
};

// 测试用例
let test = [1, 2, 3]
let test1 = [9]
let test2 = [9, 9]
let test3 = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]


console.time('执行用时');
console.log(plusOne2(test));
console.log(plusOne2(test1));
console.log(plusOne2(test2));
console.log(plusOne3(test3))
console.timeEnd('执行用时');