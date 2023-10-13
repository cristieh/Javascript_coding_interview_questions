function flattenArray(arr) {
    let flattened = [];

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
          
            // Recursively flatten nested arrays
            flattened = flattened.concat(flattenArray(arr[i]));
        } else {
            flattened.push(arr[i]);
        }
    }

    return flattened;
}

// Example usage
const nestedArray = [1, [2, [3, 4], 5], [6, 7]];
const flattenedArray = flattenArray(nestedArray);
console.log(flattenedArray);  // Output: [1, 2, 3, 4, 5, 6, 7]
