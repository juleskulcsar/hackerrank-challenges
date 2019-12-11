//Two cats and a mouse are at various positions on a line. 
//You will be given their starting positions. 
//Your task is to determine which cat will reach the mouse first, 
//assuming the mouse doesn't move and the cats travel at equal speed. 
//If the cats arrive at the same time, the mouse will be allowed to move and it will escape while they fight.


function catAndMouse(x, y, z) {
    let catA = x - z;
    let catB = y - z;
    if (catA * Math.sign(catA) === catB * Math.sign(catB)){
        return "Mouse C"
    } else {
        return catA*Math.sign(catA) > catB * Math.sign(catB) ? "Cat B" : "Cat A"
    }
}