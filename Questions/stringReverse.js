function stringReverse(str) {
    let stringReversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        stringReversed += str[i];
    }
    return stringReversed;
}

// Example usage
const originalStr = 'Hello, World!';
const reversedStr = stringReverse(originalStr);
console.log(reversedStr);  // Output: '!dlroW ,olleH'
