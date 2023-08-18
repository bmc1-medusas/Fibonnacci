// Ben Macedo 8.18.23 07.11am
// Fibonacci Memoization 
// Function 'fib(n)' that takes a number as an argument
// This function should return the n-th number of the Fibonacci sequence
//
// Now to explain the above sequence is the 1st and 2nd number of the sequence is 1
// and to generate the next number of the sequence, we sum the previous two
// thus, it will help us find and calculate the 40th number of fibonacci sequence
// using java script
//
const foo = (n) => {
    if (n <= 1) return 1;
    return fib(n-1)+fib(n-2);
    //foo(n -1);
}
console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
