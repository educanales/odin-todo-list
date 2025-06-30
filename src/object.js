class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
    // this.list = list;
  }
  
  changeCompleted() {
    this.completed = !this.completed;
  }
}

class Project {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.todos = [];
  }

  addTodo(todo) {
    this.todos.push(todo);
  }
}

const task = new Todo(
  "Lavar ropa",
  "La de ciclismo y la de trabajo",
  "2024-12-15",
  "low"
);

const defaultProject = new Project("Default", 1);
const otherProject = new Project("Personal", 2);

defaultProject.addTodo(task);

const LOCAL_STORAGE_PROJECTS_LIST_KEY = "projects.list"

let myProjects = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECTS_LIST_KEY)) || [defaultProject, otherProject];

function saveProject() {
  localStorage.setItem(LOCAL_STORAGE_PROJECTS_LIST_KEY, JSON.stringify(myProjects));
}

export { defaultProject, Todo, Project, myProjects, saveProject };