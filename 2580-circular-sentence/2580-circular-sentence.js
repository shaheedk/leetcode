/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function(s) {
    s = s.split(" ");
    for(let i = 0; i < s.length; i++) {
        if (i == s.length - 1) {
            // Check last word with the first word
            let a = s[i];
            if (a[a.length - 1] != s[0][0]) {
                return false;
            }
        } else {
            // Check current word with the next word
            let a = s[i];
            if (a[a.length - 1] != s[i + 1][0]) {
                return false;
            }
        }
    }
    return true;
};