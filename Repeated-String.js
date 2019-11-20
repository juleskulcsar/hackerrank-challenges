function repeatedString(s, n) {
  let sLength = s.length;
  let count = n / sLength;
  count = Math.floor(count);
  let remainder = n % sLength;
  let newArr = [];
  newArr.push(s.slice(0, remainder));
  let str = newArr.join("");
  let a = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "a") {
      a++;
    }
  }
  a = a * count;
  for (let j = 0; j < str.length; j++) {
    if (str[j] === "a") {
      a++;
    }
  }
  return a;
}
