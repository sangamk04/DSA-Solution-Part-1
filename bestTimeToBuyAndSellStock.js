// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
let array = [7,6,4,3,10]

const fun = (prices)=>{
    let min = Infinity,res = 0;
    prices.forEach((e)=>{
        if(e < min)min = e;
        else if(e - min > res)res = e-min
    })
// return res;
}

console.log(fun(array));