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
console.log(`Sales Tax: $${calculateSalesTax(100, 0.07)}`); // Expected output: "Sales Tax: $7"
console.log(`Sales Tax: $${calculateSalesTax(500, 0.1)}`);  // Expected output: "Sales Tax: $50"

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

// Task 4: Parameters and Arguments 
// created a function to determine the subscription amount 
function calculateSubscriptionCost(plan, months,discount = 0) {
    let subscriptionCosts = {
        'Basic': 10,
        'Premium': 20,
        'Enterprise': 50 
    };
    let subscriptionCost = subscriptionCosts[plan] || 0;
    let subscription = subscriptionCost * months -  discount; 
    return subscription; 
}
console.log(`Total Cost: $${calculateSubscriptionCost("Basic", 6, 10)}`); // Expected output: "Total Cost: $50"
console.log(`Total Cost: $${calculateSubscriptionCost("Premium", 12, 0)}`); // Expected output: "Total Cost: $240"

// Task 5: Returning Values 
// created a function to convert money to different currency 
function convertCurrency(amount, exchangeRate) {
    return amount * exchangeRate
}
console.log(`Converted Amount: $${convertCurrency(100, 1.1)}`); // Expected output: "Converted Amount: $110"
console.log(`Converted Amount: $${convertCurrency(250, 0.85)}`); // Expected output: "Converted Amount: $212.50"