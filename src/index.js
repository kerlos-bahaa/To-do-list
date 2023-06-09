import './style.css';
import {
  todos, addTask, deleteTask, editTask, loadTasks,
} from './todo.js';

// console.log(todos);

function showList() {
  loadTasks();

  const taskList = document.getElementById('todo-list');

  taskList.innerHTML = '';

  todos.sort((a, b) => a.index - b.index);

  todos.forEach((todo, index) => {
    const item = document.createElement('li');
    const itemDiv = document.createElement('div');
    const itemSpan = document.createElement('span');
    itemDiv.className = 'task-item';
    itemSpan.textContent = todo.description;
    itemSpan.className = todo.completed ? 'completed' : '';
    itemSpan.dataset.index = index;
    itemSpan.setAttribute('contenteditable', 'true');
    itemDiv.appendChild(itemSpan);

    const deleteButton = document.createElement('i');
    deleteButton.className = 'fas fa-trash-alt text-danger float-end delete-button';

    item.appendChild(itemDiv);
    item.appendChild(deleteButton);
    taskList.appendChild(item);
  });
}

document.getElementById('add-task-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const taskDescription = document.getElementById('task-input').value;
  addTask(taskDescription);
  showList();
  document.getElementById('task-input').value = '';
});

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete-button')) {
    const listItem = event.target.parentNode;
    const index = parseInt(listItem.dataset.index, 10);
    deleteTask(index);
    listItem.remove();
    showList();
  }
});

document.addEventListener('input', (event) => {
  if (event.target.tagName === 'SPAN') {
    const listItem = event.target;
    const index = parseInt(listItem.dataset.index, 10);
    const newDescription = listItem.textContent.trim();
    editTask(index, newDescription);
  }
});

document.addEventListener('blur', (event) => {
  if (event.target.tagName === 'SPAN') {
    showList();
  }
});
document.addEventListener('DOMContentLoaded', showList);
