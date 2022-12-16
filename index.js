function isPalindrome(word) {
  // Write your algorithm here
  const lowerCasedString = word.toLowerCase()
  const splitString = lowerCasedString.split("")
  const splitReverseString = splitString.reverse()
  const joinString = splitReverseString.join("");
  if(lowerCasedString !== joinString)
  {
    return false
  }else
    return true
}

/* 
  Add your pseudocode here
  write string input
  convert to lowercase
  reverse string
  compare strings
  return 'true'if string is equal
  return 'false'if string isn't equal
*/

/*
  Add written explanation of your solution here
  I turned the string to lowercase
  i split the string into arrays
  i reversed the split string
  i rejoined the reversed string and compared it to the original string

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
