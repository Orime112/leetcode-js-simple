/**
 * * 题目名称：二叉树的最大深度
 * * 题目地址：https://leetcode-cn.com/problems/maximum-depth-of-binary-tree
给定一个二叉树，找出其最大深度。

二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

说明: 叶子节点是指没有子节点的节点。

示例：
给定二叉树 [3,9,20,null,null,15,7]，

    3
   / \
  9  20
    /  \
   15   7
返回它的最大深度 3 。

 */

// * 思路：递归，二叉树的最大深度为左子树的最大深度+1，或者右子树的最大深度+1

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};

// * 思路二：广度优先遍历，寻找最大深度

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth1 = function (root) {
  if (!root) return 0
  let dep = 0
  let queue = []
  queue.push(root)
  while (queue.length) {
    dep++
    let list = []
    for (let node of queue) {
      node.left && list.push(node.left)
      node.right && list.push(node.right)
    }
    queue = list
  }
  return dep
};

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');