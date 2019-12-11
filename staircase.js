function staircase(n) {
    let stair = "#";
    let space = " ";
    for(let i=1; i<=n; i++){
        console.log(space.repeat(n-i)+ stair);
        stair = stair + "#";
    }
}