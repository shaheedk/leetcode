function subtractProductAndSum(n: number): number {
     let arr: number[] = Array.from(String(n), Number); 
    let sum: number = arr.reduce((a, b) => a + b, 0); 
    let mult: number = arr.reduce((a, b) => a * b, 1); // Calculate product of digits
    return mult - sum;
};