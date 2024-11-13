/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    s=s.split(' ')
s=s.slice(0,k).join(' ')
return s
};