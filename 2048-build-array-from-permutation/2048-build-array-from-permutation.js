/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    let s=[]
      for(i=0;i<nums.length;i++){
        s[i]=nums[nums[i]]
      }
      return s
};