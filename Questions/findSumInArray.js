function twoSum(nums, target) {
    const numMap = {};  // Maps numbers to their indices

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        // If the complement exists in the map, we found a solution
        if (numMap.hasOwnProperty(complement)) {
            return [numMap[complement], i];
        }

        // Store the current number and its index in the map
        numMap[nums[i]] = i;
    }

    return null;  // No solution found
}

// Example usage
const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);

if (result) {
    console.log(`Indices of the two numbers: [${result[0]}, ${result[1]}]`);
    console.log(`Numbers: ${nums[result[0]]}, ${nums[result[1]]}`);
} else {
    console.log('No solution found.');
}
