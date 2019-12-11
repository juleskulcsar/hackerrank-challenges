//Given five positive integers, find the minimum and maximum values that can be calculated 
//by summing exactly four of the five integers. Then print the respective minimum and maximum values 
//as a single line of two space-separated long integers.

function miniMaxSum(arr) {
    arr = arr.sort((a,b)=> a-b)
    let arrSum = arr.reduce((acc, next)=>{
        return acc + next
    }, 0)
    console.log(arrSum-arr[arr.length-1], arrSum-arr[0])
}