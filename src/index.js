import "./style.css";

const todos = [
  {
    index: 1,
    description: "Clean My Room",
    completed: true,
  },
  {
    index: 2,
    description: "Do homework",
    completed: false,
  },
  {
    index: 3,
    description: "Buy groceries",
    completed: false,
  },
  {
    index: 4,
    description: "pray",
    completed: false,
  },
  {
    index: 5,
    description: "Go for a run",
    completed: false,
  },
];
/* eslint-disable */
document.addEventListener("DOMContentLoaded", showList);

function showList() {
  const taskList = document.getElementById("todo-list");
  taskList.innerHTML = "";
  todos.sort((a, b) => a.index - b.index);

  todos.forEach((todo) => {
    const item = document.createElement("li");
    item.textContent = todo.description;
    if (todo.completed) {
      item.classList.add("completed");
    }
    taskList.appendChild(item);
  });
}
