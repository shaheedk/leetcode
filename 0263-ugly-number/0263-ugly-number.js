
var isUgly = function(n) {
    if (n <= 0) return false;  // Negative numbers and 0 are not ugly numbers
    while (n % 2 === 0) n /= 2;  // Divide by 2 as long as it's divisible by 2
    while (n % 3 === 0) n /= 3;  // Divide by 3 as long as it's divisible by 3
    while (n % 5 === 0) n /= 5;  // Divide by 5 as long as it's divisible by 5
    return n === 1;
};
