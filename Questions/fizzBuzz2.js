function fizzBuzz(n) {
    
    for (let i = 1; i <= n; i++) {
        let output = '';
        
        if (i % 3 === 0) {
            output += 'Fizz';
        }
        if (i % 5 === 0) {
            output += 'Buzz';
        }

        console.log(output || i);
    }
}

// Example usage
const N = 20;  // Print numbers from 1 to 20
fizzBuzz(N);

