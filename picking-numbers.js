//Given an array of integers, find and print the maximum number of integers you can select from the array 
//such that the absolute difference between any two of the chosen integers is less than or equal to 1

function pickingNumbers(a) {
    let count = 0;
    let arr = new Array(100).fill(0)
    a.forEach(element => {
        arr[element]++
    });
    for(let j =0; j<arr.length-1; j++){
        arr[j] + arr[j+1] > count ? count = arr[j] + arr[j+1] : null
    }
    return count;
}