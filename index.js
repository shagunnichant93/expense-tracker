//Expense Tracker
console.log("Expense Tracker started");

//print all expenses
let expenses = [  { id: 1, title: "Groceries", amount: 500, category: "food" },
  { id: 2, title: "Bus pass", amount: 300, category: "travel" },
  { id: 3, title: "Movie", amount: 250, category: "fun" },
  { id: 4, title: "Lunch", amount: 150, category: "food" },
];
console.log(expenses);

//Print with foreach
expenses.forEach((expense) => {
  console.log(`${expense.title}: ₹${expense.amount}`);
});


//Calculate total with reduce
const total = expenses.reduce((sum, expense) => {
  return sum + expense.amount;
}, 0);
console.log(`Total expenses: ₹${total}`);


//Filter by category
const foodexpenses = expenses.filter((expense) => expense.category === "food");
console.log("Food expenses:");
foodexpenses.forEach((expense) => {
  console.log(`${expense.title}: ₹${expense.amount}`);
});