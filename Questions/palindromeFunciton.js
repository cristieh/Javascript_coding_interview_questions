function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const testSt = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

    // Check if the string is a palindrome
    const len = testSt.length;
    for (let i = 0; i < len / 2; i++) {
        if (testSt[i] !== testSt[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

// Example usage
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false
console.log(isPalindrome("elle"));
console.log(isPalindrome("hello peeps"));
