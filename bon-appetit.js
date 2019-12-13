function bonAppetit(bill, k, b) {
    let billSum = bill.reduce((acc, next)=> acc+ next, 0)
    return (billSum-bill[k])/b === 2 ? console.log("Bon Appetit") : console.log(b -         (billSum-bill[k])/2)
}