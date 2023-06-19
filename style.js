let taskList = document.getElementById("taskList");
let taskInput = document.getElementById("taskInput");
let tasks = [];

function addTask() {
  let task = input.value;
  if (task !== "") {
    tasks.push(task);
    input.value = "";
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


// let usersContainer = document.getElementById('input');
// const getUsers = ()=>{
//     return fetch('https://dummyjson.com/todos')
//     // return fetch('https://dummyjson.com/todos?limit=5')
//     .then(response =>response.json())
//     .then(response=>response)
//     .catch(error=>error.message)
//     // .then(response=>console.log({response}))
//     // .catch(error=>console.log(error))
// };
// getUsers();

// const displayUsers = async()=>{
// const users =await getUsers();
// console.log(users.users);
// users.users.map(item=>{
//     let div = document.createElement('div');
//     div.className = 'people';
//     let img = document.createElement('img');
//     let names= document.createElement('h2');
//     let userName = document.createElement('p');

//     img.src = item.image;
//     names.innerHTML = `${item.firstName} ${item.lastName}`;
//     userName.innerHTML = item.username;

//     div.appendChild(img);
//     div.appendChild(names);
//     div.appendChild(userName);
//     usersContainer.appendChild(div);
// })
// }
// displayUsers();