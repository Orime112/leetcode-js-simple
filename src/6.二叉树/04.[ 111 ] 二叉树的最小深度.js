/**
 * * 题目名称：二叉树的最小深度
 * * 题目地址：https://leetcode-cn.com/problems/minimum-depth-of-binary-tree
给定一个二叉树，找出其最小深度。

最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

说明：叶子节点是指没有子节点的节点。

 

示例 1：


输入：root = [3,9,20,null,null,15,7]
输出：2
示例 2：

输入：root = [2,null,3,null,4,null,5,null,6]
输出：5
 */

// * 思路一：层序遍历寻找断层，注意叶子节点是左右子树都为空的节点

/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) return 0
  let res = 1
  let queue = [root]
  while (queue.length) {
    let stack = []
    for (let node of queue) {
      if (!node.left && !node.right) {
        return res
      }
      node.left && stack.push(node.left)
      node.right && stack.push(node.right)
    }
    res++
    queue = stack
  }
  return res
}

// * 思路二：深度优先遍历（递归）

/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth1 = function (root) {
  if (!root) return 0
  return Math.min(minDepth1(root.left), minDepth1(root.right)) + 1
}

// 测试用例
let test = ""

console.time("执行用时")
console.log(xxx(test))
console.timeEnd("执行用时")
