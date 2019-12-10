//Given the words in the magazine and the words in the ransom note, 
//print Yes if he can replicate his ransom note exactly using whole words from the magazine; otherwise, print No.

function checkMagazine(magazine, note) {
    function checkMagazine(magazine, note) {
        let arr = []
        for (let i = 0; i<note.length; i++){
            if( magazine.indexOf(note[i]) > -1 ) {
                arr.push(magazine[magazine.indexOf(note[i])])
                magazine[magazine.indexOf(note[i])] = ""
            }
        }
        arr.length === note.length ? console.log("Yes") : console.log("No")
    }    
}