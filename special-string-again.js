//A string is said to be a special string if either of two conditions is met:

//All of the characters are the same, e.g. aaa.
//All characters except the middle one are the same, e.g. aadaa.
//A special substring is any substring of a string which meets one of those criteria. 
//Given a string, determine how many special substrings can be formed from it.
//The special palindromic substrings of "aaaa" are :{"a","a","a","a","aa","aa","aa","aaa","aaa","aaaa"}


//this solution will fail due to the time constraints in the challenge
// function substrCount(n, s) {
//     let count = s.length;
//     let arr = [];
//     let a = '';

//     for(let i = 0; i < n; i++) {
//         if(arr.length === 0 ){
//             a = a + s[i]
//             arr.push(a)
//             count += arr.length
//         } else if(s[i] === s[i+1]) {
//             a = a + s[i];
//             arr.push(a + s[i+1])
//             count += arr.length
//         } else {
//             let b = arr[arr.length-1]
//             for(let j = 1; j<=b.length; j++){
//                 if(s[i+j] === arr[arr.length-1][0]){
//                     count++
//                 }
//             }
//         }
//     }
//     return count
// }

//solution
function substrCount(n, s) {
    let count = 0
    let a = ''
    for(let i = 0; i < n; ++i) {
        if(!a || a[0] === s[i]) {
            a += s[i]
        } else {
            let j = 1
            while(j <= a.length && s[i + j] === a[0]) {
                ++j
                ++count
            }
            a = s[i]
        }
        count += a.length
    }
    return count
}