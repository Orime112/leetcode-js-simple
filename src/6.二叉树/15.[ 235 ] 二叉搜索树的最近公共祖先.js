/**
 * * 题目名称：二叉搜索树的最近公共祖先
 * * 题目地址：https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-search-tree
给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。

百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

例如，给定如下二叉搜索树:  root = [6,2,8,0,4,7,9,null,null,3,5]

示例 1:

输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
输出: 6 
解释: 节点 2 和节点 8 的最近公共祖先是 6。
示例 2:

输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
输出: 2
解释: 节点 2 和节点 4 的最近公共祖先是 2, 因为根据定义最近公共祖先节点可以为节点本身。

 */

// * 思路一：明确一个逻辑，二叉搜索树，左节点值<根节点值<右节点值
// * 如果p.val和q.val都比root.val小，则搜索root的左子树
// * 如果p.val和q.val都比root.val大，则搜索右子树
// * 否则返回root

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function (root, p, q) {
  if(!root) return null
  if(p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q)
  }
  if(p.val > root.val && q.val > root.val){
    return lowestCommonAncestor(root.right, p, q)
  }
  return root
};

// * 思路二：跟踪root节点变化进行while循环
const lowestCommonAncestor1 = (root, p, q) => {
  while (root) {
    if (p.val < root.val && q.val < root.val) {
      root = root.left;
    } else if (p.val > root.val && q.val > root.val) {
      root = root.right;
    } else {
      break;
    }
  }
  return root;
};

  // * 思路三：更简洁容易理解的方式
  const lowestCommonAncestor2 = function (root, p, q) {
    // * 如果当前节点值和p.val或q.val任何一个相等就返回当前节点
    if(root.val === p.val) return root
    if(root.val === q.val) return root
    // * 当p.val < root.val的时候
    if(p.val < root.val) {
      // * 如果q.val > root.val，就返回根节点
      if(q.val > root.val){
        return root
      } else {
        // * 否则说明 p.val & q.val 都小于 root.val
        return lowestCommonAncestor2(root.left, p, q)
      }
    } else {
      // * 当p.val > root.val时
      if(q.val < root.val){
        return root
      } else {
        return lowestCommonAncestor2(root.right, p, q)
      }
    }
  };

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');