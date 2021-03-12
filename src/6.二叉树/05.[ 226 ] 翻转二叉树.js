/**
 * * 题目名称：翻转二叉树
 * * 题目地址：https://leetcode-cn.com/problems/invert-binary-tree
翻转一棵二叉树。

示例：

输入：

     4
   /   \
  2     7
 / \   / \
1   3 6   9
输出：

     4
   /   \
  7     2
 / \   / \
9   6 3   1

 */

// * 思路：DFS 递归出栈前翻转

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 * * 和镜像一个逻辑--->递归出栈之前交换好（交换好底层子树，自底向上）
 */
var invertTree = function (root) {
  if (!root) return null
  const left = invertTree(root.left)
  const right = invertTree(root.right)
  root.left = right
  root.right = left
  return root
}

// * 思路二：DFS 递归压栈前翻转

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 * * 和镜像一个逻辑--->递归入栈之前交换好（交换好顶层，自顶向下）
 */
var invertTree1 = function (root) {
  if (!root) return null
    ;[root.left, root.right] = [root.right, root.left]
  invertTree(root.left)
  invertTree(root.right)
  return root
}

// ! 思路三：大胆使用 BFS -> 行不通

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 * * 将深层递归转化为单层交换
 */
var invertTree2 = function (root) {
  if (!root) return null
  let queue = [root]
  while (queue.length) {
    const stack = []
      ;[root.left, root.right] = [root.right, root.left]
    root.left && stack.push(root.left)
    root.right && stack.push(root.right)
    queue = stack
  }
  return root
}

// 测试用例
let test = ""

console.time("执行用时")
console.log(xxx(test))
console.timeEnd("执行用时")
