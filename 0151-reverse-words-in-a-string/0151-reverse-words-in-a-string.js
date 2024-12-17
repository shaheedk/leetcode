/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
 let result=s.replace(/\s+/g, ' ').trim().split(" ")
 s=result.reverse().join(' ')
 return s
};