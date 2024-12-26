/**
 * @param {number} n
 * @return {boolean}
 */
const canAliceWin = f = (n, k = 10) => n < k ? false : !f(n - k, k - 1);