// Ben Macedo 8.18.23 09.50am
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
// "howSum(m, n)"" whic is the calculator of dimensions of the grid
// where 'n' is the actual ways of how many options are to travel
const howSum=(targetSum,numbers)=>{
    if(targetSum ===0) return[];
    if(targetSum <0) return null;

    for (let num of numbers){
        const remainder = targetSum -num;
        const remainderResult = howSum(remainder, numbers);
        if(remainderResult !== null){
            return [...remainderResult,num];
        }
    }
    return null;
};
console.log(howSum(7,[2,3]));     // 3,2,2
console.log(howSum(7,[5,3,4,7])); // ..[4,3]
console.log(howSum(7,[2,4]));     // null
console.log(howSum(8,[2,3,5]));   // [2,-2,-2,-2]
console.log(howSum(300,[7,14]))   // null
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