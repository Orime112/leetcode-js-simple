/**
 * * 题目名称：相交链表
 * * 题目地址：https://leetcode-cn.com/problems/intersection-of-two-linked-lists
编写一个程序，找到两个单链表相交的起始节点。

如下面的两个链表：

在节点 c1 开始相交。

示例 1：

输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3
输出：Reference of the node with value = 8
输入解释：相交节点的值为 8 （注意，如果两个链表相交则不能为 0）。从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,0,1,8,4,5]。在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。

注意：

如果两个链表没有交点，返回 null.
在返回结果后，两个链表仍须保持原有的结构。
可假定整个链表结构中没有循环。
程序尽量满足 O(n) 时间复杂度，且仅用 O(1) 内存。

 */

// * 思路一：哈希表思想

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  const set = new Set()
  let curA = headA
  while (curA) {
    set.add(curA)
    curA = curA.next
  }
  let curB = headB
  while (curB) {
    if (set.has(curB)) {
      return curB
    }
    curB = curB.next
  }
  return null
};

// * 思路二：双指针法，两个链表走过的路径总和一样，则碰撞的地方就是相交节点

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode1 = function (headA, headB) {
  if (!headA || !headB) return null;

  let pA = headA,
    pB = headB;
  while (pA !== pB) {
    pA = pA === null ? headB : pA.next;
    pB = pB === null ? headA : pB.next;
  }
  return pA;
};


// 测试用例
let test = ''

console.time('执行用时');
// console.log(xxx(test));
console.timeEnd('执行用时');