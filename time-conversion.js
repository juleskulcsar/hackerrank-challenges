function timeConversion(s) {
    let a = s.indexOf("PM")
    if (a === -1){
        s = s.replace("AM", "").split(":");
        s[0] === "12" ? s[0] = "00" : s[0]
    } else {
        s = s.replace("PM", "").split(":")
        s[0] === "12" ? s[0]: s[0] = parseInt(s[0]) + 12
    }
        return s = s.join(":")
}