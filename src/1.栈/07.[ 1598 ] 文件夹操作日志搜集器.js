/**
 * * 题目名称：文件夹操作日志搜集器
 * * 题目地址：https://leetcode-cn.com/problems/crawler-log-folder
每当用户执行变更文件夹操作时，LeetCode 文件系统都会保存一条日志记录。

下面给出对变更操作的说明：

"../" ：移动到当前文件夹的父文件夹。如果已经在主文件夹下，则 继续停留在当前文件夹 。
"./" ：继续停留在当前文件夹。
"x/" ：移动到名为 x 的子文件夹中。题目数据 保证总是存在文件夹 x 。
给你一个字符串列表 logs ，其中 logs[i] 是用户在 ith 步执行的操作。

文件系统启动时位于主文件夹，然后执行 logs 中的操作。

执行完所有变更文件夹操作后，请你找出 返回主文件夹所需的最小步数 。

 

示例 1：



输入：logs = ["d1/","d2/","../","d21/","./"]
输出：2
解释：执行 "../" 操作变更文件夹 2 次，即可回到主文件夹
示例 2：



输入：logs = ["d1/","d2/","./","d3/","../","d31/"]
输出：3
示例 3：

输入：logs = ["d1/","../","../","../"]
输出：0

 */

// * 思路：用栈记录每次操作，直接跳就是开辟新路径，'./'无需操作，'../'就是pop，最后返回栈的深度
/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function (logs) {
  const stack = []
  for (let v of logs) {
    if (v === '../') {
      stack.pop()
    } else if (v === './') {
      // * 不做任何操作
    } else {
      stack.push(v)
    }
  }
  return stack.length
};

// * 解法二：不用栈，单纯计数
/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations1 = function (logs) {
  let count = 0
  for (let v of logs) {
    if (v === './') {
      continue
    }
    if (v === '../') {
      if (count !== 0) {
        // * 只有当前有深度了，计数才-1，否则计数为0，维持当前计数
        count--
      }
    } else {
      count++
    }
  }
  return count
};


// 测试用例
let test = ["d1/", "d2/", "./", "d3/", "../", "d31/"]
let test1 = ["d1/", "../", "../", "../"]
let test2 = ["./", "wz4/", "../", "mj2/", "../", "../", "ik0/", "il7/"]

console.time('执行用时');
console.log(minOperations1(test2));
console.timeEnd('执行用时');