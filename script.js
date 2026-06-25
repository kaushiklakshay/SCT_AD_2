// getting all the elements we need
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// when we click "Add" button, run addTask function
addBtn.addEventListener("click", addTask);

// also allow pressing "Enter" key to add a task
taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

// function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();

  // don't add empty tasks
  if (taskText === "") {
    return;
  }

  // create a new list item
  const li = document.createElement("li");

  // create a span to hold the task text
  const span = document.createElement("span");
  span.textContent = taskText;

  // clicking the text will mark it as done / not done
  span.addEventListener("click", function () {
    li.classList.toggle("done");
  });

  // create a div to hold edit and delete buttons together
  const btnGroup = document.createElement("div");
  btnGroup.classList.add("btn-group");

  // edit button
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.classList.add("editBtn");

  editBtn.addEventListener("click", function () {
    // ask user for the new task text
    const newText = prompt("Edit your task:", span.textContent);

    // only update if user typed something and did not cancel
    if (newText !== null && newText.trim() !== "") {
      span.textContent = newText.trim();
    }
  });

  // delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("deleteBtn");

  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  // put the buttons inside the button group
  btnGroup.appendChild(editBtn);
  btnGroup.appendChild(deleteBtn);

  // put the text and buttons inside the list item
  li.appendChild(span);
  li.appendChild(btnGroup);

  // finally, add the list item to the task list
  taskList.appendChild(li);

  // clear the input box after adding
  taskInput.value = "";
  taskInput.focus();
}