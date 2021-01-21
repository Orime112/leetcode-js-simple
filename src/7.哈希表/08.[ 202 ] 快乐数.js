/**
 * * 题目名称：快乐数
 * * 题目地址：https://leetcode-cn.com/problems/happy-number
编写一个算法来判断一个数 n 是不是快乐数。

「快乐数」定义为：对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和，然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。如果 可以变为  1，那么这个数就是快乐数。

如果 n 是快乐数就返回 True ；不是，则返回 False 。

 

示例：

输入：19
输出：true
解释：
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
 */

// * 思路：两种情况，要不就能得到1，要不就会返回为之前的数循环下去，所以用obj记录之前的数，只要再次出现了就不是快乐数

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let res = sum(n)
  let obj = {}
  while (res != 1) {
    if (res in obj) return false
    obj[res] = 1
    res = sum(res)
  }
  return true
}
function sum(n) {
  n = n + ''
  let sum = 0
  for (let num of n) {
    sum += num * num
  }
  return sum
}

// * 思路二：快慢指针，要不最后慢指针重合快指针和为1，要不快指针重合慢指针不为1

var isHappy1 = function (n) {
  let slow = sum(n)
  let fast = sum(slow)
  while (slow != fast) {
    slow = sum(slow)
    fast = sum(sum(fast))
  }
  return slow == 1
}


// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');