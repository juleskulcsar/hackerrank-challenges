function breakingRecords(scores) {
    let maxScore = scores[0];
    let minScore = scores[0];
    let countMaxScores = 0;
    let countMinScores = 0;
    for(let i=1; i < scores.length; i++) {
        if(scores[i] > maxScore) {
            maxScore = scores[i];
            countMaxScores++;
        } else if(scores[i] < minScore) {
            minScore = scores[i];
            countMinScores++;
        }
    }
  return [countMaxScores, countMinScores];
}