function reverseWord(word) {
  return word.split("").reverse().join("");
}

function isPalindrome(word) {
  const reversedWord2 = reverseWord(word);
  if (reversedWord2 === word) {
    return true;
  } else {
    return false;
  }
}

/* 
  Add your pseudocode here
*/
// 1. Given array of words / Skip if convert to arrary in function
// 2. Iterate over each words in input array:
// if string reverse = input word
// return isPalindrome true
// else false

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("level"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("kayak"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("civic"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("noon"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("scream"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("taco cat"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("UFO tofu"));
}

module.exports = isPalindrome;
