import { Todo, projects } from "./object.js";

function showTodo(myTodos) {
  const todoContainer = document.querySelector(".todo-container");
  todoContainer.replaceChildren();

  for (let i = 1; i < myTodos.length; i++) {
    let id = i;
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
    label.textContent = `${myTodos[i].title}`;
    description.textContent = `${myTodos[i].description}`;
    dueDate.textContent = `${myTodos[i].dueDate}`;
    priority.textContent = `${myTodos[i].priority}`;
    editBtn.textContent = "Edit";
    deleteBtn.textContent = "Delete";

    const addNewTodo = document.querySelector(".add-new-todo");
    addNewTodo.addEventListener("click", dialogLogic);

    checkbox.addEventListener("click", () => {
      checkbox.toggleAttribute("checked");
      label.classList.toggle("checked");
      setCompleted(myTodos, id);
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
      editTitleInput.setAttribute("value", `${myTodos[i].title}`);
      cancelEdit.textContent = "Cancel";
      saveEdit.textContent = "Save";
      editForm.append(editTitleLabel, editTitleInput, cancelEdit, saveEdit);

      editForm.addEventListener("submit", (event) => {
        event.preventDefault();
        myTodos[i].title = editTitleInput.value;
        showTodo(myTodos);
      });

      saveEdit.addEventListener("click", () => editDialog.close());
      cancelEdit.addEventListener("click", () => editDialog.close());

      editDialog.showModal();
    })

    deleteBtn.addEventListener("click", () => {
      deleteTodo(myTodos, id);
    });
  };
}

function deleteTodo(todos, id) {
  todos.splice(id, 1);
  showTodo(todos);
}

function setCompleted(todos, id) {
  todos.map((todo) => {
    if (todo.id === id) {
      todo.completed = true;
    }
  })
}

function addTodo(event, todos) {
  event.preventDefault();

  const newTodo = new Todo(
    title.value,
    description.value,
    dueDate.value,
    priority.value
  );

  todos.push(newTodo);
  title.value = "";
  description.value = "";
  // dueDate.value = "";
  // priority.value = "";
  
  console.log(todos);

  showTodo(todos);
}

function dialogLogic() {
  const modal = document.querySelector("dialog");
  const cancelBtn = document.querySelector(".cancel-btn");
  const submitBtn = document.querySelector(".submit-btn");
  const form = document.forms["todo-form"];

  modal.showModal();

  cancelBtn.addEventListener("click", () => modal.close());
  submitBtn.addEventListener("click", () => modal.close());
  form.addEventListener("submit", (e) => {
    addTodo(e, myTodos);
  });
}

function showProjectList() {
  const main = document.querySelector("main");
  const newProjectBtn = document.querySelector(".new-project-btn");
  const list = document.querySelector(".projects-list");
  list.replaceChildren();

  projects.forEach((project) => {    
    const li = document.createElement("li");
    li.textContent = project[0].name;
    list.appendChild(li);
  });
  
  newProjectBtn.addEventListener("click", () => {
    const newProjectModal = document.createElement("dialog");
    const divTitle = document.createElement("div");
    const title = document.createElement("h3");
    const newProjectForm = document.createElement("form");
    const inputName = document.createElement("input");
    const cancelBtn = document.createElement("button");
    const saveBtn = document.createElement("button");

    newProjectForm.setAttribute("name", "new-project-form");
    newProjectForm.setAttribute("method", "dialog");
    inputName.setAttribute("type", "text");
    inputName.setAttribute("id", "projectName");
    inputName.setAttribute("name", "projectName");
    cancelBtn.setAttribute("type", "reset");
    saveBtn.setAttribute("type", "submit");

    title.textContent = "New Project";
    cancelBtn.textContent = "Cancel";
    saveBtn.textContent = "Save";

    main.appendChild(newProjectModal);
    newProjectModal.append(divTitle, newProjectForm);
    divTitle.appendChild(title);
    newProjectForm.append(inputName, cancelBtn, saveBtn);

    newProjectModal.showModal();
    cancelBtn.addEventListener("click", () => newProjectModal.close());
    newProjectForm.addEventListener("submit", (e) => {
      createNewProject(e);
      newProjectModal.close();
    });
    // saveBtn.addEventListener("click", () => newProjectModal.close());
  });

  console.log(projects);
}

function createNewProject(event) { // Al agregar un 3er proyecto crea un Objeto indefinido
  event.preventDefault();
  
  const newProject = [
    {
      name: projectName.value,
    },
  ]

  // projectName.value = "";
  projects.push(newProject);
  showProjectList();  
}

export { showTodo, showProjectList };
