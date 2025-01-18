/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
 let total = 0;

    for (let day = 0; day < n; day++) {
        total += Math.floor(day / 7) + 1 + (day % 7);
    }

    return total;    
};