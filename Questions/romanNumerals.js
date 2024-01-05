// Calculate roman numerals

function romanToNumber(roman) {
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const romanString = roman.toUpperCase();

  if (
    !/^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/.test(
      romanString
    )
  ) {
    throw new Error("Invalid Roman numeral input.");
  }

  let number = 0;
  let previousValue = 0;

  for (let i = romanString.length - 1; i >= 0; i--) {
    const currentValue = romanMap[romanString[i]];

    if (currentValue < previousValue) {
      number -= currentValue;
    } else {
      number += currentValue;
      previousValue = currentValue;
    }
  }

  // Check if the converted number exceeds the Roman numeral range (3999)
  if (number > 3999) {
    throw new Error(
      "The converted number exceeds the Roman numeral range of 3999."
    );
  }

  return number;
}

// Example usage:
try {
  const romanNumeral = "MMMCMXCIX";
  console.log(romanToNumber(romanNumeral)); // Expected output: 3999
} catch (error) {
  console.error(error.message); // This will handle the error and log the error message
}
