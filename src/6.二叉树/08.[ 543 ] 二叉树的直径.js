/**
 * * 题目名称：二叉树的直径
 * * 题目地址：https://leetcode-cn.com/problems/diameter-of-binary-tree
给定一棵二叉树，你需要计算它的直径长度。一棵二叉树的直径长度是任意两个结点路径长度中的最大值。这条路径可能穿过也可能不穿过根结点。

示例 :
给定二叉树

          1
         / \
        2   3
       / \     
      4   5    
返回 3, 它的长度是路径 [4,2,1,3] 或者 [5,2,1,3]。

 */

// * 思路：就是在求最大深度的同时，求最大深度的最大和

/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let maxDep = -Infinity
  function dep(node) {
    if (!node) return 0
    const leftDep = dep(node.left)
    const rightDep = dep(node.right)
    maxDep = Math.max(leftDep + rightDep, maxDep)
    return Math.max(leftDep + rightDep) + 1
  }
  dep(root)
  return maxDep
};

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');