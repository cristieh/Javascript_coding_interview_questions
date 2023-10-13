function factorial(n) {
    // Base case: factorial of 0 or 1 is 1
    if (n === 0 || n === 1) {
        return 1;
    }

    // Recursive case: n! = n * (n-1)!
    return n * factorial(n - 1);
}

// Example usage
console.log(factorial(5)); // Output: 120 (5! = 5 * 4 * 3 * 2 * 1)
console.log(factorial(0)); // Output: 1 (0! is defined as 1)
console.log(factorial(1));
console.log(factorial(6));
