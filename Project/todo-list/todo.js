const taskArea = document.querySelector(".taskarea");
const addButton = document.querySelector("#button");
let taskArr = JSON.parse(localStorage.getItem("TaskList")) || [];

// Function to render a task card
const createTask = (taskObj) => {
  const { task, done } = taskObj;
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <br>
    <p ${done ? 'style="text-decoration: line-through;"' : ""}>
      ${task}<span class="remove" "></span>
    </p>
  `;

  const removeBtn = card.querySelector(".remove");
  removeBtn.addEventListener("click", () => {
    taskObj.done = !taskObj.done; // Toggle status taken help from chatgpt
    localStorage.setItem("TaskList", JSON.stringify(taskArr));
    renderTasks(); // Re-render task list
  });
  taskArea.appendChild(card);
};

// Function to clear and re-render all tasks
const renderTasks = () => {
  taskArea.innerHTML = "";
  taskArr.forEach(createTask);
};

document.addEventListener("DOMContentLoaded", renderTasks);

addButton.addEventListener("click", () => {
  const taskinp = document.querySelector("#todotasks").value.trim();
  const taskReset = document.querySelector("#todotasks");

  if (taskinp === "") {
    alert("Enter Your Task");
  } else {
    const newTask = { task: taskinp, done: false };
    taskArr.push(newTask);
    localStorage.setItem("TaskList", JSON.stringify(taskArr));
    renderTasks();
    taskReset.value = "";
  }
});
