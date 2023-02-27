import './style.css';

const tasks = [
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
    index: 1,
  },
  {
    description: 'Rest for 8 hours',
    completed: false,
    index: 2,
  },
];

// Function to iterate over tasks array and create HTML list items
function showTasks() {
  const todoList = document.getElementById('listContainer');
  const items = document.createElement('ul');
  items.classList.add('items');
  todoList.innerHTML = '';
  const taskTitle = document.createElement('p');
  taskTitle.innerText = "Today's Tasks";
  taskTitle.classList.add('taskTitle');
  todoList.appendChild(taskTitle);
  const addTask = document.createElement('input');
  addTask.setAttribute('placeholder', 'Add Task');
  addTask.classList.add('addTask');
  todoList.appendChild(addTask);
  const removeTask = document.createElement('button');
  removeTask.innerText = 'Clear Complete Tasks';
  removeTask.classList.add('removeTask');

  tasks.forEach((task) => {
    const listItem = document.createElement('label');
    const listInput = document.createElement('input');
    const x = document.createElement('BR');
    listInput.type = 'radio';
    listItem.classList.add('listItem');
    listItem.textContent = task.description;
    if (task.completed) {
      listItem.classList.add('completed');
    }
    items.appendChild(listInput);
    items.appendChild(listItem);
    items.appendChild(x);
    todoList.appendChild(items);
  });

  todoList.appendChild(removeTask);
}

// Call the showTasks function on page load
window.addEventListener('load', showTasks);
