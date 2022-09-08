function hasTargetSum(array, target) {
  // Write your algorithm here
  for(let i = 0; i < array.length; i++){
    for(let j = i + 1; j < array.length; j++){
      if(array[i] + array[j] === target){
        return true;
      }
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  Time Complexity = O(n^2)
*/

/* 
  Add your pseudocode here

  1. Iterate over the array
  2. For every element in the array, check if it's sum with the other elements in the array is equal to the target integer.
  3. Return TRUE if the sum in equal to the target integer
*/

/*
  Add written explanation of your solution here

  The function should receive two arguments, an array and a target integer.
  The function should return TRUE if any pair of numbers in the array adds up to the target integer
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
