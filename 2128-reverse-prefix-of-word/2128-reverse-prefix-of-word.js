/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
  let index = word.indexOf(ch);
if (index !== -1) { 
let reaversepart = word.slice(0, index + 1).split('').reverse().join(''); 
        let remainingPart = word.slice(index + 1);
        word=reaversepart+remainingPart
}  
return word
};