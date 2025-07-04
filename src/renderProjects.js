import { myProjects, Project, defaultProject, saveProject } from "./object";
import { renderTodos } from "./renderTodos";

let selectedProjectId = defaultProject.id;

export function renderProjectDialog() {
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

  myProjects.forEach((project, index) => {
    const li = document.createElement("li");
    li.textContent = project.name;
    if (project.id === selectedProjectId) {
      li.classList.add("active-project");
    }
    projectList.appendChild(li);
    
    li.addEventListener("click", () => changeActiveProject(project.id));

    const btnContainer = document.createElement("div");
    btnContainer.className = "btn-container";
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    
    li.appendChild(btnContainer);
    btnContainer.append(editBtn, deleteBtn);

    // Bug que edita el nombre de todos los proyectos que se han editado
    editBtn.addEventListener("click", () => {
      console.log(project.id);

      const editProjectDialog = document.querySelector("#edit-project-dialog");
      const cancelBtn = document.querySelector("#edit-project-cancel");
      const saveBtn = document.querySelector("#edit-project-save");
      const form = document.forms["edit-project-form"];

      const inputName = document.querySelector("#edited-name");
      inputName.value = project.name;

      editProjectDialog.showModal();

      form.addEventListener("submit", (event) => {
        event.preventDefault();
        if (myProjects[index].id === project.id) {
          myProjects[index].name = inputName.value;
        }
        // saveProject();
        renderProjectList();
        editProjectDialog.close();
      });

      // saveBtn.addEventListener("click", () => editProjectDialog.close());
      cancelBtn.addEventListener("click", () => editProjectDialog.close());
    });


    
  });
}

function addProject(e) {
  e.preventDefault();
  const nameValue = projectname.value;
  const id = Date.now().toString();
  const newProject = new Project(nameValue, id);
  myProjects.push(newProject);
  projectname.value = "";
  changeActiveProject(id);
  saveProject();
  renderProjectList();
}

export function changeActiveProject(projectId) {

  // const selectedProject = myProjects.find(project => project.id === selectedProjectId);
  // console.log(selectedProject);

  selectedProjectId = projectId;
  renderProjectList();
  renderTodos();
}

export { selectedProjectId };