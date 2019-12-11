function gradingStudents(grades) {
    for (let i = 0; i<grades.length; i++){
        if (grades[i] >= 38){
            let r = grades[i]%5
            let f = Math.floor(grades[i]/5)
            r == 0 ? grades[i] : (f+1)*5 >= grades[i]+3 ? grades[i] : grades[i] = (f+1)*5
        }
    }
    return grades;
}