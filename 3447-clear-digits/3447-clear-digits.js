/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function(s) {
    let stack = []; // Use stack for processing
    for (let char of s) {
        if (!isNaN(char)) { // If the character is a digit
            if (stack.length > 0) {
                stack.pop(); // Remove the closest non-digit character to the left
            }
        } else {
            stack.push(char); // Add non-digit characters to the stack
        }
    }
    return stack.join(''); // Return the resulting string
};
