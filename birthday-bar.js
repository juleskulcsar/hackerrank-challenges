function birthday(s, d, m) {
    let count = 0;
    for(let i = 0; i < s.length; i++){
        let arr = s.slice(i, i+m)
        let sum = arr.reduce((acc,next) => {
                return acc + next
            }, 0)
        sum === d ? count++ : null
     }
     return count
}