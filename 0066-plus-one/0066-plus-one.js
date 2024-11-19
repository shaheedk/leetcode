/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {

    const n = digits.length;

    for (let i = n - 1; i >= 0; i--) {
        digits[i]++; 
        if (digits[i] < 10) {
            return digits; 
        }
        digits[i] = 0; 
    }

    // If all digits were 9, prepend 1 to the array
    digits.unshift(1);
    return digits;

};
