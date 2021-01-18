/**
 * * 题目名称：路径总和
 * * 题目地址：https://leetcode-cn.com/problems/path-sum
给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。

说明: 叶子节点是指没有子节点的节点。

示例: 
给定如下二叉树，以及目标和 sum = 22，

              5
             / \
            4   8
           /   / \
          11  13  4
         /  \      \
        7    2      1
返回 true, 因为存在目标和为 22 的根节点到叶子节点的路径 5->4->11->2。

 */

// * 思路：DFS递归解决，分解为小问题，是否存在一个节点到叶子结点的和为sum - 节点.val

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
  if (!root) return false
  if (!root.left && !root.right && sum - root.val === 0) return true
  return (
    hasPathSum(root.left, sum - root.val) ||
    hasPathSum(root.right, sum - root.val)
  )
}

// * 思路二：分拆递归函数，真正的动态规划，同样采用差值思想

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
const hasPathSum1 = function (root, sum) {
  let tar = sum
  let res = false
  function dep(root, tar) {
    if (!root) return false
    tar -= root.val
    if (!root.left && !root.right) {
      if (tar === 0) {
        res = true
        return
      }
    }
    dep(root.left, tar)
    dep(root.right, tar)
  }
  dep(root, tar)
  return res
}

// 测试用例
let test = ""

console.time("执行用时")
console.log(xxx(test))
console.timeEnd("执行用时")
