/**
 * * 题目名称：滑动窗口的最大值
 * * 题目地址：https://leetcode-cn.com/problems/hua-dong-chuang-kou-de-zui-da-zhi-lcof
给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。

示例:

输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
输出: [3,3,5,5,6,7] 
解释: 

  滑动窗口的位置                最大值
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7

 */

// * 解法一：同样很笨但是写法更优雅的解法
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  if (!nums.length) return []
  const res = []
  const list = []
  // * 组合第一个list
  for (let i = 0; i < k; i++) {
    list.push(nums[i])
  }
  let max = Math.max(...list)
  res.push(max)
  // * 依次比较
  for (let i = k; i < nums.length; i++) {
    list.push(nums[i])
    list.shift()
    max = Math.max(...list)
    res.push(max)
  }
  return res
};

// * 解法二：维护一个双端队列将时间复杂度降低为O(n)，性能肉眼可见提升了0.1ms
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow1 = function (nums, k) {
  if(!nums) return []
  let res = [], queue = []
  for (let i = 0; i < nums.length; i++) {
    if(i >= k){
      // * 假设 k = 3, 此时第四个元素进入比较
      let outElem = nums[i - k] // * 获取目前nums待比较的头部元素
      if(outElem === queue[0]) {
        // * 如果和双端队列开头元素一致就弹出
        queue.shift()
      }
    }
    // * 每次循环操作双端队列
    let inElem = nums[i]
    while(queue.length && queue[queue.length - 1] < inElem){
      // * 只要队列不为空，并且队列中有元素比 inElem 小，就一直弹出，保证队列中所有元素都比 inElem 大
      queue.pop()
    }
    queue.push(inElem)

    if(i >= k-1){
      res.push(queue[0])
    }
  }
  return res
};

// 测试用例
let nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3


console.time('执行用时');
console.log(maxSlidingWindow1(nums, k));
console.timeEnd('执行用时');