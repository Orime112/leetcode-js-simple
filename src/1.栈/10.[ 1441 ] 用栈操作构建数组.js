  /**
  * * 题目名称：用栈操作构建数组
  * * 题目地址：https://leetcode-cn.com/problems/build-an-array-with-stack-operations
  给你一个目标数组 target 和一个整数 n。每次迭代，需要从  list = {1,2,3..., n} 中依序读取一个数字。

  请使用下述操作来构建目标数组 target ：

  Push：从 list 中读取一个新元素， 并将其推入数组中。
  Pop：删除数组中的最后一个元素。
  如果目标数组构建完成，就停止读取更多元素。
  题目数据保证目标数组严格递增，并且只包含 1 到 n 之间的数字。

  请返回构建目标数组所用的操作序列。

  题目数据保证答案是唯一的。

   

  示例 1：

  输入：target = [1,3], n = 3
  输出：["Push","Push","Pop","Push"]
  解释： 
  读取 1 并自动推入数组 -> [1]
  读取 2 并自动推入数组，然后删除它 -> [1]
  读取 3 并自动推入数组 -> [1,3]
  示例 2：

  输入：target = [1,2,3], n = 3
  输出：["Push","Push","Push"]
  示例 3：

  输入：target = [1,2], n = 4
  输出：["Push","Push"]
  解释：只需要读取前 2 个数字就可以停止。
  示例 4：

  输入：target = [2,3,4], n = 4
  输出：["Push","Pop","Push","Push","Push"]

  */

  // * 思路：由于是依序读取，可以递增操作

  /**
  * @param {number[]} target
  * @param {number} n
  * @return {string[]}
  * * 规避二层循环，降低时间复杂度
  */
  var buildArray = function (target, n) {
    let index = 0
    const res = []
    for (let i = 1; i <= n; i++) {
      let current = target[index]
      if (current !== i) {
        // * 非目标值
        res.push('Push', 'Pop')
      } else {
        res.push('Push')
        if(index+1 <= target.length-1){
          index++
        } else {
          break
        }
      }
    }
    return res
  };


  // * 解法二：不需要用到n

  /**
  * @param {number[]} target
  * @param {number} n
  * @return {string[]}
  * * 遍历target时，比如target为[2,4]，那么2之前的1需要push再pop，2自身只要push一次
  * * 4之前到2的3需要push再pop，4只要push一次，依次类推
  */
  var buildArray1 = function (target, n) {
    let sign = 1
    const res = []
    function pushGroup(list, time){
      for(let i = 0; i < time; i++){
        list.push('Push', 'Pop')
      }
    }
    for (let i = 0; i < target.length; i++) {
      const val = target[i]
      pushGroup(res, val-sign)
      res.push('Push')
      sign = val+1
    }
    console.log(res)
    return res.flat()
  };

  // 测试用例
  let target = [1,4], n = 4

  console.time('执行用时');
  console.log(buildArray1(target, n));
  console.timeEnd('执行用时');