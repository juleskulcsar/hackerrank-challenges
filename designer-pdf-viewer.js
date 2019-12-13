function designerPdfViewer(h, word) {
    let alphabetLetters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let string = word.split('')
    for (let i =0; i<string.length; i++){
        string[i] = h[alphabetLetters.indexOf(string[i])]
    }
    let max = Math.max(...string)
    let area = max*string.length
    return area;
}