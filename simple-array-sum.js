function simpleArraySum(ar) {
    let sum =  ar.reduce((acc, next)=> {
        return acc + next
        }, 0 )
    return sum;
}