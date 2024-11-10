/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let str=s.trim().split(' ')
    str=str[str.length-1].split('')
 return str.length
};