function minimumBribes(q) {
  let bribes = 0;
  for (let i = q.length - 1; i >= 0; i--) {
    if (q[i] - (i + 1) >= 3) {
      return console.log("Too chaotic");
    }
    for (let j = Math.max(0, q[i] - 2); j < i; j++)
      if (q[j] > q[i]) {
        bribes++;
      }
  }
  console.log(bribes);
}
