/**
 * * 题目名称：平衡二叉树
 * * 题目地址：https://leetcode-cn.com/problems/balanced-binary-tree
给定一个二叉树，判断它是否是高度平衡的二叉树。

本题中，一棵高度平衡二叉树定义为：

一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1 。

 

示例 1：


输入：root = [3,9,20,null,null,15,7]
输出：true
示例 2：


输入：root = [1,2,2,3,3,null,null,4,4]
输出：false
示例 3：

输入：root = []
输出：true
 */

// * 思路：自顶向下不剪枝计算左右结点深度

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  if (!root) return true
  function calcDiff(node) {
    if (!node) return 0
    return Math.max(calcDiff(node.left), calcDiff(node.right)) + 1
  }
  return (
    Math.abs(calcDiff(root.left) - calcDiff(root.right)) <= 1 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  )
}

// * 思路二：自底向上备忘录剪纸计算

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
let map = new Map()
var isBalanced1 = function (root) {
  if (!root) return true

  return (
    Math.abs(calcDiff(root.left) - calcDiff(root.right)) <= 1 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  )
  function calcDiff(node) {
    if (!node) return 0
    if (map.get(node)) return map.get(node)
    const leftDep = calcDiff(node.left)
    const rightDep = calcDiff(node.right)
    const dep = Math.max(leftDep, rightDep) + 1
    map.set(node, dep)
    return dep
  }
}

// 测试用例
let test = ""

console.time("执行用时")
console.log(xxx(test))
console.timeEnd("执行用时")
