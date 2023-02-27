/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const tasks = [\n  {\n    description: 'Finish project',\n    completed: false,\n    index: 0,\n  },\n  {\n    description: 'Clean the house',\n    completed: true,\n    index: 1,\n  },\n  {\n    description: 'Take Walk',\n    completed: false,\n    index: 2,\n  },\n  {\n    description: 'Hangout with friends',\n    completed: true,\n    index: 1,\n  },\n  {\n    description: 'Rest for 8 hours',\n    completed: false,\n    index: 2,\n  },\n];\n\n// Function to iterate over tasks array and create HTML list items\nfunction showTasks() {\n  const todoList = document.getElementById('listContainer');\n  const items = document.createElement('ul');\n  items.classList.add('items');\n  todoList.innerHTML = '';\n  const taskTitle = document.createElement('p');\n  taskTitle.innerText = \"Today's Tasks\";\n  taskTitle.classList.add('taskTitle');\n  todoList.appendChild(taskTitle);\n  const addTask = document.createElement('input');\n  addTask.setAttribute('placeholder', 'Add Task');\n  addTask.classList.add('addTask');\n  todoList.appendChild(addTask);\n  const removeTask = document.createElement('button');\n  removeTask.innerText = 'Clear Complete Tasks';\n  removeTask.classList.add('removeTask');\n\n  tasks.forEach((task) => {\n    const listItem = document.createElement('label');\n    const listInput = document.createElement('input');\n    const x = document.createElement('BR');\n    listInput.type = 'radio';\n    listItem.classList.add('listItem');\n    listItem.textContent = task.description;\n    if (task.completed) {\n      listItem.classList.add('completed');\n    }\n    items.appendChild(listInput);\n    items.appendChild(listItem);\n    items.appendChild(x);\n    todoList.appendChild(items);\n  });\n\n  todoList.appendChild(removeTask);\n}\n\n// Call the showTasks function on page load\nwindow.addEventListener('load', showTasks);\n\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);