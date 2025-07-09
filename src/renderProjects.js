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

  if (myProjects.length === 0) {
    const text = document.createElement("p");
    text.textContent = "There are no projects";
    projectList.appendChild(text);
  } else {
      myProjects.forEach((project, index) => {
      const li = document.createElement("li");
      const linkText = document.createElement("a");
      const btnContainer = document.createElement("div");    
      const editBtn = document.createElement("button");    
      const deleteBtn = document.createElement("button");
      const editProjectDialog = document.querySelector("#edit-project-dialog");
      const cancelBtn = document.querySelector("#edit-project-cancel");
      const projectForm = document.forms["edit-project-form"];
      const inputName = document.getElementById("edited-name");
      const projectIdInput = document.getElementById("project-id");
      const deleteProjectDialog = document.getElementById("delete-project-dialog");
      const deleteProjectBtn = document.getElementById("delete-project-btn");
      const cancelDeleteProjectBtn = document.getElementById("cancel-delete");

      linkText.textContent = project.name;
      btnContainer.className = "btn-container";
      editBtn.textContent = "Edit";
      deleteBtn.textContent = "Delete";

      if (project.id === selectedProjectId) {
        li.classList.add("active-project");
      }    

      projectList.appendChild(li);
      li.append(linkText, btnContainer);
      btnContainer.append(editBtn, deleteBtn);

      linkText.addEventListener("click", () => changeActiveProject(project.id));

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

      let deleteIndex = null;

      cancelBtn.addEventListener("click", () => editProjectDialog.close());

      deleteBtn.addEventListener("click", () => {
        if (project.id === selectedProjectId) {
          const defaultId = myProjects[0].id;
          changeActiveProject(defaultId);
        }
        deleteIndex = index;
        deleteProject(deleteIndex);
        // deleteProjectDialog.showModal();
      });

      cancelDeleteProjectBtn.addEventListener("click", () => deleteProjectDialog.close());

      // deleteProjectBtn.addEventListener("click", () => {
      //   deleteProjectDialog.close();
      //   console.log(project.id);         
      // });
    });
  }
  renderTodos();
}

function deleteProject(index) {  
  // const newProjectList = myProjects.filter(item => item.id === id)
  myProjects.splice(index, 1);  
  renderProjectList();
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
}

export { selectedProjectId };