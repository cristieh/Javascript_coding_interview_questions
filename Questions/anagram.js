/**
 * Calculates the difficulty rating based on word length.
 * @param {string} str
 * @returns {string}
 */
function difficultyRating(str) {
    const length = str.length;
    if (length <= 4) {
      return "Easy";
    } else if (length <= 7) {
      return "Medium";
    } else if (length <= 10) {
      return "Hard";
    } else {
      return "Very Hard";
    }
  }
  
  /**
   * Returns if two strings are anagrams or not and the difficulty rating.
   * @param {string} str1
   * @param {string} str2
   * @returns {Object}
   */
  function areAnagrams(str1, str2) {
    // Error Handling for invalid inputs
    if (typeof str1 !== "string" || typeof str2 !== "string") {
      console.error("Invalid input: Both inputs must be strings.");
      return { result: false, difficulty: "N/A" };
    }
  
    // Process Stringsteric case; remove non-alphabetic characters
    str1 = str1.replace(/\s+/g, "");
    str1 = str1.replace(/[^a-zA-Z0-9]/g, "");
    str2 = str2.replace(/\s+/g, "");
    str2 = str2.replace(/[^a-zA-Z0-9]/g, "");
  
    // Check if the lengths are equal before proceeding
    if (str1.length !== str2.length) {
      return { result: false, difficulty: "N/A" };
    }
  
    // Sort and Compare
    const sortedStr1 = str1.split("").sort().join("");
    const sortedStr2 = str2.split("").sort().join("");
  
    // Calculate difficulty rating based on the length of the first string
    const rating = difficultyRating(str1);
  
    // Return both result and difficulty
    return {
      result: sortedStr1 === sortedStr2,
      difficulty: rating,
    };
  }
  
  // Example usage:
  const testCases = [
    { str1: "listen", str2: "silent" },
    { str1: "binary", str2: "brainy" },
    { str1: "Eliie", str2: "lie" },
    { str1: "adobe", str2: "abode" },
    { str1: "software engineer", str2: "swear nose" },
    { str1: "question mark batteries", str2: "stem cell" },
    { str1: "restful", str2: "fluster" },
    { str1: "ashley", str2: "yash lie" },
    { str1: "untitled", str2: "dilute din" },
    { str1: 666, str2: "idxii" },
    { str1: "fourth of july", str2: "joyful fourth" },
    { str1: "a gentleman", str2: "elegant man" },
  ];
  
  testCases.forEach((test, index) => {
    const outcome = areAnagrams(test.str1, test.str2);
    console.log(
      `Test ${index + 1}: ${
        outcome.result ? "Anagrams" : "Not anagrams"
      } - Difficulty: ${outcome.difficulty}`
    );
  });
  
