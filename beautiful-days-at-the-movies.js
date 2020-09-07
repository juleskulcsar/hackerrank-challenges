//Given a range of numbered days,[i...j]  and a number k,
//determine the number of days in the range that are beautiful.
//Beautiful numbers are defined as numbers where |i = reverse(i)| is evenly divisible by k.
//If a day's value is a beautiful number, it is a beautiful day.
//Print the number of beautiful days in the range.

function beautifulDays(i, j, k) {
  let reversed;
  let difference;
  let count = 0;
  for (let l = i; l <= j; l++) {
    reversed = parseInt(
      l
        .toString()
        .split("")
        .reverse()
        .join("")
    );
    difference = Math.abs((l - reversed) / k);
    Number.isInteger(difference) ? count++ : null;
  }
  return count;
}
