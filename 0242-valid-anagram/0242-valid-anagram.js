/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
       if (s.length !== t.length) {
        return false;
              
    }

    // Step 2: Sort and compare
    let sortedStr1 = s.split('').sort().join('');
    let sortedStr2 = t.split('').sort().join('');

    return sortedStr1 === sortedStr2;

};
