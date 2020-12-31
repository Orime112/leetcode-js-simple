/**
 * * 题目名称：用栈实现队列
 * * 题目地址：https://leetcode-cn.com/problems/implement-queue-using-stacks
 */

// * 思路：

/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
  this.stack1 = []
  this.stack2 = []
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.stack1.push(x)
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  if(this.stack2.length){
    return this.stack2.pop()
  } else {
    while(this.stack1.length){
      this.stack2.push(this.stack1.pop())
    }
    if(this.stack2.length){
      let res = this.stack2.pop()
      return res
    } else {
      return null
    }
  }
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  if(this.stack2.length){
    return this.stack2[this.stack2.length - 1]
  } else {
    while(this.stack1.length){
      this.stack2.push(this.stack1.pop())
    }
    if(this.stack2.length){
      let res = this.stack2[this.stack2.length - 1]
      return res
    } else {
      return null
    }
  }
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return !(this.stack1.length || this.stack2.length)
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

// * 解法二：速度并没有多少提升的解法
/**循环队列 */
class MyQueue1 {
    constructor() {
        this.pushArr = [];
        this.popArr = [];
    }
    /**将一个元素放入队列的尾部 */
    push(value) {
        this.pushArr.push(value);
    }
    /**从队列首部移除元素 */
    pop() {
        if(!this.popArr.length){
            while(this.pushArr.length){
                this.popArr.push(this.pushArr.pop());
            }
        }
        return this.popArr.pop();
    }
    /**返回队列首部的元素 */
    peek() {
        if(!this.popArr.length){
            while(this.pushArr.length){
                this.popArr.push(this.pushArr.pop());
            }
        }
        return this.popArr[this.popArr.length - 1];
    }
    /**返回队列是否为空 */
    empty() {
        return !this.pushArr.length && !this.popArr.length;
    }
}

// 测试用例
let obj = new MyQueue()
obj.push(1)
obj.push(2)
console.log(obj.pop())
console.log(obj.peek())
console.log(obj.empty());
