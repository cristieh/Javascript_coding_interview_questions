// Counting the number of zeros in a given array

const testArr = [1, 0, 0, 1, 0, 1, 0, 0, 0, 1];

function countZeroes(arr) {
    let zeroCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeroCount++;
        }
    }
    return zeroCount;
}
// Example 
const zeroCount = countZeroes(testArr);
console.log('Number of zeroes:', zeroCount);  // Output: 6




//
// Second example - count the number of zeroes in an array of 1s followed by 0s using a binary search
//

function Zeroes(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        // Check if the element at mid is 1
        // If it is 1, move left pointer to the right
        if (arr[mid] === 1) {
            left = mid + 1;
        } else {
            // If it is 0, move right pointer to the left
            right = mid - 1;
        }
    }

    // The count of zeroes will be (length of array - left index)
    return arr.length - left;
}

// Example
const arr = [1, 1, 1, 1, 0, 0, 0, 0, 0];
const Count = Zeroes(arr);
console.log('Number of zeroes:', Count);  // Output: 5
