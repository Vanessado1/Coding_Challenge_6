// Task 1: Function Declaration 
// created a function to calculate the profit 
function calculateProfit(costPrice,sellingPrice,unitSold){
    return profit = (sellingPrice - costPrice)*unitSold
}
console.log(`Profit: $${calculateProfit(20, 30, 100)}`); // Expected output: "Total Profit: $1000"
console.log(`Profit: $${calculateProfit(50, 70, 200)}`); // Expected output: "Total Profit: $4000"

// Task 2: Function Expression 
// declared a function expression to calculate the sales tax 
let calculateSalesTax = function (amount, taxRate) {
    return salesTax = amount * taxRate
}
console.log(calculateSalesTax(100, 0.07)); // Expected output: "Sales Tax: $7"
console.log(calculateSalesTax(500, 0.1));  // Expected output: "Sales Tax: $50"
