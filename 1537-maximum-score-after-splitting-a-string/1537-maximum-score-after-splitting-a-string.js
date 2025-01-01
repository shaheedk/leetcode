/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let maxScore = 0;

    // Iterate through possible split points
    for (let i = 1; i < s.length; i++) {
        const left = s.slice(0, i);  // Left substring
        const right = s.slice(i);   // Right substring

        // Count 0's in the left substring and 1's in the right substring
        const leftScore = (left.match(/0/g) || []).length; // Match 0's
        const rightScore = (right.match(/1/g) || []).length; // Match 1's

        // Update the maximum score
        maxScore = Math.max(maxScore, leftScore + rightScore);
    }

    return maxScore;
};
