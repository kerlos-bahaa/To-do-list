const todos = [];

function loadTasks() {
  const savedTasks = localStorage.getItem('tasks');
  if (savedTasks) {
    todos.length = 0;
    todos.push(...JSON.parse(savedTasks));
  }
}

function updateIndexes() {
  todos.forEach((task, index) => {
    task.index = index;
  });
  localStorage.setItem('tasks', JSON.stringify(todos));
}

function addTask(description) {
  const task = {
    description,
    completed: false,
    index: todos.length,
  };
  todos.push(task);
  localStorage.setItem('tasks', JSON.stringify(todos));
}

function deleteTask(index) {
  todos.splice(index, 1);
  updateIndexes();
  localStorage.setItem('tasks', JSON.stringify(todos));
}

function editTask(index, description) {
  const task = todos.find((task) => task.index === index);
  if (task) {
    task.description = description;
    localStorage.setItem('tasks', JSON.stringify(todos));
  }
}

export {
  todos, addTask, deleteTask, editTask, loadTasks, updateIndexes,
};
