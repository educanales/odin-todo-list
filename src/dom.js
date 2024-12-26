import { myTodos, Todo } from "./index.js";

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
    });

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

function deleteTodo(id) {
  myTodos.splice(id, 1);
  showTodo();
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
