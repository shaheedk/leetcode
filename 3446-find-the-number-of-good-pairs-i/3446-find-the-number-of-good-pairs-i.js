/*
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var numberOfPairs = function(nums1, nums2, k) {
    let count = 0; // To store the number of good pairs
    
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            // Check if nums1[i] is divisible by nums2[j] * k
            if (nums1[i] % (nums2[j] * k) === 0) {
                count++; // Increment count if the condition is satisfied
            }
        }
    }
    return count; // Return the total count of good pairs
};

