//A Discrete Mathematics professor has a class of students.
//Frustrated with their lack of discipline,
//he decides to cancel class if fewer than some number of students are present when class starts.

//Given the arrival time of each student and a threshhold number of attendees,
//determine if the class is canceled.

// k = cancelation threshhold
//a = array containing arrival times (0 = on time; >0 means late; - means early)

function angryProfessor(k, a) {
  return a.filter(t => t <= 0).length ? "YES" : "NO";
}
