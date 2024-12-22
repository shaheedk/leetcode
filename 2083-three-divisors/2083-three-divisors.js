/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function(n) {
     if (n <= 2) return false
    
    count = 0
    let i = 2;
    while( i <= (n/2)){
        if (n%i == 0) count++
        if (count > 1) return false
        i++
    }
    return count == 1
};