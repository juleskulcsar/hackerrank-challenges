//Davis has a number of staircases in his house and he likes to climb each staircase 1, 2, or 3 steps at a time. 
//Being a very precocious child, he wonders how many ways there are to reach the top of the staircase.

//Given the respective heights for each of the  staircases in his house, find and print the number of ways he can climb each staircase, 
//module 10^10 + 7 on a new line.

//For example, there is s=1 staircase in the house that is n=5 steps high. 
//Davis can step on the following sequences of steps:

// 1 1 1 1 1
// 1 1 1 2
// 1 1 2 1 
// 1 2 1 1
// 2 1 1 1
// 1 2 2
// 2 2 1
// 2 1 2
// 1 1 3
// 1 3 1
// 3 1 1
// 2 3
// 3 2

//13 ways to climb

//solution
//use fibonacci recursion. each step is the sum of the previous 3 steps
//for any step n, given that he can climb 1, 2 or 3 steps, he can access step n starting from n-3
//for example for step 5, he can access it earliest from step 2, climbing one step at a time
//but to get to step 2 he had to climb 2 possible ways
//or from step 3, for which he had 4 possible climbs
//or step 4 for which he has 7 possible climbs (4-3) + (4-2) + (4-1)
//7 + 4 + 2 = 13 possible ways to climb to step 5


let arr = [0,1,2,4]
//each index represents a step and the value at that index is the no of possible ways to climb to that step
function stepPerms(n){
    n < arr.length ? arr[n] : arr[n] = stepPerms(n-3) + stepPerms(n-2) + stepPerms(n-1)
    return arr[n];
}
