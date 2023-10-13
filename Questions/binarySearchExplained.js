function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;  // Target found at index mid
        } else if (arr[mid] < target) {
            left = mid + 1;  // Search in the right half
        } else {
            right = mid - 1;  // Search in the left half
        }
    }

    return -1;  // Target not found in the array
}

// Example usage
const sortedArray = [1, 3, 5, 7, 9, 11, 13];
const targetValue = 9;
const resultIndex = binarySearch(sortedArray, targetValue);

if (resultIndex !== -1) {
    console.log(`Target ${targetValue} found at index ${resultIndex}.`);
} else {
    console.log(`Target ${targetValue} not found in the array.`);
}

/**
* This simple binary search function searches for a target value in a 
* sorted array and returns its index if found, or -1 if not found.
*
* In the example, Math.floor() is a JavaScript method that returns the
* largest integer less than or equal to a given number. 
* It rounds down a decimal or floating-point number to the nearest integer below it.
**/
