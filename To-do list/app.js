// get elements
const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

// add task function
function addTask() {
	// get input value
	const taskText = taskInput.value.trim();

	// check if input is not empty
	if (taskText !== "") {
		// create new list item
		const li = document.createElement("li");
		const span = document.createElement("span");
		const delBtn = document.createElement("button");

		span.textContent = taskText;
		delBtn.textContent = "Delete";

		li.appendChild(span);
		li.appendChild(delBtn);
		taskList.appendChild(li);

		// clear input
		taskInput.value = "";
	}
}

// add task event listener
addBtn.addEventListener("click", addTask);

// delete task function
function deleteTask(event) {
	if (event.target.tagName === "BUTTON") {
		event.target.parentNode.remove();
	}
}

// delete task event listener
taskList.addEventListener("click", deleteTask);