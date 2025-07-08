import { myProjects, Project, defaultProject, saveProject } from "./object";
import { renderTodos } from "./renderTodos";

let selectedProjectId = defaultProject.id;

export function renderNewProjectDialog() {
  const newProjectBtn = document.querySelector(".new-project-btn");
  const newProjectDialog = document.getElementById("add-project-dialog");
  const newProjectForm = document.forms["add-project-form"];
  const projectCancelBtn = document.getElementById("add-project-cancel");

  newProjectBtn.addEventListener("click", () => {
    newProjectDialog.showModal();
  });

  projectCancelBtn.addEventListener("click", () => newProjectDialog.close());

  newProjectForm.addEventListener("submit", e => {
    addProject(e);
    newProjectDialog.close();
  });
}

export function renderProjectList() {
  const projectList = document.querySelector(".projects-list");  
  projectList.replaceChildren();

  myProjects.forEach((project) => {
    const li = document.createElement("li");
    li.textContent = project.name;

    if (project.id === selectedProjectId) {
      li.classList.add("active-project");
    }

    projectList.appendChild(li);
    
    li.addEventListener("click", () => changeActiveProject(project.id));

    const btnContainer = document.createElement("div");    
    const editBtn = document.createElement("button");    
    const deleteBtn = document.createElement("button");
    const editProjectDialog = document.querySelector("#edit-project-dialog");
    const cancelBtn = document.querySelector("#edit-project-cancel");
    const projectForm = document.forms["edit-project-form"];
    const inputName = document.getElementById("edited-name");
    const projectIdInput = document.getElementById("project-id");

    btnContainer.className = "btn-container";
    editBtn.textContent = "Edit";
    deleteBtn.textContent = "Delete";    
    
    li.appendChild(btnContainer);
    btnContainer.append(editBtn, deleteBtn);

    editBtn.addEventListener("click", () => openDialog(project.name, project.id));

    function openDialog(name, id) {
      inputName.value = name;
      projectIdInput.value = id;
      editProjectDialog.showModal();
    }

    projectForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const id = parseInt(projectIdInput.value);
      const newName = inputName.value;
      const foundProject = myProjects.find(item => item.id === id);

      if (foundProject) {
        foundProject.name = newName;
        saveProject();
        renderProjectList();
      }

      editProjectDialog.close();
    });

    cancelBtn.addEventListener("click", () => editProjectDialog.close());    
  });
}

function addProject(e) {
  e.preventDefault();
  const nameValue = projectname.value;
  const id = Date.now();
  const newProject = new Project(nameValue, id);
  myProjects.push(newProject);
  projectname.value = "";
  changeActiveProject(id);
  saveProject();
  renderProjectList();
}

export function changeActiveProject(projectId) {
  selectedProjectId = projectId;
  renderProjectList();
  renderTodos();
}

export { selectedProjectId };