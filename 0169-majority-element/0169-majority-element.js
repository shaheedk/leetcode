/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
const  frequency={}
     
     const majorityCount = Math.floor(nums.length / 2);
     for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        frequency[num] = (frequency[num] || 0) + 1;

        if (frequency[num] > majorityCount) {
            return num; // Majority element found
        }
    }
  return null; 
}

