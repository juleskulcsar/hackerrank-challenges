//Sherlock considers a string to be valid if all characters of the string appear the same number of times. 
//It is also valid if he can remove just 1 character at 1 index in the string, 
//and the remaining characters will occur the same number of times. 
//Given a string s, determine if it is valid. If so, return YES, otherwise return NO.

//For example, if s = abc, it is a valid string because frequencies are {a: 1, b: 1, c: 1}. 
//So is s = abcc because we can remove one c and have 1 of each character in the remaining string. 
//If s = abccc however, the string is not valid as we can only remove 1 occurrence of c. 
//That would leave character frequencies of {a: 1, b: 1, c:2}.

function isValid(s) {
    let arr = [];
    let count = 0;
    s = s.split('').reduce((acc, next) =>{
        acc[next] ? acc[next] = acc[next] + 1 : acc[next] =1;
        return acc;
    }, {})
    for (let key in s){
        arr.push(s[key])
    }
    arr.sort((a, b) => a - b)
    if(arr[0] === 1 && arr[0] !== arr[1]){
        for(let i = 2; i < arr.length; i++){
            if(arr[1] !== arr[i]){
                count++
            }
        }
        return count >0 ? "NO" : "YES"
    } 
    if(arr[0] === 1 && arr[0] === arr[1]){
        return "NO"
    }
    if(arr[0] !== 1){
        return arr[arr.length-1]-arr[0] > 1 ? "NO" : "YES"
    }
}