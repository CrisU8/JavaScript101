let groceryList = ["🥛 Milk", "🥑 Avocado", "🥚 Eggs", "🍞 Bread"];

for (let i = 0; i <= groceryList.length; i++) {
    if (groceryList[i] === "🥚 Eggs") {
        groceryList[i] = "🧈 Butter"
    }
}

groceryList[groceryList.length] = "🧼 Laundry Soap"

console.log(groceryList)
console.log(groceryList.length)