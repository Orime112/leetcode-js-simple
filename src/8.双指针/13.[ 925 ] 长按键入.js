/**
 * * 题目名称：长按键入
 * * 题目地址：https://leetcode-cn.com/problems/long-pressed-name
你的朋友正在使用键盘输入他的名字 name。偶尔，在键入字符 c 时，按键可能会被长按，而字符可能被输入 1 次或多次。

你将会检查键盘输入的字符 typed。如果它对应的可能是你的朋友的名字（其中一些字符可能被长按），那么就返回 True。

示例 1：

输入：name = "alex", typed = "aaleex"
输出：true
解释：'alex' 中的 'a' 和 'e' 被长按。
示例 2：

输入：name = "saeed", typed = "ssaaedd"
输出：false
解释：'e' 一定需要被键入两次，但在 typed 的输出中不是这样。
示例 3：

输入：name = "leelee", typed = "lleeelee"
输出：true
示例 4：

输入：name = "laiden", typed = "laiden"
输出：true
解释：长按名字中的字符并不是必要的。
 
 */

// * 思路：根据 obj 键输入和输出是有序的 & 和map的键输出输出也是有序的

/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
  const typedObj = {}
  for (let v of typed) {
    typedObj[v] ? typedObj[v]++ : typedObj[v] = 1
  }
  const nameMap = new Map()
  for (let v of name) {
    nameMap.has(v) ? nameMap.set(v, nameMap.get(v) + 1) : nameMap.set(v, 1)
  }
  if (Object.keys(typedObj).length !== nameMap.size) return false
  // * 此时typedObj中的键是有序的
  let gene = nameMap.keys()
  for (let key in typedObj) {
    const nameKey = gene.next().value;
    if (key !== nameKey || typedObj[key] < nameMap.get(nameKey)) return false
  }
  return true
};

// 测试用例
let name = "alex", typed = "aaleex"
// let name = "saeed", typed = "ssaaedd"
// let name = "rick", typed = "kric"

console.time('执行用时');
console.log(isLongPressedName(name, typed));
console.timeEnd('执行用时');