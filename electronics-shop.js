function getMoneySpent(keyboards, drives, b) {
    let arr = []
    for(let i=0; i<keyboards.length; i++){
        for(let j =0; j<drives.length; j++){
           keyboards[i]+drives[j] <=b ? arr.push(keyboards[i]+drives[j]) : null;
        }
    }
    arr = arr.sort((a,b)=> b-a);
    return arr.length ? arr[0] : -1;
}