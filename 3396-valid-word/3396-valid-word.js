/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function(word) {
    // Check if word length is at least 3 and contains only letters and digits
    if (word.length >= 3 && /^[A-Za-z0-9]+$/.test(word)) {
        // Check if the word contains at least one vowel
        if (/[aeiouAEIOU]/.test(word) && /[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/.test(word)) {
            return true;
        }
    }
    return false;
};
