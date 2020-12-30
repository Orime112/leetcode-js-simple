/**
 * * 题目名称：最近的请求次数
 * * 题目地址：https://leetcode-cn.com/problems/number-of-recent-calls
写一个 RecentCounter 类来计算特定时间范围内最近的请求。

请你实现 RecentCounter 类：

RecentCounter() 初始化计数器，请求数为 0 。
int ping(int t) 在时间 t 添加一个新请求，其中 t 表示以毫秒为单位的某个时间，并返回过去 3000 毫秒内发生的所有请求数（包括新请求）。确切地说，返回在 [t-3000, t] 内发生的请求数。
保证 每次对 ping 的调用都使用比之前更大的 t 值。

 

示例：

输入：
["RecentCounter", "ping", "ping", "ping", "ping"]
[[], [1], [100], [3001], [3002]]
输出：
[null, 1, 2, 3, 3]

解释：
RecentCounter recentCounter = new RecentCounter();
recentCounter.ping(1);     // requests = [1]，范围是 [-2999,1]，返回 1
recentCounter.ping(100);   // requests = [1, 100]，范围是 [-2900,100]，返回 2
recentCounter.ping(3001);  // requests = [1, 100, 3001]，范围是 [1,3001]，返回 3
recentCounter.ping(3002);  // requests = [1, 100, 3001, 3002]，范围是 [2,3002]，返回 3

 */

// * 解法一：在类中定义一个栈结构，存储时间毫秒请求，每次ping的时候判断
var RecentCounter = function() {
  this.stack = []
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
  // * 每次ping的时候将本次请求时间存入栈中
  this.stack.push(t)
  // * 划分区间，从后向前遍历stack，时间区间以内的计数+1
  let count = 0
  const minTime = t - 3000
  for(let i = this.stack.length -1; i >= 0; i--){
    if(this.stack[i] >= minTime){
      count++
    } else {
      break
    }
  }
  return count
};

// * 解法二：由于表明ping传入的值是递增的，所以前面没有包含的值后面一定不会包含到，所以使用队列解决更好
var RecentCounter1 = function() {
  this.stack = []
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter1.prototype.ping = function(t) {
  // * 每次ping的时候将本次请求时间存入栈中
  this.stack.push(t)
  // * 划分区间，从后向前遍历stack，时间区间以内的计数+1
  const minTime = t - 3000
  while(this.stack[0] < minTime){
    this.stack.shift()
  }
  return this.stack.length
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */



// 测试用例
let recentCounter = new RecentCounter();
console.time('执行用时');
console.log(recentCounter.ping(1));     // requests = [1]，范围是 [-2999,1]，返回 1
console.log(recentCounter.ping(100));   // requests = [1, 100]，范围是 [-2900,100]，返回 2
console.log(recentCounter.ping(3001));  // requests = [1, 100, 3001]，范围是 [1,3001]，返回 3
console.log(recentCounter.ping(3002));  // requests = [1, 100, 3001, 3002]，范围是 [2,3002]，返回 3
console.timeEnd('执行用时');