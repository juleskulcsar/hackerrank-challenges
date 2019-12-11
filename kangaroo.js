function kangaroo(x1, v1, x2, v2) {
    let jumps = (x2 - x1) % (v1 - v2)
    return v1 < v2 || jumps !== 0 ? "NO" : "YES"
}