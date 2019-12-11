function diagonalDifference(arr) {
    let left = 0;
    let right = 0;
    for (let i = 0; i<arr.length; i++){
        left = left + arr[i][i]
        right = right + arr[i][arr.length-1-i]
    }
    let difference = left-right
    return difference * Math.sign(difference)
}