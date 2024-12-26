/**
 * @param {number} n
 * @return {boolean}
 */
var canAliceWin = function(n) {
    return '.10.11.12.13.14.15.16.17.18.27.28.29.30.31.32.33.40.41.42.43.44.49.50.'.includes(`.${n}.`);  
};