import { addTodo, deleteTodo, setCompleted } from "./logicTodos";
import { myProjects, saveProject } from "./object";
import { selectedProjectId } from "./renderProjects";


export function renderTodos() {
  const todoContainer = document.querySelector(".todo-container");
  todoContainer.replaceChildren();

  if (myProjects.length === 0) {
    const text = document.createElement("p");
    text.textContent = "There are no projects";
    todoContainer.appendChild(text);
    return;
  }
  const selectedProject = myProjects.find(project => project.id === selectedProjectId);
  const todos = selectedProject.todos;  
  
  if (todos.length === 0) {
    const text = document.createElement("p");
    text.textContent = "There are no todos left";
    todoContainer.appendChild(text);
  } else {
      todos.forEach((todo, index) => {
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

        if (todo.completed === true) {
          checkbox.toggleAttribute("checked");
          label.classList.toggle("checked");
        }

        checkbox.addEventListener("click", () => {
          checkbox.toggleAttribute("checked");
          label.classList.toggle("checked");
          setCompleted(todo);
        });

        const editTodoDialog = document.querySelector("#edit-todo-dialog");
        const cancelBtn = document.querySelector("#edit-todo-cancel");
        const form = document.forms["edit-todo-form"];
        const todoIdInput = document.getElementById("todo-id");
        const inputTitle = document.getElementById("edited-title");
        const inputDescription = document.getElementById("edited-description");
        const inputDueDate = document.getElementById("edited-dueDate");
        const inputPriority = document.getElementById("edited-priority");

        editBtn.addEventListener("click", () => openDialog(todo));

        function openDialog(myTodo) {
          inputTitle.value = myTodo.title;
          inputDescription.value = myTodo.description;
          inputDueDate.value = myTodo.dueDate;
          inputPriority.value = myTodo.priority;
          todoIdInput.value = myTodo.id;
          editTodoDialog.showModal();
        }

        form.addEventListener("submit", (e) => {
          e.preventDefault();
          const selectedId = parseInt(todoIdInput.value);
          const foundTodo = todos.find(item => item.id === selectedId);
          
          if (foundTodo) {
            foundTodo.title = inputTitle.value;
            foundTodo.description = inputDescription.value;
            foundTodo.dueDate = inputDueDate.value;
            foundTodo.priority = inputPriority.value;
            saveProject();
            renderTodos();
          }
          editTodoDialog.close();
        });

        cancelBtn.addEventListener("click", () => editTodoDialog.close());

        deleteBtn.addEventListener("click", () => {
          deleteTodo(todos, id);
        });
      });
    }
}

export function renderAddTodoDialog() {
  const addNewTodoBtn = document.querySelector(".new-todo-btn");
  const addTodoDialog = document.querySelector("#add-todo");
  const addTodoForm = document.forms["add-todo-form"];
  const newTodoCancelBtn = document.getElementById("new-todo-cancel");

  addNewTodoBtn.addEventListener("click", () => addTodoDialog.showModal());

  newTodoCancelBtn.addEventListener("click", () => addTodoDialog.close());

  addTodoForm.addEventListener("submit", e => {
    addTodo(e);
    addTodoDialog.close();
  });
}