/**
 * * 题目名称：环形链表II
 * * 题目地址：https://leetcode-cn.com/problems/linked-list-cycle-ii/
给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。

为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。注意，pos 仅仅是用于标识环的情况，并不会作为参数传递到函数中。

说明：不允许修改给定的链表。

进阶：

你是否可以使用 O(1) 空间解决此题？

 */

// * 思路：只会用哈希表，并且不允许修改链表所以污染链表法用不了，双指针需要数学证明，暂时没搞懂

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
var detectCycle = function (head) {
  if (!head) return null
  const set = new Set()
  let cur = head
  while (cur) {
    if (set.has(cur)) {
      return cur
    } else {
      set.add(cur)
    }
    cur = cur.next
  }
  return null
};

// 测试用例
let test = ''

console.time('执行用时');
console.log(detectCycle(test));
console.timeEnd('执行用时');