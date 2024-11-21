/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {

  let isIncreasing = true;
  let isDecreasing = true;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      isDecreasing = false; // If the current element is greater, it can't be decreasing
    }
    if (nums[i] < nums[i - 1]) {
      isIncreasing = false; // If the current element is smaller, it can't be increasing
    }
  }

  return isIncreasing || isDecreasing; // If it's either increasing or decreasing, it's monotonic


};