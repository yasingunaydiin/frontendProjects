const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Function to add a task
function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

// Event listener for the "Enter" key
inputBox.addEventListener("keydown", function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

// Event listener for list items and delete buttons
listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Function to save data to local storage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Function to show tasks from local storage
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

// Load tasks from local storage on page load
showTask();
