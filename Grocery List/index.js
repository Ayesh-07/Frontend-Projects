
let groceryList = []

// Start hone pe menu dikhaye:


function Menu() {
    console.log(`
Grocery List App
1. Add item
2. Remove item
3. View list
4. Search item
5. Update item
6. Filter items by letter
7. Exit
`)
}


// .push() → item add karne ke liye

function addItem() {
    let item = prompt("Enter Item's name for adding")
    if (item) {
        groceryList.push(item)
        console.log(`✅ " ${item}"  item  successfully added.`);

    }
}


// .splice() → item remove/edit karne ke liye

function removeItem() {
    let item = prompt("Enter Item's name for removing")
    const index = groceryList.indexOf(item);
    if (item) {
        groceryList.splice(index, 1)
        console.log(`✅ " ${item}"  item  successfully removed`);

    }
}



// forEach() sab item dikhane ke liye


function viewList() {
  if (groceryList.length === 0) {
    console.log("Grocery list is empty.");
  } else {
    console.log(" Your Grocery List:");
    groceryList.forEach((item, index) => {
      console.log(`${index + 1}. ${item}`);
    });

    // list
    console.log("\n List: " + groceryList.join(", "));
  }
}



//  .indexOf() → search karne ke liye

function searchItem() {
    let item = prompt("Enter Item's name for searching")
    const index = groceryList.indexOf(item);
    if (index !== -1) {
        console.log(`Your ${item}" found at position ${index + 1}`);
    }
    else {
        console.log(`❌ " ${item}"  item is not found`);
    }

}

// indexof - for Updating the item


function Updateitem() {
    let oldItem = prompt("Enter Item that you want to update")
    const index = groceryList.indexOf(oldItem);
    if (index !== -1) {
        let newItem = prompt("Enter new Item that you want to Add")
        groceryList.splice(index, 1, newItem);
        console.log(`"${oldItem}" updated to "${newItem}"`);
    } else {
        console.log(`❌ "${oldItem}" not found`);
    }
}



// .filter() Filter items by letter


function FilterByLetter() {
  let letter = prompt("Enter first letter of item to filter:");
  if (letter) {
    let filtered = groceryList.filter((item) => 
      item.toLowerCase().startsWith(letter.toLowerCase())
    );

    if (filtered.length > 0) {
      console.log(`📌 Items starting with "${letter}":`);
      console.log(filtered.join(", "));
    } else {
      console.log(`❌ No items found starting with "${letter}".`);
    }
  }
}



// Main Code for runing 

let running = true;
while(running === true){
Menu()
// User option choose kare prompt se
let choose = prompt("Choose One option from (1 to 7)");

switch(choose){
    case "1" :
    addItem();
    break;

    case "2" :
    removeItem();
    break;


    case "3" :
    viewList();
    break;

    case "4" :
    searchItem();
    break;

    case "5" :
    Updateitem();
    break;

    case "6" :
    FilterByLetter();
    break;

    case "7" :
    console.log("Exit ... Thankyou")
    break;

    default:
    console.log("❌ Invalid choice. Try again.");

}


}


