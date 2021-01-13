/**
 * 题目名称：删除链表的倒数第N个节点
 * 题目地址：https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/
给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。

示例：

给定一个链表: 1->2->3->4->5, 和 n = 2.

当删除了倒数第二个节点后，链表变为 1->2->3->5.
说明：

给定的 n 保证是有效的。

进阶：

你能尝试使用一趟扫描实现吗？

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// * 由于要求一遍扫描实现，所以需要在扫描过程中记录index；if cur.next == null，则 currentNode 为待删除 Node

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  if (!head) return null
  if (!head.next && n <= 1) return null
  let cur = head // ? 1->2->3->4->5
  let targetNode = head // ! 定义 targetNode 为目标元素的上一个节点
  let i = 0 // * 开始计算可能目标节点的时机为 i === n - 1 ; targetNode = head
  while (cur) {
    if (!cur.next) {
      // * 找到了
      if (targetNode === head) {
        head = head.next
        return
      }
      targetNode.next = targetNode.next.next
    }
    // * 目标节点开始递增的时机
    if (i >= n - 1) {
      targetNode = targetNode.next
    }
    cur = cur.next
    i++
  }
};

const test = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null
        }
      }
    }
  }
}

removeNthFromEnd(test, 4)
console.dir(test);