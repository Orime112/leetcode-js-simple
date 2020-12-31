/**
 * * 题目名称：栈的最小值
 * * 题目地址：https://leetcode-cn.com/problems/min-stack-lcci
请设计一个栈，除了常规栈支持的pop与push函数以外，还支持min函数，该函数返回栈元素中的最小值。执行push、pop和min操作的时间复杂度必须为O(1)。


示例：

MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.getMin();   --> 返回 -2.

 */

// * 思路：

var MinStack = function() {
  this.list = []
  this.minList = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.list.push(x)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  return this.list.pop()

};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.list[this.list.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  this.minList = [...this.list].sort((a, b) => a-b)
  return this.minList[0]
};

// * 解法二：通过length管理数组元素

/**
 * initialize your data structure here.
 */
var MinStack1 = function() {
    this.stack = [] // 存放主数据
    this.helpStack = [] // 辅助栈存放排序数组
    this.length = 0
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    const len = this.length // length是当前主栈的长度
    this.stack[len] = x // 主栈赋值
    if (!len || this.helpStack[len - 1] > x) {
        // 如果1、空栈 2、辅助栈的前面一个元素 大于 新传入的元素，那么辅助栈的最后一个元素就是当前元素
        this.helpStack[len] = x
    } else {
        // 否则，前一个元素 <= 新传入的元素，那就把前一个元素插入到辅助栈的最后面
        // 这样能够保证辅助栈最后一个元素永远是当前元素中最小的
        this.helpStack[len] = (this.helpStack[len - 1])
    }
    this.length = len + 1 // push结束后length+1，为下一次插入做准备
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const len = this.length
    this.length = len - 1
    return this.stack[len -  1]
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
return this.helpStack[this.length - 1]
};
