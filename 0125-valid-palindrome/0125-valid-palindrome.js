/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
     s= s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
  reversed=s.split('').reverse().join('')
  
  return s===reversed
  
};