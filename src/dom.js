function showTodo(array) {
  const main = document.querySelector("main");
  array.forEach((item, i) => {
    item.id = i;
    const todoCard = document.createElement("div");
    todoCard.className = "todo-card";
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    // checkbox.name = `${item.title}`;
    const label = document.createElement("label");
    const editBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");

    // deleteBtn.addEventListener("click", () => {
      
    // });

    main.appendChild(todoCard);
    todoCard.append(checkbox, label, editBtn, deleteBtn);
    label.textContent = `${item.title}`;
    editBtn.textContent = "Edit";
    deleteBtn.textContent = "Delete";

  });
}

export { showTodo };
