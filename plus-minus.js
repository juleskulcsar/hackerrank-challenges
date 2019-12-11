//Given an array of integers, calculate the fractions of its elements that are positive, negative, and are zeros. 
//Print the decimal value of each fraction on a new line.

function plusMinus(arr) {
    let plusSum = 0;
    let minusSum = 0;
    let zeroSum = 0;
    arr.forEach(elem => {
        if(elem === 0) {
            zeroSum++
        } else {
            elem > 0? plusSum ++ : minusSum++
        }
    })
    console.log((plusSum/arr.length).toFixed(6))
    console.log((minusSum/arr.length).toFixed(6))
    console.log((zeroSum/arr.length).toFixed(6))
}