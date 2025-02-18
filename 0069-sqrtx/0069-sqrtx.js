/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
if (x < 0) return -1; 
    let result = 0;
    for (let i = 0; i * i <= x; i++) {
        result = i; 
    }
    return result;
};
