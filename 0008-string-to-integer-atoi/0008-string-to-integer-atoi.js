/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    const i = Number.parseInt(s);

    const limit = Math.pow(2, 31)

    if (i) {
        if (i <= -limit) return -limit
        if (i >= limit - 1) return limit - 1

        return i
    }

    return 0;
};