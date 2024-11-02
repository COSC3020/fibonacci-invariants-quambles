function fib(n) {
    if ( n < 0) return [];    // Error Case
    if (n === 0) return [0];  // Base Case 0
    if (n === 1) return [0, 1];  // Base Case 1
    
    // Recursive Case
    const arr = fib(n - 1);
    let nextFib = (arr[arr.length - 1]) + (arr[arr.length - 2])
    arr.push(nextFib);
    return arr;
}
