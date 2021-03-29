/**
 * * 题目名称：删除最外层的括号
 * * 题目地址：https://leetcode-cn.com/problems/remove-outermost-parentheses
 有效括号字符串为空 ("")、"(" + A + ")" 或 A + B，其中 A 和 B 都是有效的括号字符串，+ 代表字符串的连接。例如，""，"()"，"(())()" 和 "(()(()))" 都是有效的括号字符串。

如果有效字符串 S 非空，且不存在将其拆分为 S = A+B 的方法，我们称其为原语（primitive），其中 A 和 B 都是非空有效括号字符串。

给出一个非空有效字符串 S，考虑将其进行原语化分解，使得：S = P_1 + P_2 + ... + P_k，其中 P_i 是有效括号字符串原语。

对 S 进行原语化分解，删除分解中每个原语字符串的最外层括号，返回 S 。

示例 1：

输入："(()())(())"
输出："()()()"
解释：
输入字符串为 "(()())(())"，原语化分解得到 "(()())" + "(())"，
删除每个部分中的最外层括号后得到 "()()" + "()" = "()()()"。
示例 2：

输入："(()())(())(()(()))"
输出："()()()()(())"
解释：
输入字符串为 "(()())(())(()(()))"，原语化分解得到 "(()())" + "(())" + "(()(()))"，
删除每个部分中的最外层括号后得到 "()()" + "()" + "()(())" = "()()()()(())"。
示例 3：

输入："()()"
输出：""
解释：
输入字符串为 "()()"，原语化分解得到 "()" + "()"，
删除每个部分中的最外层括号后得到 "" + "" = ""。

 */

/**
 * @param {string} S
 * @return {string}
 * * 0、单调栈解法（stack栈中只存放左括号，右括号是用来消消乐的）；
 * * 从前向后依次匹配有效括号，将整个有效括号删除外层括号后保存到结果集中；结果集最后flat并join即可
 */
var removeOuterParentheses = function (S) {
  const bracket = { '(': ')' }
  const stack = []
  let res = []
  const result = []
  for (let i = 0; i < S.length; i++) {
    const val = S[i]
    if (bracket[val]) { // 左括号
      stack.push(val)
    } else { // 右括号
      stack.pop()
    }
    if (stack.length === 0) {
      // 存在一组有效括号
      res.push(val)
      const cur = [...res]
      cur.shift()
      cur.pop()
      result.push(cur)
      res = []
      continue
    }
    res.push(val)
  }
  return result.flat().join('')
};

/**
 * @param {string} S
 * @return {string}
 * * 1、单调栈解法的改进版；
 * * 不需要获取完成有效括号，只要把“非外层括号”push到结果集中即可
 */
var removeOuterParentheses1 = function (S) {
  const stack = []
  const result = []
  for (let i = 0; i < S.length; i++) {
    const char = S[i]
    if (char === '(') {
      if (stack.length) {
        result.push(char)
      }
      stack.push(char)
    } else {
      if (stack.length >= 2) {
        result.push(char)
      }
      stack.pop()
    }
  }
  return result.join('')
}

/**
 * @param {string} S
 * @return {string}
 * * 2、双指针计数法；
 * * 定义左右两个指针，找到最外层括号的下标，依次排除
 * ! 耗时较长，并不可取
 */
var removeOuterParentheses2 = function (S) {
  const subscript = []
  let left = 0
  let right = 0
  let count = 1
  for (let i = 1; i < S.length; i++) {
    const char = S[i]
    if (char === '(') {
      // 如果遇到左括号，则技术+1
      count++
    } else {
      count--
    }
    // * 检测count是否为0
    if (count === 0) {
      // 找到右侧下标了
      right = i
      subscript.push(left, right)
      right = 0
      left = i + 1
    }
  }
  console.log(subscript);
  return [...S].filter((v, k) => !subscript.includes(k)).join('')
}

/**
 * @param {string} S
 * @return {string}
 * * 3、单指针计数法；
 * * 只用count计数，如果>0则为内层括号
 * ! 注意：需要检测下一个是否有值，如果有值，就要重置count为1,并且跳过下一次比较
 */
var removeOuterParentheses3 = function (S) {
  const result = []
  let count = 1
  for(let i = 1; i < S.length; i++){
    const char = S[i]
    if(char === '('){
      count++
    }else {
      count--
    }
    if(count !== 0){
      result.push(char)
    } else if(S[i+1]) {
      // * 第一组有效括号匹配完成，第二组也有值
      count = 1
      i++
    }
  }
  return result.join('')
}

/**
 * * 4、更加简洁的js计数思路，巧妙利用++和--效果进行首尾字符排除
 * @param {*} S 
 */
var removeOuterParentheses4 = function(S) {
  let res = '';
  let opened = 0;
  for(let c of S) {
    if(c === '(' && opened ++ > 0) res += c;
    if(c === ')' && opened -- > 1) res += c;
  }

  return res;
};

/**
 * * Review
 */
var func = function(S){
  let res = ''
  let opend = 0
  for(let c of S){
    if(c === '(' && opend++ > 0) res += c;
    if(c === ')' && opend-- > 1) res += c;
  }
}


// 测试用例
let test = "(()())(())"
let test1 = "(()())(())(()(()))"

console.time('执行用时');
console.log(removeOuterParentheses4(test));
console.timeEnd('执行用时');