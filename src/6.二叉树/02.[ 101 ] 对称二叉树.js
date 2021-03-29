/**
 * * 题目名称：对称二叉树
 * * 题目地址：https://leetcode-cn.com/problems/symmetric-tree
给定一个二叉树，检查它是否是镜像对称的。

 

例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

    1
   / \
  2   2
 / \ / \
3  4 4  3
 

但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

    1
   / \
  2   2
   \   \
   3    3


 */

// * 思路一：问题简化为两棵树，什么时候镜像相等，1、两棵树的根节点相等；2、树1的左子树和树2的右子树镜像相等；树1的右子树和树2的左子树镜像相等

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) return null
  return isEqual(root.left, root.right)
  // * 判断两个节点是否相等
  function isEqual(nodeLeft, nodeRight) {
    if (!nodeLeft && !nodeRight) return true
    if (!nodeLeft || !nodeRight) return false
    return nodeLeft.val === nodeRight.val && isEqual(nodeLeft.left, nodeRight.right) && isEqual(nodeLeft.right, nodeRight.left)
  }
};

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');