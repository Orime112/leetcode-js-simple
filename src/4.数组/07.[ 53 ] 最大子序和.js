/**
 * * 题目名称：最大子序和
 * * 题目地址：https://leetcode-cn.com/problems/maximum-subarray
给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

示例:

输入: [-2,1,-3,4,-1,2,1,-5,4]
输出: 6
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
进阶:

如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。

 */

// * 思路一：暴力解法，外层循环左边界，内层循环右边界所有值，计算最大和,O(n2)复杂度

/**
* @param {number[]} nums
* @return {number}
*/
var maxSubArray = function (nums) {
  if (nums.length <= 1) return nums[0] ? nums[0] : 0
  let max = -Infinity
  for (let i = 0; i < nums.length; i++) {
    let sum = nums[i]
    max = Math.max(max, sum)
    for (let j = i + 1; j < nums.length; j++) {
      sum += nums[j]
      max = Math.max(max, sum)
    }
  }
  return max
};

// * 思路二：发现规律，到第 i 个数的时候，如果之前的结果是负值，就抛弃之前结果，从当前区间开始计算

/**
* @param {number[]} nums
* @return {number}
* * [-2,1,-3,4,-1,2,1,-5,4]
*/
var maxSubArray1 = function (nums) {
  let pre = 0, maxAns = nums[0];
  nums.forEach((x) => {
    pre = Math.max(pre + x, x); // * pre 存储的是当前这次最好结果（把当前和之前都带上/只带当前）
    maxAns = Math.max(maxAns, pre);
  });
  return maxAns;
};

var maxSubArray2 = function(nums) {
  const n = nums.length;
  for (let i = 1; i < n; i++) {
    if (nums[i-1] > 0) {
      nums[i] += nums[i-1]
    }
  }
  return Math.max.apply(this, nums)
}

var maxSubArray3 = function(nums){
  for(let i = 0; i < nums.length; i++){
    if(nums[i - 1] > 0){
      nums[i] += nums[i - 1]
    }
  }
  return Math.max(nums)
}



// 测试用例
let test = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
let test1 = [-2, 1]

console.time('执行用时');
console.log(maxSubArray(test));
console.log(maxSubArray(test1));
console.log(maxSubArray1(test));
console.log(maxSubArray1(test1));
console.log(maxSubArray2(test));
console.log(maxSubArray2(test1));
console.timeEnd('执行用时');