// Task 1: Function Declaration 
// created a function to calculate the profit 
function calculateProfit(costPrice,sellingPrice,unitSold){
    return profit = (sellingPrice - costPrice)*unitSold
}
console.log(`Total Profit: $${calculateProfit(20, 30, 100)}`); // Expected output: "Total Profit: $1000"
console.log(`Total Profit: $${calculateProfit(50, 70, 200)}`); // Expected output: "Total Profit: $4000"

// Task 2: Function Expression 
// declared a function expression to calculate the sales tax 
let calculateSalesTax = function (amount, taxRate) {
    return salesTax = amount * taxRate
}
console.log(calculateSalesTax(100, 0.07)); // Expected output: "Sales Tax: $7"
console.log(calculateSalesTax(500, 0.1));  // Expected output: "Sales Tax: $50"

// Task 3: Arrow Function 
// created a calculate bonus arrow function 
const calculateBonus = (salary, performanceRating) => {
    let bonusPercentages = {
        'Excellent': 0.20,
        'Good': 0.10,
        'Average': 0.05
        
    };
    let bonusPercentage = bonusPercentages[performanceRating] || 0;
    const bonus = salary * bonusPercentage;
    return bonus;
}
console.log(`Bonus: $${calculateBonus(5000, 'Excellent')}`); // Expected output: "Bonus: $1000"
console.log(`Bonus: $${calculateBonus(7000, 'Good')}`);  // Expected output: "Bonus: $700"

