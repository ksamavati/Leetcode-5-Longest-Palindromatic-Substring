/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let chars = [...s];
  let output = chars[0];
  for (let i = 0; i < chars.length; i++) {
    // Check for odd-char palindromes
    let leftIndex = i - 1;
    let rightIndex = i + 1;
    let thisPal = chars[i];
    while (chars[leftIndex] == chars[rightIndex] && leftIndex >= 0 && rightIndex < chars.length) {
      thisPal = chars[leftIndex] + thisPal + chars[rightIndex];
      leftIndex--;
      rightIndex++;
    }
    if (thisPal.length > output.length) {
      output = thisPal;
    }

    //check for even-char palindromes
    leftIndex = i;
    rightIndex = i + 1;
    thisPal = "";
    while (chars[leftIndex] == chars[rightIndex] && leftIndex >= 0 && rightIndex < chars.length) {
      thisPal = chars[leftIndex] + thisPal + chars[rightIndex];
      leftIndex--;
      rightIndex++;
    }
    if (thisPal.length > output.length) {
      output = thisPal;
    }
  }
  return output;
};

console.log(longestPalindrome("racecar"));
