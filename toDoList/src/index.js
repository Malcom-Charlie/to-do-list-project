import './style.css';

const mavitu = [
  {
    description: 'Finish project',
    completed: false,
    index: 0,
  },
  {
    description: 'Clean the house',
    completed: true,
    index: 1,
  },
  {
    description: 'Take Walk',
    completed: false,
    index: 2,
  },
  {
    description: 'Hangout with friends',
    completed: true,
    index: 3,
  },
  {
    description: 'Rest for 8 hours',
    completed: false,
    index: 4,
  },
];

// Get tasks from local storage or initialize an empty array
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Get DOM elements
const todoList = document.getElementById("todo-list");
const addForm = document.getElementById("add-form");
const taskInput = document.getElementById("task-input");

// Function to render the to-do list
const renderTasks = () => {
	todoList.innerHTML = "";

	tasks.forEach((task, index) => {
		const listItem = document.createElement("li");
		listItem.dataset.index = index;
		const checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.checked = task.completed;
		checkbox.addEventListener("change", toggleTask);
		const description = document.createElement("span");
		description.textContent = task.description;
		description.contentEditable = true;
		description.addEventListener("blur", editTask);
		const deleteButton = document.createElement("button");
		deleteButton.textContent = "Delete";
		deleteButton.addEventListener("click", deleteTask);

		listItem.appendChild(checkbox);
		listItem.appendChild(description);
		listItem.appendChild(deleteButton);
		todoList.appendChild(listItem);
	});
};

// Function to add a new task
const addTask = (event) => {
	event.preventDefault();
	const description = taskInput.value.trim();
	if (description !== "") {
		const index = tasks.length;
		const task = {description, completed: false, index};
		tasks.push(task);
		taskInput.value = "";
		renderTasks();
		saveTasks();
	}
};

// Function to delete a task
const deleteTask = (event) => {
	const listItem = event.target.parentNode;
	const index = parseInt(listItem.dataset.index);
	tasks.splice(index, 1);
	renderTasks();
	saveTasks();
	updateIndexes();
};

// Function to toggle a task as completed
const toggleTask = (event) => {
	const checkbox = event.target;
	const listItem = checkbox.parentNode;
	const index = parseInt(listItem.dataset.index);
	tasks[index].completed = checkbox.checked;
	if (checkbox.checked) {
		listItem.classList.add("completed");
	} else {
		listItem.classList.remove("completed");
	}
	saveTasks();
};

// Function to edit a task description
const editTask = (event) => {
	const description = event.target;
	const listItem = description.parentNode;
	const index = parseInt(listItem.dataset.index);
	tasks[index].description = description.textContent.trim();
	saveTasks();
};

// Function to update the indexes of all tasks after a task is deleted
const updateIndexes = () => {
	tasks.forEach((task, index) => {
		task.index = index;
	});
	saveTasks();
};

// Function to save tasks to local storage
const saveTasks = () => {
	localStorage.setItem("tasks", JSON.stringify(tasks));
};

// Add event listeners
addForm.addEventListener("submit", addTask);

// Call the renderTasks function on page load
renderTasks();

