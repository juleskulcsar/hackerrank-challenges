function pageCount(n, p) {
    let left = Math.floor(p / 2);
    let right = Math.floor(n / 2) - left;
    return left <= right ? left : right;
}