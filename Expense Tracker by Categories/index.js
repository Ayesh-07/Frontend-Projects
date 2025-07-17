
let tracker = {};
function ExpenseTracker_App(){


// Prompts and data store in Obj
let running = true
while(running === true){


let Category = prompt("Enter the Category");
let value = prompt("Enter the value");

tracker[Category] =value
console.log(tracker); 

// close the loop

let option = prompt("Do you add more! Yes or Not")
if (option.toLowerCase() !== "yes"){
running = false;
console.log("Loop End");
} 

}


// Total Expense

let totalExpense = 0;
for (let Category in tracker) {
let amount = Number(tracker[Category]);
totalExpense += amount;
}
console.log( `Total Expense: Rs.${totalExpense}`);


// Maximum Expense

let highest_Spending = Object.values(tracker)
let max = Math.max(...highest_Spending);
console.log( `highest_Spending: RS. ${max}` );

if (highest_Spending => 4000){
console.log("Alert: You are spending too much")
}

}

ExpenseTracker_App()








