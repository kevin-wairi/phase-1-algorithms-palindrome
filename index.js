function isPalindrome(word) {
  // Write your algorithm here
  let x =word.split('').reverse().join('')
  return word === x
}
/* 
  Add your pseudocode here
*/
// - get the input,
// - create a copy of it,split it so to reverse each letter individually,
// - reverse then join
// - compare with the original input

/*
  Add written explanation of your solution here
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
