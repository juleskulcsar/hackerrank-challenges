function minimumSwaps(arr) {
  let swaps = 0;
  for (let i = 0; i < arr.length; i++) {
    while (arr[i] !== i + 1) {
      let store = arr[arr[i] - 1];
      arr[arr[i] - 1] = arr[i];
      arr[i] = store;
      swaps++;
    }
  }
  return swaps;
}
