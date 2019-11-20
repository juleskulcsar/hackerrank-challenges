function rotLeft(a, d) {
  for (let i = 0; i < d; i++) {
    let shifted = a.shift();
    a.push(shifted);
  }
  return a;
}
