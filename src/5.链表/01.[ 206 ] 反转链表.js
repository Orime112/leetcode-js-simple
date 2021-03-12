/**
 * * 题目名称：反转链表
 * * 题目地址：https://leetcode-cn.com/problems/reverse-linked-list
反转一个单链表。

示例:

输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
进阶:
你可以迭代或递归地反转链表。你能否用两种方法解决这道题？

 */

// * 思路：

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let pre = null
  let cur = head
  // * null  1---->2---->3---->4---->5---->NULL
  // ? pre  cur  next
  while (cur) {
    let next = cur.next // 存储 节点 2 到 next 上
    cur.next = pre  // 更改节点 1 的 next 为 null
    pre = cur // 存储节点 1 为 pre
    cur = next
  }
  return pre
};

// 测试用例
let test = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: null
    }
  }
}

console.time('执行用时');
console.log(reverseList(test));
console.timeEnd('执行用时');