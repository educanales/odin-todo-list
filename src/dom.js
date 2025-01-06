import { myTodos, Todo } from "./object.js";

function showTodo() {
  const todoContainer = document.querySelector(".todo-container");
  todoContainer.replaceChildren();

  myTodos.forEach((item, i) => {
    item.id = i;
    const todoCard = document.createElement("div");
    todoCard.className = "todo-card";
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    // checkbox.name = `${item.title}`;
    const label = document.createElement("label");
    const editBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");

    checkbox.addEventListener("click", () => {
      checkbox.toggleAttribute("checked");
      label.classList.toggle("checked");
      setCompleted(item.id);
    });

    editBtn.addEventListener("click", () => {
      editTodo(item);
    })

    deleteBtn.addEventListener("click", () => {
      deleteTodo(item.id);
    });

    todoContainer.appendChild(todoCard);
    todoCard.append(checkbox, label, editBtn, deleteBtn);
    label.textContent = `${item.title}`;
    editBtn.textContent = "Edit";
    deleteBtn.textContent = "Delete";
  });

  const modal = document.querySelector("dialog");
  const addNewTodo = document.querySelector(".add-new-todo");
  const cancelBtn = document.querySelector(".cancel-btn");
  const submitBtn = document.querySelector(".submit-btn");
  const form = document.forms["todo-form"];

  addNewTodo.addEventListener("click", () => modal.showModal());
  cancelBtn.addEventListener("click", () => modal.close());
  submitBtn.addEventListener("click", () => modal.close());
  form.addEventListener("submit", addTodo);
}

function editTodo(item) {
  const main = document.querySelector("main");
  const editDialog = document.createElement("dialog");
  main.appendChild(editDialog);
  const divTitle = document.createElement("div");
  const title = document.createElement("h3");
  title.textContent = "Edit todo";
  editDialog.appendChild(divTitle);
  divTitle.appendChild(title);
  const editForm = document.createElement("form");
  editForm.setAttribute("name", "edit-form");
  editForm.setAttribute("method", "dialog");
  editDialog.appendChild(editForm);
  const editTitleDiv = document.createElement("div");
  editForm.appendChild(editTitleDiv);
  const editTitleLabel = document.createElement("label");
  const editTitleInput = document.createElement("input");
  const cancelEdit = document.createElement("button");
  const saveEdit = document.createElement("button");
  editTitleLabel.setAttribute("for", "title");
  editTitleLabel.textContent = "Title: ";
  editTitleInput.setAttribute("type", "text");
  editTitleInput.setAttribute("name", "title");
  editTitleInput.setAttribute("value", `${item.title}`);
  cancelEdit.textContent = "Cancel";
  saveEdit.textContent = "Save";
  // saveEdit.addEventListener("click", () => editDialog.close());
  // editForm.addEventListener("submit", () => {
  //   editValues(item);
  // })

  editForm.append(editTitleLabel, editTitleInput, cancelEdit, saveEdit);


  editDialog.showModal();
}

function deleteTodo(id) {
  myTodos.splice(id, 1);
  showTodo();
}

// function editValues(item) {
//   myTodos.map((todo) => {
//     if (todo.id === item.id) {
//       todo.title = item.value
//     }
//   })
//   console.log(item.id)
// }

function setCompleted(id) {
  myTodos.map((todo) => {
    if (todo.id === id) {
      todo.completed = true;
    }
  })
}

function addTodo(event) {
  event.preventDefault();

  const newTodo = new Todo(
    title.value,
    description.value,
    dueDate.value,
    priority.value
  );

  myTodos.push(newTodo);
  title.value = "";
  description.value = "";
  dueDate.value = "";
  priority.value = "";
  
  console.log(myTodos);

  showTodo();
}

export { showTodo };
