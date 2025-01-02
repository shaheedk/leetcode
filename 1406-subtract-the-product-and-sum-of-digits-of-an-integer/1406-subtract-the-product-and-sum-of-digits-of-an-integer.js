/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let arr= Array.from(String(n), Number);
let sum=arr.reduce((a,b)=>a+b,0)
let mult=arr.reduce((a,b)=>a*b,1)
return mult-sum
};