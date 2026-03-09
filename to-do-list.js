const inputElement = document.getElementById("text-area");
const buttonElement = document.getElementById("btn");
const unorderedListElement = document.getElementById("unordered-list");

// Add task when button is clicked
buttonElement.addEventListener("click", addTask);

// Add task when Enter key is pressed
inputElement.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});

function addTask() {
    const taskText = inputElement.value.trim();
    
    // Don't add empty tasks
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }
    
    // Create list item
    const listItem = document.createElement("li");
    listItem.textContent = taskText;
    
    // Add styling to list item
    listItem.style.padding = "10px";
    listItem.style.margin = "5px 0";
    listItem.style.backgroundColor = "rgb(100, 100, 100)";
    listItem.style.color = "white";
    listItem.style.borderRadius = "5px";
    listItem.style.cursor = "pointer";
    listItem.style.listStyleType = "none";
    
    // Delete task on click
    listItem.addEventListener("click", () => {
        listItem.remove();
    });
    
    // Add hover effect
    listItem.addEventListener("mouseover", () => {
        listItem.style.backgroundColor = "rgb(150, 50, 50)";
    });
    
    listItem.addEventListener("mouseout", () => {
        listItem.style.backgroundColor = "rgb(100, 100, 100)";
    });
    
    // Add to list
    unorderedListElement.appendChild(listItem);
    
    // Clear input
    inputElement.value = "";
    inputElement.focus();
}
