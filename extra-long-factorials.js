//Calculate and print the factorial of a given integer.
//for example if n=30, we calculate 30*29*28*...*3*2*1
//use BigInt

function extraLongFactorials(n) {
  let factorial = 1n;
  for (let i = 1n; i <= n; i++) {
    factorial = factorial * i;
  }
  console.log(factorial.toString());
  return;
}
