/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
   arr1=nums1.slice(0,m)
   arr2=nums2.slice(0,n)
 const merged=[...arr1,...arr2]
  merged.sort((a,b)=>a-b)

     for (let i = 0; i < merged.length; i++){
        nums1[i]=merged[i]

     }
};