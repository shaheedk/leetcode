/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
const  arr=Array.from(new Set(nums) )
arr.sort((a,b)=>b-a)
const max=arr[0]
if(arr.length<=2){
    return max
}else{
    return arr[2]
}
};