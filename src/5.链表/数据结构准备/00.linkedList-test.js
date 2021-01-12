/* eslint-disable no-case-declarations */

const MyLinkedList = require("./01.生成链表")

/*
 * 测试用例
 * @param {string[]} list
 * @param {number[]} nums
 * @return {[]}
 */
function linkedListTest(list, nums) {
  const len = list.length
  const res = []
  if (len !== nums.length) {
    console.error("输入与输出长度不一样")
  }
  if (list[0] === "MyLinkedList") {
    var obj = new MyLinkedList()
    res.push(obj)
  } else {
    console.error("你必须先初始化链表对象")
    return -1
  }
  for (let i = 1; i < len; i++) {
    switch (list[i]) {
      case "addAtHead":
        const param_1 = obj.addAtHead(nums[i][0])
        res.push(param_1)
        break
      case "addAtTail":
        const param_3 = obj.addAtTail(nums[i][0])
        res.push(param_3)
        break
      case "addAtIndex":
        const param_2 = obj.addAtIndex(nums[i][0], nums[i][1])
        res.push(param_2)
        break
      case "deleteAtIndex":
        const param_4 = obj.deleteAtIndex(nums[i][0])
        res.push(param_4)
        break
      case "get":
        const param_5 = obj.get(nums[i][0])
        res.push(param_5)
        break
      default:
        break
    }
  }
  return res
}
// const a = [
//   "MyLinkedList",
//   "addAtHead",
//   "addAtTail",
//   "addAtHead",
//   "addAtTail",
//   "addAtHead",
//   "addAtHead",
//   "get",
//   "addAtHead",
//   "get",
//   "get",
//   "addAtTail",
// ]
// const b = [[], [7], [7], [9], [8], [6], [0], [5], [0], [2], [5], [4]]

// const c = [
//   "MyLinkedList",
//   "addAtHead",
//   "addAtTail",
//   "addAtIndex",
//   "get",
//   "deleteAtIndex",
//   "get",
// ]
// const d = [[], [1], [3], [1, 2], [1], [1], [1]]

// const e = [
//   "MyLinkedList",
//   "addAtHead",
//   "deleteAtIndex",
//   "addAtHead",
//   "addAtHead",
//   "addAtHead",
//   "addAtHead",
//   "addAtHead",
//   "addAtTail",
//   "get",
//   "deleteAtIndex",
//   "deleteAtIndex",
// ]
// const f = [[], [2], [1], [2], [7], [3], [2], [5], [5], [5], [6], [4]]

// const g = [
//   "MyLinkedList",
//   "addAtHead",
//   "addAtHead",
//   "addAtHead",
//   "addAtIndex",
//   "deleteAtIndex",
//   "addAtHead",
//   "addAtTail",
//   "get",
//   "addAtHead",
//   "addAtIndex",
//   "addAtHead",
// ]
// const h = [[], [7], [2], [1], [3, 0], [2], [6], [4], [4], [4], [5, 0], [6]]

let i = [
  "MyLinkedList",
  "addAtHead",
  "addAtHead",
  "addAtHead",
  "addAtIndex",
  "deleteAtIndex",
  "addAtHead",
  "addAtTail",
  "get",
  "addAtHead",
  "addAtIndex",
  "addAtHead",
]
let l = [[], [7], [2], [1], [3, 0], [2], [6], [4], [4], [4], [5, 0], [6]]
console.log(linkedListTest(i, l))
