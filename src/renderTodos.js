import { addTodo, deleteTodo, setCompleted } from "./logicTodos";


function renderTodo(myTodos) {
  const todoContainer = document.querySelector(".todo-container");
  todoContainer.replaceChildren();

  myTodos.forEach((todo, index) => {
    let id = index;
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
    
    label.textContent = `${todo.title}`;
    description.textContent = `${todo.description}`;
    dueDate.textContent = `${todo.dueDate}`;
    priority.textContent = `${todo.priority}`;
    editBtn.textContent = "Edit";
    deleteBtn.textContent = "Delete";

    const addNewTodo = document.querySelector(".new-todo-btn");
    const addTodoDialog = document.querySelector("#add-todo");
    const addTodoForm = document.forms["add-todo-form"];

    const newTodoCancelBtn = document.getElementById("new-todo-cancel");
    newTodoCancelBtn.addEventListener("click", () => {
      // console.log("Cancel new todo");
      addTodoDialog.close();
    });

    const newTodoSaveBtn = document.getElementById("new-todo-save");
    newTodoSaveBtn.addEventListener("click", () => {
      // console.log("Save new todo");
      addTodoDialog.close();
    });
    
    addNewTodo.addEventListener("click", () => {
      addTodoDialog.showModal();
    });

    addTodoForm.addEventListener("submit", (event) => {
      addTodo(event, myTodos);
    });

    checkbox.addEventListener("click", () => {
      checkbox.toggleAttribute("checked");
      label.classList.toggle("checked");
      setCompleted(myTodos, id);
    });

    editBtn.addEventListener("click", () => {
      const editTodoDialog = document.querySelector("#edit-todo-dialog");
      const cancelBtn = document.querySelector("#edit-todo-cancel");
      const saveBtn = document.getElementById("edit-todo-save");
      const form = document.forms["edit-todo-form"];      
      const inputTitle = document.querySelector("#edited-title");
      inputTitle.value = todo.title;      

      editTodoDialog.showModal();

      form.addEventListener("submit", (event) => {
        event.preventDefault();        
        todo.title = inputTitle.value;
        renderTodo(myTodos);
        editTodoDialog.close();
      });

      saveBtn.addEventListener("click", () => editTodoDialog.close());
      cancelBtn.addEventListener("click", () => editTodoDialog.close());
    });

    deleteBtn.addEventListener("click", () => {
      deleteTodo(myTodos, id);
    });
  });
}

export { renderTodo };