/**
 * * 题目名称：判定字符是否唯一
 * * 题目地址：https://leetcode-cn.com/problems/is-unique-lcci
实现一个算法，确定一个字符串 s 的所有字符是否全都不同。

示例 1：

输入: s = "leetcode"
输出: false 
示例 2：

输入: s = "abc"
输出: true

 */

// * 思路一：set 保存结果，如果has直接返回false

/**
 * @param {string} astr
 * @return {boolean}
 */
var isUnique = function (astr) {
  const set = new Set()
  for (let v of astr) {
    if (set.has(v)) {
      return false
    } else {
      set.add(v)
    }
  }
  return true
};

// * 思路二：直接去重，比较长度

/**
 * @param {string} astr
 * @return {boolean}
 * ! 注意，new Set() 直接出入字符串会将字符串打散 ![](https://cdn.jsdelivr.net/gh/Orime112/picbed/img/20210111154312.png)
 */
var isUnique1 = function (astr) {
  return new Set(astr).size === astr.length
};

// * 思路三：indexOf 和 lastIndexOf 下标解法

/**
 * @param {string} astr
 * @return {boolean}
 */
var isUnique2 = function (astr) {
  for (let v of astr) {
    if (astr.indexOf(v) != astr.lastIndexOf(v)) {
      return false
    }
  }
  return true
};


// 测试用例
let test = 'leetcode'

console.time('执行用时');
console.log(isUnique(test));
console.timeEnd('执行用时');