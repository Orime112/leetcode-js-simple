/**
 * * 题目名称：有效的括号
 * * 题目地址：https://leetcode-cn.com/problems/valid-parentheses
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。

示例 1:

输入: "()"
输出: true
示例 2:

输入: "()[]{}"
输出: true
示例 3:

输入: "(]"
输出: false
示例 4:

输入: "([)]"
输出: false
示例 5:

输入: "{[]}"
输出: true

 */

// * 思路：单调栈

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const map = {'(': ')', '[': ']', '{': '}'}
  const stack = []
  for(let i = 0; i < s.length; i++){
    if(map[s[i]]){
      // * 左括号，推入栈中
      stack.push(s[i])
    } else {
      // * 右括号，判断弹出是否匹配
      if(map[stack.pop()] !== s[i]){
        return false
      }
    }
  }
  return !stack.length
};

// 测试用例
let test = "()[]{}"

console.time('执行用时');
console.log(isValid(test));
console.timeEnd('执行用时');