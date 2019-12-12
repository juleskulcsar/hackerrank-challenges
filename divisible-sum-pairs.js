function divisibleSumPairs(n, k, ar) {
    let arr = ar.sort((a,b)=> a-b)
    let count = 0;
    for(let i =0; i<arr.length; i++){
        for(let j=1; j<arr.length; j++) {
            (arr[i] + arr[i+j])%k === 0 ? count++ : null
        }
    }
    return count;
}