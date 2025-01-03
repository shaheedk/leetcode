/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var isDivide = function (n) {
    let num = n;
    while (n > 0) {
        let rem = n % 10;
        if (rem === 0 || num % rem !== 0) { 
            return false;
        }
        n = Math.floor(n / 10);
    }
    return true;
};

var selfDividingNumbers = function (left, right) {
    const res = [];
    for (let i = left; i <= right; i++) {
        if (isDivide(i)) {
            res.push(i);
        }
    }
    return res;
};
