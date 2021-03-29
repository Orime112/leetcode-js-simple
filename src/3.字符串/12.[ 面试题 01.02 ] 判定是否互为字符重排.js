/**
 * * 题目名称：判定是否互为字符重排
 * * 题目地址：https://leetcode-cn.com/problems/check-permutation-lcci
给定两个字符串 s1 和 s2，请编写一个程序，确定其中一个字符串的字符重新排列后，能否变成另一个字符串。

示例 1：

输入: s1 = "abc", s2 = "bca"
输出: true 
示例 2：

输入: s1 = "abc", s2 = "bad"
输出: false
说明：

0 <= len(s1) <= 100
0 <= len(s2) <= 100

 */

// * 思路：统计字符串出现次数的map结构一致

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var CheckPermutation = function(s1, s2) {
  if(s1.length !== s2.length) return false
  const map1 = getCount(s1)
  const map2 = getCount(s2)
  if(Object.keys(map1).length !== Object.keys(map2).length) return false
  let res = true
  console.log(Object.entries(map1), 'Object.entries(map1)',map1)
  for(let [k, v] of Object.entries(map1)){
    if(v !== map2[k]){
      res = false
      break
    }
  }
  return res
};

function getCount(str){
  const map = {}
  for(let v of str){
    map[v] = map[v] ? map[v]+1 : 1
  }
  return map
}


// * 思路二：直接排序看是否相等

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var CheckPermutation1 = function(s1, s2) {
  return s1.split('').sort().join('') === s2.split('').sort().join('')
};

// * 思路三：一次循环即可搞定

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var CheckPermutation2 = function(s1, s2) {
  //长度不对等,肯定不行的
  if(s1.length!=s2.length){
      return false;
  }
  s2 = s2.split('');
  //直接循环
  for(let s of s1){
      if(s2.indexOf(s)==-1){
          return false;
      }else{
        // * 如果能够找到则就地删除
          s2.splice(s2.indexOf(s),1);
      }
  }
  return true;
};

// 作者：yi-zhi-ma
// 链接：https://leetcode-cn.com/problems/check-permutation-lcci/solution/zhi-jie-xun-huan-by-yi-zhi-ma/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

// 测试用例
let s1 = "abc", s2 = "acb"

console.time('执行用时');
console.log(CheckPermutation(s1, s2));
console.log(CheckPermutation1(s1, s2));
console.log(CheckPermutation2(s1, s2));
console.timeEnd('执行用时');