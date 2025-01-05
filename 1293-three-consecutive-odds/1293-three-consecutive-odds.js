/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    let count = 0; // To track consecutive odd numbers
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            count++; // Increment count if the number is odd
            if (count === 3) {
                return true; // Return true as soon as 3 consecutive odd numbers are found
            }
        } else {
            count = 0; 
        }
    }
    return false; // Return false if no three consecutive odds are found
};
