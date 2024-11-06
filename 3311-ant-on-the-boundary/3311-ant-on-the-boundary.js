/**
 * @param {number[]} nums
 * @return {number}
 */
var returnToBoundaryCount = function(nums) {
    let count=0 ;
    let sum=0;
    for(i=0;i<nums.length;i++){
        sum+=nums[i]
        if(sum===0)count++
    }
    return count
};