/**
 * * 题目名称：拥有最多糖果的孩子
 * * 题目地址：https://leetcode-cn.com/problems/kids-with-the-greatest-number-of-candies
给你一个数组 candies 和一个整数 extraCandies ，其中 candies[i] 代表第 i 个孩子拥有的糖果数目。

对每一个孩子，检查是否存在一种方案，将额外的 extraCandies 个糖果分配给孩子们之后，此孩子有 最多 的糖果。注意，允许有多个孩子同时拥有 最多 的糖果数目。

示例 1：

输入：candies = [2,3,5,1,3], extraCandies = 3
输出：[true,true,true,false,true] 
解释：
孩子 1 有 2 个糖果，如果他得到所有额外的糖果（3个），那么他总共有 5 个糖果，他将成为拥有最多糖果的孩子。
孩子 2 有 3 个糖果，如果他得到至少 2 个额外糖果，那么他将成为拥有最多糖果的孩子。
孩子 3 有 5 个糖果，他已经是拥有最多糖果的孩子。
孩子 4 有 1 个糖果，即使他得到所有额外的糖果，他也只有 4 个糖果，无法成为拥有糖果最多的孩子。
孩子 5 有 3 个糖果，如果他得到至少 2 个额外糖果，那么他将成为拥有最多糖果的孩子。
示例 2：

输入：candies = [4,2,1,1,2], extraCandies = 1
输出：[true,false,false,false,false] 
解释：只有 1 个额外糖果，所以不管额外糖果给谁，只有孩子 1 可以成为拥有糖果最多的孩子。
示例 3：

输入：candies = [12,1,12], extraCandies = 10
输出：[true,false,true]

 */

// * 思路：利用JS数组sort方法高性能，进行多次sort

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  const res = []
  for (let i = 0; i < candies.length; i++) {
    const val = candies[i]
    const addVal = val + extraCandies
    const copyCandies = [...candies]
    copyCandies.splice(i, 1, addVal)
    if (copyCandies.sort((a, b) => b - a)[0] === addVal) {
      res.push(true)
    } else {
      res.push(false)
    }
  }
  return res
};

// * 思路二：直接找出所有孩子里面的最大值，加上额外糖果后大于最大值即可

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies1 = function (candies, extraCandies) {
  const res = []
  // *  寻找最大值
  const max = Math.max(...candies)
  for (let v of candies) {
    v + extraCandies >= max ? res.push(true) : res.push(false)
  }
  return res
};

// * 思路三：思路二的简洁写法

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies2 = function (candies, extraCandies) {
  // *  寻找最大值
  const max = Math.max(...candies)
  return candies.map(item => item + extraCandies >= max ? true : false)
};

// 测试用例
let candies = [2, 3, 5, 1, 3], extraCandies = 3

console.time('执行用时');
console.log(kidsWithCandies(candies, extraCandies));
console.log(kidsWithCandies1(candies, extraCandies));
console.log(kidsWithCandies2(candies, extraCandies));
console.timeEnd('执行用时');