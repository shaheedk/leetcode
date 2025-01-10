/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
   let trimmedString = s.trim(); 
    let words=trimmedString.split(' ')
    let lastWord = words[words.length - 1]; 
    return lastWord.length
};