function jumpingOnClouds(c) {
  let steps = 0;
  for (let i = 0; i < c.length; i++) {
    if (c[i] === 0) {
      if (c[i] === c[i + 1]) {
        steps++;
        i++;
      }
    } else {
      steps++;
    }
  }
  return steps;
}
