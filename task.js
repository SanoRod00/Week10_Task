// Fruit Basket Counter

// Initialize the fruit basket as an object
let fruitBasket = {};

// Function to add fruits to the basket
function addFruit(fruit, quantity) {
    if (fruitBasket[fruit]) {
        fruitBasket[fruit] += quantity;
    } else {
        fruitBasket[fruit] = quantity;
    }
    console.log(`${quantity} ${fruit}(s) added to the basket.`);
}

// Function to remove fruits from the basket
function removeFruit(fruit, quantity) {
    if (fruitBasket[fruit]) {
        if (fruitBasket[fruit] >= quantity) {
            fruitBasket[fruit] -= quantity;
            console.log(`${quantity} ${fruit}(s) removed from the basket.`);
            if (fruitBasket[fruit] === 0) {
                delete fruitBasket[fruit]; // Remove the fruit from the basket if quantity is zero
            }
        } else {
            console.log(`Not enough ${fruit}(s) to remove. Only ${fruitBasket[fruit]} left.`);
        }
    } else {
        console.log(`${fruit} is not in the basket.`);
    }
}

// Function to display the total fruits in the basket
function displayTotalFruits() {
    let total = 0;
    console.log("Current basket:");
    for (let fruit in fruitBasket) {
        console.log(`${fruit}: ${fruitBasket[fruit]}`);
        total += fruitBasket[fruit];
    }
    console.log(`Total fruits in the basket: ${total}`);
}

// Ecobazar example
addFruit("apple", 5);
addFruit("banana", 3);
removeFruit("apple", 2);
displayTotalFruits();
removeFruit("banana", 4);
displayTotalFruits();
