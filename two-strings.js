//Given two strings, determine if they share a common substring. 
//A substring may be as small as one character.


function twoStrings(s1, s2) {
    let arr = [];
    for(let i =0; i<s1.length; i++){
        s2.indexOf(s1[i]) > -1 ? arr.push(s2[s2.indexOf(s1[i])]) : null
    }
    return arr.length > 0 ? "Yes" : "No"
}
