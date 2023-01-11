var longestPalindrome = function (s) {
  let output = s.charAt(0);

  // loop through each char in input str
  for (let i = 0; i < s.length - 1; i++) {
    // Check for palindromes with an odd number of characters
    // by starting the check with the characters one left and one right of i
    let thisPal = getPalindromeFromCenter(i - 1, i + 1, s);

    // replace output if thisPal is longer than previous
    if (thisPal.length > output.length) {
      output = thisPal;
    }
    // Check for palindromes with an even number of characters
    // by starting the check with i and its neighbor
    thisPal = getPalindromeFromCenter(i, i + 1, s);

    // replace output if thisPal is longer than previous
    if (thisPal.length > output.length) {
      output = thisPal;
    }
  }

  return output;
};

const getPalindromeFromCenter = (left, right, s) => {
  let output = "";
  while (s.charAt(left) == s.charAt(right) && left >= 0 && right < s.length) {
    output = s.substring(left, right + 1);
    left--;
    right++;
  }
  return output;
};

console.log(longestPalindrome("235racecar5342"));
console.log(longestPalindrome("racecar"));
console.log(longestPalindrome("nononoyesyesyes"));
console.log(longestPalindrome("wertrtrdrdracecardrdtrtrqvebananabf"));
