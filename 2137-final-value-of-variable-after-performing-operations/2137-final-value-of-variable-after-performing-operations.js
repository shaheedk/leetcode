/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    valX=0
    for(i=0;i<operations.length;i++){
        if(operations[i].includes("+")){
            valX++
        }else{
            valX--
        }
    }
    return valX
};