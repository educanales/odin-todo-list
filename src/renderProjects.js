import { myProjects, Project } from "./object";

export function showProjectList() {
  // const main = document.querySelector("main");
  const newProjectBtn = document.querySelector(".new-project-btn");
  const projectList = document.querySelector(".projects-list");
  projectList.replaceChildren();

  myProjects.forEach((project) => {    
    const li = document.createElement("li");
    li.textContent = project.name;
    projectList.appendChild(li);
  });
  
  newProjectBtn.addEventListener("click", () => {
    const newProjectDialog = document.getElementById("add-project-dialog");
    const newProjectForm = document.forms["add-project-form"];
    const projectCancelBtn = document.getElementById("add-project-cancel");
    const projectName = document.getElementById("project-name")

    newProjectDialog.showModal();

    projectCancelBtn.addEventListener("click", () => newProjectDialog.close());

    newProjectForm.addEventListener("submit", e => {
      e.preventDefault();
      const nameValue = projectName.value;
      console.log(nameValue);
      const newProject = new Project(nameValue);
      myProjects.push(newProject);
      // nameValue = "";
      console.log(myProjects);
      showProjectList();
      newProjectDialog.close();
    });
    // saveBtn.addEventListener("click", () => newProjectModal.close());
  });
}