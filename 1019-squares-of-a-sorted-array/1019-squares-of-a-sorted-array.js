/**
 * @param {number[]} nums
 * @return {number[]}
 */
function sortedSquares(nums) {
  return nums.map(x => x ** 2).sort((a, b) => a - b);
}