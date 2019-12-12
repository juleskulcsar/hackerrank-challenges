function climbingLeaderboard(scores, alice) {
    let aliceRanks = [];
    let uniqueScores = Array.from(new Set(scores))
    let lowestRank = uniqueScores.length;
    for (let i = 0; i < alice.length; i++) {
        while (alice[i] >= uniqueScores[lowestRank - 1] && lowestRank > 0) {
            lowestRank--;
        }
        aliceRanks.push(lowestRank + 1);
    }
    return aliceRanks;
}