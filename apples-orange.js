function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let apple =apples.reduce((acc,next) => acc + (s - a <= next && next <= t - a), 0);
    let orange = oranges.reduce((acc,next) => acc + (s - b <= next && next <= t - b), 0);
    console.log(apple);
    console.log(orange);
}