/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
 let words= sentence.split(' ')
 for(i=0;i<words.length;i++){
    if(words[i].startsWith(searchWord) ){
        return i+1
    }
 }
 return -1
};