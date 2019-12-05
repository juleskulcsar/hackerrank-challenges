//You are given a string containing characters  and  only. 
//Your task is to change it into a string such that there are no matching adjacent characters. 
//To do this, you are allowed to delete zero or more characters in the string.

//Your task is to find the minimum number of required deletions.

//For example, given the string s = AABAAB, remove an A at positions 0 and 3 to make s=ABAB in 2 deletions.

function alternatingCharacters(s) {
    let count = 0;
    let sArr = s.split('');
    for (let i = 0; i<sArr.length; i++){
        if(sArr[i] === sArr[i+1]){
            count++
        }    
    }
    return count;
}