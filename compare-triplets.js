function compareTriplets(a, b) {
    let arr = [];
    let aSum = 0;
    let bSum = 0;
    for (let i = 0; i<a.length; i++){
        if (a[i]> b[i]) {
            aSum++
        } else if (a[i] < b[i]){
            bSum++
        }
    }
    arr.push(aSum, bSum)
    return arr;
}