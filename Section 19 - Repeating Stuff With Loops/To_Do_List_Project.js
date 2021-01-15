const todoList = ["test1", "test2"];
let command = prompt("Please enter a command:");

while (command.toLowerCase() !== "quit") {
    if(command.toLowerCase() === "list") {
        console.log("**********")
        for (let i = 0; i < todoList.length; i++) {
            console.log(`${i}: ${todoList[i]}`);
        }
        console.log("**********")
    } else if(command.toLowerCase() === "new") {
        const newToDo = prompt("Please enter a new ToDo item:");
        todoList.push(newToDo);
        console.log(`Added ${newToDo} to the list!`)
    } else if (command.toLowerCase() === "delete") {
        const deleteToDo = parseInt(prompt("What index # value do you want to delete?"));
        if (!Number.isNaN(deleteToDo)) {
            const deletedToDo = todoList.splice(deleteToDo, 1);
            console.log(`Successfully deleted "${deletedToDo}"!`);
        } else {
            console.log("Please enter a valid index number:")
        }
    }
    command = prompt("Please enter a command:")
}

console.log("You have quit the app!");