/**
 * @param {number} n
 * @return {number}
 */

function climbStairs(n) {
    if (n === 1) {
        return 1;
        
    }
    
    if (n === 2) {
        return 2;
    }

    let first = 1;
    let second = 2;

    for ( i = 3; i <= n; i++) {
        let third = first + second;
        first = second;
        second = third;
    }

    return second;
}
