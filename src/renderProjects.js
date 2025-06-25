import { myProjects, Project, defaultProject } from "./object";
import { renderAddTodoDialog, renderTodos } from "./renderTodos";

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

  myProjects.forEach((project) => {    
    const li = document.createElement("li");
    li.textContent = project.name;
    projectList.appendChild(li);

    li.addEventListener("click", () => changeActiveProject(project.id));
  });
}

function addProject(e) {
  e.preventDefault();
  const nameValue = projectname.value;
  const id = Date.now().toString();
  const newProject = new Project(nameValue, id, []);
  myProjects.push(newProject);
  projectname.value = "";
  renderProjectList();
}

export function changeActiveProject(projectId) {
  // const selectedProject = myProjects.find(myProject => myProject.id === projectId);
  // console.log(selectedProjectId);
  selectedProjectId = projectId;
  console.log(selectedProjectId);
  // console.log(selectedProject);
  // renderAddTodoDialog(selectedProject.todos);
  renderTodos();
}

export { selectedProjectId };