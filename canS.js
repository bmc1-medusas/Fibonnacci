// Ben Macedo 8.18.23 12.23am
// Dynamic Programming Problems
//
// Understanding logarithms in the code as solution finder
// the purpose of the object file is to create a traveler again using the
// MEMOIZATION method in the functions in order to get
// as close as possible to requested information
//
// purpose of this obj in particular is have a 
// Traveler on a 2 dimensional grid moving from the
// Top-left corner and to travel to bottom right corner
// and the only option for now is top or down or right
//
// in regards to the function used for traveling on a grid
// with certain dimensions given by user as (m times n)?
//
// so the the function would look like this
// "canSum(m, n)"" whic is the calculator of dimensions of the grid
// where 'n' is the actual ways of how many options are to travel
const canSum=(targetSum,numbers, memo={}) =>{
    if (targetSum in memo) return memo[targetSum];
    if(targetSum ===0)return true;
    if(targetSum <0)return false;
    for (let num of numbers){
        const remainder=targetSum-num;
        if(canSum(remainder,numbers, memo)===true){
            memo[targetSum]=memo;
            return true;
        }
    }
    return false;
};
console.log(canSum(1,1)); // 1
console.log(canSum(2,3)); // 3
console.log(canSum(3,2)); // 3
console.log(canSum(3,3)); // 6
console.log(canSum(18,18)) // 2333606220
//
//
// Recipe to the solution and optimization
//
// Make it work first
//      visualize the problem as a tree
//      impletement the tree using recursive process
//      test it -as the brute searh  recursive
//
// Make it efficient
//      add a MEMO [memo] object
//      add a base case to return memo values -fetching-
//      store return values into the memo
//----
//  explanation of the canSum function is as follows
//  canSum(targetSum, numbers)
// the above takes the targetSum and an array of numbers as arguments
//
// The function should return a boolean indicating whether or not it
// is possible to generate the targetSum using numbers from the array
//
// You may use an element of the array as many times as needed
// You may assume that all input numbers are nonnegative
// and anything that is not found in the array requested for will result in false
// canSum (7,[5,3,4,7])--> true
// canSum (7,[2,4])--> false
