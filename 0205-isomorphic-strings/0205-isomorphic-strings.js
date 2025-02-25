/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isIsomorphic(s, t) {
    if (s.length !== t.length) return false;

    const mapS = {};
    const mapT = {};

    for (let i = 0; i < s.length; i++) {
        let charS = s[i];
        let charT = t[i];

        // If there is already a mapping in mapS for charS, check if it matches charT
        if (mapS[charS] !== undefined) {
            if (mapS[charS] !== charT) {
                return false; // Mapped to different character
            }
            
        } else {
            mapS[charS] = charT; // Set mapping from charS to charT
        }

        // If there is already a mapping in mapT for charT, check if it matches charS
        if (mapT[charT] !== undefined) {
            if (mapT[charT] !== charS) {
                return false; // Mapped to different character
            }
        } else {
            mapT[charT] = charS; // Set mapping from charT to charS
        }
    }

    return true;
}


