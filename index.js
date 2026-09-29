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


//Transform data with map
const titles = expenses.map((expense) => expense.title);
console.log("Expense titles:");
titles.forEach((title) => {
  console.log(title);
});

//Add new expense
function addExpense(title, amount, category) {
  const newExpense = {
    id: Date.now(),
    title: title,
    amount: amount,
    category: category,
  };

  expenses = [...expenses, newExpense];  
  console.log(`Added new expense: ${title}: ₹${amount}`);
}
addExpense("Coffee", 120, "food");

//delete expense by id
function deleteExpense(id) {
  expenses = expenses.filter((expense) => expense.id !== id);
}
deleteExpense(2);

console.log(expenses);

//Group by category 
const totalsByCategory = expenses.reduce((acc, expense) => {
  acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
  return acc;
}, {});

console.log(totalsByCategory);
