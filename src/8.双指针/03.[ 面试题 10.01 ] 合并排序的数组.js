/**
 * * 题目名称：合并排序的数组
 * * 题目地址：https://leetcode-cn.com/problems/sorted-merge-lcci
给定两个排序后的数组 A 和 B，其中 A 的末端有足够的缓冲空间容纳 B。 编写一个方法，将 B 合并入 A 并排序。

初始化 A 和 B 的元素数量分别为 m 和 n。

示例:

输入:
A = [1,2,3,0,0,0], m = 3
B = [2,5,6],       n = 3

输出: [1,2,2,3,5,6]
说明:

A.length == n + m

 */

// * 思路一：先替换进去再排序

/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
var merge = function (A, m, B, n) {
  A.splice(3)
  const res = A.concat(...B)
  return res.sort((a, b) => a - b)
};

// * 思路二：双指针

/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
var merge1 = function (A, m, B, n) {
  let i = 0, j = 0, res = []
  while (i < m || j < n) {
    if (A[i] <= B[j]) {
      res.push(A[i++])
    } else {
      res.push(B[j++])
    }
  }
  return res
};

// 测试用例
let test = A = [1, 2, 3, 0, 0, 0], m = 3,
  B = [2, 5, 6], n = 3

console.time('执行用时');
console.log(merge(A, m, B, n));
console.log(merge1(A, m, B, n));
console.timeEnd('执行用时');