/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
     let arr = [];

    // Loop through the array to find indices where nums[i] === target
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            arr.push(i);
        }
    }

    // If no indices are found, return [-1, -1]
    if (arr.length === 0) {
        return [-1, -1];
    }

    // Return the first and last index of the target
    return [arr[0], arr[arr.length - 1]];
};
