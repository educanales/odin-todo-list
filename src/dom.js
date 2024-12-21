import { myTodos } from "./index.js";

function showTodo() {
  const main = document.querySelector("main");
  main.replaceChildren();
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

    deleteBtn.addEventListener("click", () => {
      deleteTodo(item.id);
    });

    main.appendChild(todoCard);
    todoCard.append(checkbox, label, editBtn, deleteBtn);
    label.textContent = `${item.title}`;
    editBtn.textContent = "Edit";
    deleteBtn.textContent = "Delete";

  });
  
}

function deleteTodo(id) {
  myTodos.splice(id, 1);
  showTodo();
}


export { showTodo };
