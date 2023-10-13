const fruitArray = ["apple", "pear", "peach", "banana", "passionfruit", "pear", "grapes"];

const arrayManipulation = {
    reverseArray: function(arr) {
        return arr.slice().reverse();
    },

    removeDuplicates: function(arr) {
        return arr.filter((item, index) => arr.indexOf(item) === index);
    },

    rotateArray: function(arr, k) {
        const len = arr.length;
        const rotatedArray = [];
        for (let i = 0; i < len; i++) {
            const rotatedIndex = (i + k) % len;
            rotatedArray[rotatedIndex] = arr[i];
        }
        return rotatedArray;
    }
};

// Example usage

console.log('Original Array:', fruitArray);
console.log(fruitArray.reverse());
console.log('Reversed Array:', arrayManipulation.reverseArray(fruitArray));
console.log('Array with Duplicates Removed:', arrayManipulation.removeDuplicates(fruitArray));
console.log('Rotated Array (2 positions):', arrayManipulation.rotateArray(fruitArray, 2));
