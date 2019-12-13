function findMedian(arr) {
    arr = arr.sort((a,b)=>a-b)
    let median = (arr.length+1)/2;
    let avg;
    median%2 === 0 ? avg = arr[median-1] : avg = (arr[Math.floor(median)-1] + arr        [Math.round(median)-1])/2;
    return avg;
}