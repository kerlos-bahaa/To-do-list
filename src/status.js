import { todos, updateIndexes } from './todo.js';

function updateTaskCompletion(index, completed) {
  const task = todos.find((task) => task.index === index);
  if (task) {
    task.completed = completed;
    localStorage.setItem('tasks', JSON.stringify(todos));
  }
}

function clearCompleted() {
  const updatedTodos = todos.filter((task) => !task.completed);
  todos.length = 0; // Clear the existing array
  Array.prototype.push.apply(todos, updatedTodos); // Add filtered tasks to the existing array
  updateIndexes();
  localStorage.setItem('tasks', JSON.stringify(todos));
}

export { todos, updateTaskCompletion, clearCompleted };
