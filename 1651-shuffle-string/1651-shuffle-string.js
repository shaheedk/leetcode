/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
   let restoredArr = new Array(s.length); 
for (let i = 0; i < indices.length; i++) {
    restoredArr[indices[i]] = s[i];
}

let restoredString = restoredArr.join("");
return restoredString
    
};