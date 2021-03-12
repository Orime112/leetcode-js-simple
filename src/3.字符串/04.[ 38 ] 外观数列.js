/**
 * * 题目名称：外观数列
 * * 题目地址：https://leetcode-cn.com/problems/count-and-say
给定一个正整数 n ，输出外观数列的第 n 项。

「外观数列」是一个整数序列，从数字 1 开始，序列中的每一项都是对前一项的描述。

你可以将其视作是由递归公式定义的数字字符串序列：

countAndSay(1) = "1"
countAndSay(n) 是对 countAndSay(n-1) 的描述，然后转换成另一个数字字符串。
前五项如下：

1.     1
2.     11
3.     21
4.     1211
5.     111221
第一项是数字 1 
描述前一项，这个数是 1 即 “ 一 个 1 ”，记作 "11"
描述前一项，这个数是 11 即 “ 二 个 1 ” ，记作 "21"
描述前一项，这个数是 21 即 “ 一 个 2 + 一 个 1 ” ，记作 "1211"
描述前一项，这个数是 1211 即 “ 一 个 1 + 一 个 2 + 二 个 1 ” ，记作 "111221"
要 描述 一个数字字符串，首先要将字符串分割为 最小 数量的组，每个组都由连续的最多 相同字符 组成。然后对于每个组，先描述字符的数量，然后描述字符，形成一个描述组。要将描述转换为数字字符串，先将每组中的字符数量用数字替换，再将所有描述组连接起来。

例如，数字字符串 "3322251" 的描述如下图：

示例 1：

输入：n = 1
输出："1"
解释：这是一个基本样例。
示例 2：

输入：n = 4
输出："1211"
解释：
countAndSay(1) = "1"
countAndSay(2) = 读 "1" = 一 个 1 = "11"
countAndSay(3) = 读 "11" = 二 个 1 = "21"
countAndSay(4) = 读 "21" = 一 个 2 + 一 个 1 = "12" + "11" = "1211"

 */

// * 思路一：题目暗示很明显，就是个动态规划，状态转移方程为 countAndSay(n) = countAndSay(n-1)；递归终止条件为 n === 1返回1

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  if (n === 1) {
    return "1"
  }
  // * table 存储
  // const dp = [null, '1', '11']
  // for(let i = 3; i <= n; i++){
  //   dp[i] = getStr(dp[i-1])
  // }
  // return dp[n]
  // * 变量替换
  let dp = "11"
  for (let i = 3; i <= n; i++) {
    dp = getStr(dp)
  }
  return dp
}

/**
 * * 如果'21'，从前向后比较，如果str[i] === str[i+1]，则 count++；否则 现在的count进行结算 res += String(count) + String(val)
 * * 重置
 * @param {*} str
 */
function getStr(str) {
  // '21' ---> '1211'
  let count = 1,
    res = ""
  for (let i = 0; i < str.length; i++) {
    const val = str[i]
    if (val === str[i + 1]) {
      count++
      if (i === str.length - 1) {
        res += String(count) + String(val)
        break
      }
    } else {
      res += String(count) + String(val)
      count = 1
    }
  }
  return res
}

/**
 * * 解法二：正则表达式操作字符串 ![原理说明](https://gitee.com/orime/picturebed/raw/master/20210104221323.png)
 * @param {number} n
 * @return {string}
 */
var countAndSay1 = function (n) {
  let prev = "1"
  for (let i = 1; i < n; i++) {
    prev = prev.replace(/(\d)\1*/g, (item) => `${item.length}${item[0]}`)
  }
  return prev
}

// 测试用例
let test = 1
let test1 = 4
let test2 = 5

console.time("执行用时")
console.log(countAndSay(test))
console.timeEnd("执行用时")
console.time("执行用时")
console.log(countAndSay(test1))
console.timeEnd("执行用时")
console.time("执行用时")
console.log(countAndSay(test2))
console.timeEnd("执行用时")

// 1
// 执行用时: 4.221ms
// 1211
// 执行用时: 0.099ms
// 111221
// 执行用时: 0.021ms
