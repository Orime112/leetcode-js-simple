/**
 * * 题目名称：回文链表
 * * 题目地址：https://leetcode-cn.com/problems/palindrome-linked-list
请判断一个链表是否为回文链表。

示例 1:

输入: 1->2
输出: false
示例 2:

输入: 1->2->2->1
输出: true
进阶：
你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？

 */

// * 思路一：数组reverse转字符串看是否相等

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  const stack = []
  let cur = head
  while (cur) {
    stack.push(cur.val)
    cur = cur.next
  }
  return stack.join('') === stack.reverse().join('')
};

// * 思路二：双指针放在链表首尾往回移动看是否相等

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  const vals = [];
  while (head !== null) {
    vals.push(head.val);
    head = head.next;
  }
  for (let i = 0, j = vals.length - 1; i < j; ++i, --j) {
    if (vals[i] !== vals[j]) {
      return false;
    }
  }
  return true;
};

// 测试用例
let test = ''

console.time('执行用时');
console.log(xxx(test));
console.timeEnd('执行用时');