let item = null; // variable where the new todo will be stored temporarily.
let delIndex = null; // variable where the index of todo will be stored which has to be deleted
const todoList = [];

let input = prompt ("What would you like to do?")

while (input.toLowerCase() !== "quit" && input.toLowerCase() !== "q"){
    if (input.toLowerCase() === "new") {
        item = prompt("Enter new todo") 
        todoList.push(item)
        console.log(`${item} added to list`)
    }
    else if (input.toLowerCase() === "list") {
        console.log("**********")
        for (i = 0; i < todoList.length; i++) {
            console.log(`${i}: ${todoList[i]}`)
        }
        console.log("**********")
    }
    else if (input.toLowerCase() === "delete") {
        delIndex = parseInt(prompt("Enter the index of todo to delete"))
        while (Number.isNaN(delIndex) || delIndex >= todoList.length) {
            delIndex = parseInt(prompt("Enter a valid index!"))
        }
        todoList.splice(delIndex, 1)
        console.log("Todo removed")
    }
    input = prompt ("What would you like to do?")
}

console.log ("OK! YOU QUIT THE APP.")