//You will be given two arrays of integers and asked to determine all integers 
//that satisfy the following two conditions:

//The elements of the first array are all factors of the integer being considered
//The integer being considered is a factor of all elements of the second array

function getTotalX(a, b) {
    let count = 0;
    for(let i= a[a.length-1]; i<=b[0]; i++){
        let arr1 = a.every(elem=> i%elem === 0)
        let arr2 = b.every(elem=> elem%i === 0)
        arr1 && arr2 ? count++ : null
    }
    return count;
}