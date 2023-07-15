function reverseString(str) {
  // type your code here

  let reversed = '';
  for (let i = str.length - 1; i > -1; --i) {
    reversed = reversed + str[i]
  }
  return reversed;
}


// MANUAL TEST
// run "node" + file's name to see our console.log

// console.log("Expecting: 'yako'");
// console.log("=>", reverseString("okay"));



if (require.main === module) {
  // add your own tests in here

  
  // for these tests, run "npm test"
  console.log("Expecting: 'yako'");
  console.log("=>", reverseString("okay"));
  
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file

// And a written explanation of your solution
