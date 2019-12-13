function hurdleRace(k, height) {
    let hurdles = Array.from(new Set(height)) 
    hurdles.sort((a,b)=> b-a)
    return hurdles[0] > k ? hurdles[0] - k : 0;
}