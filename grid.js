// Ben Macedo 8.18.23 09.50am
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
// "gridTravel(m, n)"" whic is the calculator of dimensions of the grid
// where 'n' is the actual ways of how many options are to travel
const gridTravel=(m , n)=>{
    // are arguments in the memo?
    const key =m+ ',' +n;
    if (key in memo) return memo[key];
    if(m === 1 && n===1) return 1;
    if(m === 0 || n===0) return 0;
    memo[key]=gridTravel(m-1,n)+gridTraveler(m,n-1);
    return gridTravel(m-1,n)+gridTravel(m,n-1);
};
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
console.log(gridTravel(1,1)); // 1
console.log(gridTravel(2,3)); // 3
console.log(gridTravel(3,2)); // 3
console.log(gridTravel(3,3)); // 6
//console.log(gridTravel(18,18)) // 2333606220
