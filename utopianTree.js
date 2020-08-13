//The Utopian Tree goes through 2 cycles of growth every year.
//Each spring, it doubles in height. Each summer, its height increases by 1 meter.
//Laura plants a Utopian Tree sapling with a height of 1 meter at the onset of spring.
//How tall will her tree be after  growth cycles?

function utopianTree(n) {
  let height = 1;
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      height = height * 2;
    } else {
      height = height + 1;
    }
  }
  return height;
}
