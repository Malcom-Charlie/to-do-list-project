/* eslint-disable no-use-before-define */
import './style.css';

const addForm = document.querySelector('#add-form');
const todoList = document.querySelector('#todo-list');
const removeCompletedBtn = document.querySelector('#remove-completed');

let tasks = [];

// Function to add a new task to the array and render it
const addTask = (taskDescription, completed = false) => {
  tasks.push({ description: taskDescription, completed });
  renderTasks();
};

// Function to toggle a task's completed status and render the updated list
const toggleCompleted = (index) => {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
  const selectedCheckboxes = todoList.querySelectorAll('input[type="checkbox"]:checked');
  selectedCheckboxes.forEach((checkbox) => {
    const taskItem = checkbox.parentNode;
    const taskIndex = Array.from(todoList.children).indexOf(taskItem);
    tasks[taskIndex].completed = true;
    taskItem.classList.add('completed');
    checkbox.setAttribute('checked', '');
  });
  const unselectedCheckboxes = todoList.querySelectorAll('input[type="checkbox"]:not(:checked)');
  unselectedCheckboxes.forEach((checkbox) => {
    const taskItem = checkbox.parentNode;
    const taskIndex = Array.from(todoList.children).indexOf(taskItem);
    tasks[taskIndex].completed = false;
    taskItem.classList.remove('completed');
    checkbox.removeAttribute('checked');
  });
};

// Function to render the tasks in the todoList
const renderTasks = () => {
  // Clear the todoList
  todoList.innerHTML = '';

  // Render each task
  tasks.forEach((task, index) => {
    const taskItem = document.createElement('li');
    const hr = document.createElement('HR');
    const taskCheckbox = document.createElement('input');
    taskCheckbox.type = 'checkbox';
    taskCheckbox.checked = task.completed;
    taskCheckbox.addEventListener('change', () => toggleCompleted(index));
    const taskDescription = document.createTextNode(task.description);
    taskItem.appendChild(taskCheckbox);
    taskItem.appendChild(taskDescription);
    taskItem.appendChild(hr);
    todoList.appendChild(taskItem);
  });

  // Update the indexes of the tasks
  tasks.forEach((task, index) => {
    task.index = index;
  });

  // Save the tasks to local storage
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

// Function to remove all completed tasks
const removeCompletedTasks = () => {
  tasks = tasks.filter((task) => !task.completed);
  renderTasks();
};

// Add event listener to the addForm for submitting new tasks
addForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const newTaskInput = document.querySelector('#new-task');
  const newTaskDescription = newTaskInput.value.trim();
  if (newTaskDescription !== '') {
    addTask(newTaskDescription);
    newTaskInput.value = '';
  }
});

// Add event listener to the removeCompletedBtn to remove all completed tasks
removeCompletedBtn.addEventListener('click', removeCompletedTasks);

// Load saved tasks from local storage
const savedTasks = JSON.parse(localStorage.getItem('tasks'));
if (savedTasks) {
  tasks = savedTasks;
  renderTasks();
}
