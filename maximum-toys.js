//There are a number of different toys lying in front of Mark, tagged with their prices. 
//Mark has only a certain amount to spend, 
//and he wants to maximize the number of toys he buys with this money.

//Given a list of prices and an amount to spend, what is the maximum number of toys Mark can buy?

function maximumToys(prices, k) {
    prices.sort((a,b)=> a-b)
    let count = 0;
    let amount = prices[0];
    for (let i = 1; i<prices.length; i++){
        if(amount< k){
            count++
            amount += prices[i]
        }
    }
    return count;
}