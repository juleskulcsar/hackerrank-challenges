//Starting with a 1-indexed array of zeros and a list of operations, 
//for each operation add a value to each of the array element between two given indices, inclusive. 
//Once all operations have been performed, return the maximum value in your array.

//sample input
// (n m)
// 5 3
// (a b  k)
// 1 2 100
// 2 5 100
// 3 4 100
//The first line contains two space-separated integers n and m, 
//the size of the array and the number of operations.
//Each of the next m lines contains three space-separated integers
//a,b and k, the left index, right index and summand.
//arrayManipulation has the following parameters:
//n - the number of elements in your array
//queries - a two dimensional array of queries where each queries[i] contains three integers, a, b, and k.

//EXPLANATION
//to solve this, must know Difference array and prefix sum notions
//difference array is a new array where each element equals the difference between itself and the element before it
//except the first one which is ignored
//prefix sum is the oposite of difference array. 
//each element is equal to the sum of itself and the element before it

function arrayManipulation(n, queries) {
	let arr = [];
	let max = 0;
	for(let i = 1; i<=n; i++){
		arr.push(0);
	}
	for (let i = 0; i < queries.length; i++) {
        //remember that the n array is 1-indexed, in the challenge description
        arr[queries[i][0]-1] = arr[queries[i][0]-1] + queries[i][2];
        //difference array
        if (queries[i][1] < arr.length) {
            arr[queries[i][1]] = arr[queries[i][1]] - queries[i][2];
        }
    }
    //prefix sum array
    for (let j = 1; j < n; j++) {
        arr[j] += arr[j-1];
    }
    for (let k = 0; k < arr.length; k++) {
        max = Math.max(max, arr[k]);
    }
    return max;
}

//after the first iteration in the first for loop, we'll have:
//[100, 0, 0, 0,0]
//after the if condition, we'll have: [100, 0, -100, 0, 0]
//second iteration:
//arr after adding k:  ([100, 100, -100, 0, 0]
//arr after substracting k: [100, 100, -100, 0, 0]
//third iteration:
//arr after adding k: [100, 100, 0, 0, 0]
//arr after substracting k: [100, 100, 0, 0, -100]
//final array after using prefix sum in the third loop: [100, 200, 200, 200, 100]
//you can observe that the final array after using prefix sum 
//is identical with what we would get if we would use the following solution:

// function arrayManipulation(n, queries) {
// 	let arr = [];
// 	let max = 0;
// 	for(let i = 1; i<=n; i++){
// 		arr.push(0);
// 	}
// 	for (let i = queries[i][0]-1; i <= queries[i][1]-1; i++) {
//         arr[queries[i][0]-1] = arr[queries[i][0]-1] + queries[i][2];
//         console.log("arr is: ", arr)
//     }
//  for (let k = 0; k < arr.length; k++) {
//    max = Math.max(max, arr[k]);
//  }
// return max;
// }

//though the second solution works, it failes tests due to not respecting time constraints
//for only a couple of iterations, the second solution works fine, however
//imagine having to perform this: https://hr-testcases-us-east-1.s3.amazonaws.com/1636/input07.txt?AWSAccessKeyId=AKIAJ4WZFDFQTZRGO3QA&Expires=1575585139&Signature=nAA2tsBMUobhucFpl9aVFG3lIX8%3D&response-content-type=text%2Fplain
//and that is the reason we use difference array and prefix sum, because it reduces the amount of calculations
//because we only add k to the a index and we substract from index b+1
//in the second solution we add k to all indexes between a and b, which implies more calculations.
