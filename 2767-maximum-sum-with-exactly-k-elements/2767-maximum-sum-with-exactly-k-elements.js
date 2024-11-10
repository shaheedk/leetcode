/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function(nums, k) {
 let m=Math.max(...nums)
let arr=[]
for(i=0;i<k;i++){
    arr.push(m)
    m+=1
}

       return   arr.reduce((acc,curr)=>acc+=curr)

};