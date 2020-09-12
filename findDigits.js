//Given an integer, for each digit that makes up the integer
//determine whether it is a divisor.
//Count the number of divisors occurring within the integer.

function findDigits(n) {
  let count = 0;
  let str = n.toString();
  for (let i = 0; i < str.length; i++) {
    n % parseInt(str[i]) === 0 ? count++ : null;
  }
  return count;
}
