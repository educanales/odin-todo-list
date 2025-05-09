import { myProjects, Project } from "./object";

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

  myProjects.forEach((project) => {    
    const li = document.createElement("li");
    li.textContent = project.name;
    projectList.appendChild(li);
  });
}

function addProject(e) {
  e.preventDefault();
  const nameValue = projectname.value;
  const id = Date.now().toString();
  const newProject = new Project(nameValue, id, []);
  myProjects.push(newProject);
  projectname.value = "";
  // console.log(myProjects);
  renderProjectList();
}

// Buscar la forma de saber el id del proyecto seleccionado
export function changeActiveProject() {
  const projectContainer = document.querySelector(".projects-list");

  projectContainer.addEventListener("click", e => {
    if (e.target.tagName.toLowerCase() === "li") {
      
    }
  })
}