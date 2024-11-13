/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isSubsequence(s, t) {
    let sIndex = 0; // Pointer for string s

    for (let i = 0; i < t.length; i++) {
        if (s[sIndex] === t[i]) {
            sIndex++; // Move to the next character in s
        }

        // If we've checked all characters in s, return true
        if (sIndex === s.length) {
            return true;
        }
    }

    // If we finish the loop and haven't matched all characters in s
    return sIndex === s.length;
}


