import { myTodos, Todo, projects } from "./object.js";

function showTodo() {
  const todoContainer = document.querySelector(".todo-container");
  todoContainer.replaceChildren();

  myTodos.forEach((item, i) => {
    item.id = i;
    const todoCard = document.createElement("div");
    todoCard.className = "todo-card";
    const infoContainer = document.createElement("div");
    infoContainer.className = "info-container";
    const infoMain = document.createElement("div");
    infoMain.className = "info-main";    
    const infoSub = document.createElement("div");
    infoSub.className = "info-sub";
    const infoBottom = document.createElement("div");
    infoBottom.className = "info-bottom";
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const label = document.createElement("label");
    const description = document.createElement("p");
    const dueDate = document.createElement("p");
    const priority = document.createElement("p");
    priority.className = "priority";
    const btnContainer = document.createElement("div");
    btnContainer.className = "btn-container";
    const editBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");
    todoContainer.appendChild(todoCard);
    todoCard.append(infoContainer, btnContainer);
    infoContainer.append(infoMain, infoSub, infoBottom);
    infoMain.append(checkbox, label);
    infoSub.append(description);
    infoBottom.append(dueDate, priority);
    btnContainer.append(editBtn, deleteBtn);
    label.textContent = `${item.title}`;
    description.textContent = `${item.description}`;
    dueDate.textContent = `${item.dueDate}`;
    priority.textContent = `${item.priority}`;
    editBtn.textContent = "Edit";
    deleteBtn.textContent = "Delete";

    checkbox.addEventListener("click", () => {
      checkbox.toggleAttribute("checked");
      label.classList.toggle("checked");
      setCompleted(item.id);
    });

    editBtn.addEventListener("click", () => {
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
      editTitleInput.setAttribute("id", "title");
      editTitleInput.setAttribute("name", "title");
      editTitleInput.setAttribute("value", `${item.title}`);
      cancelEdit.textContent = "Cancel";
      saveEdit.textContent = "Save";
      editForm.append(editTitleLabel, editTitleInput, cancelEdit, saveEdit);

      editForm.addEventListener("submit", (event) => {
        event.preventDefault();
        item.title = editTitleInput.value;
        showTodo();
      });

      saveEdit.addEventListener("click", () => editDialog.close());
      cancelEdit.addEventListener("click", () => editDialog.close());

      editDialog.showModal();
    })

    deleteBtn.addEventListener("click", () => {
      deleteTodo(item.id);
    });    
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

function showProjectList() {
  const list = document.querySelector(".projects-list");
  projects.forEach((project) => {
    const li = document.createElement("li");
    li.textContent = project[0].name;
    list.appendChild(li);
  })
}

export { showTodo, showProjectList };
