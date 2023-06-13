let taskList = document.getElementById("taskList");
let taskInput = document.getElementById("taskInput");
let tasks = [];

function addTask() {
  let task = taskInput.value;
  if (task !== "") {
    tasks.push(task);
    taskInput.value = "";
    displayTasks();
  }
}
function displayTasks() {
  taskList.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    let task = tasks[i];
    let li = document.createElement("li");
    li.innerHTML = task + " <button onclick='editTask(" + i + ")'>Edit</button> <button onclick='deleteTask(" + i + ")'>Delete</button> <button onclick='doneTask(" + i + ")'>Done</button>";
    taskList.appendChild(li);
  }
}
function editTask(index) {
  let task = tasks[index];
  let newTask = prompt("Edit task", task);
  if (newTask !== null) {
    tasks[index] = newTask;
    displayTasks();
  }
}
function deleteTask(index) {
  tasks.splice(index, 1);
  displayTasks();
}
function doneTask(index) {
  let li = taskList.childNodes[index];
  li.style.textDecoration = "line-through";
}