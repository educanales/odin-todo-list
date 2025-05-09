class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
    // this.list = list;
  }
  setCompleted(value) {
    this.completed = value;
  }

  logTitle() {
    console.log(this.title);
  }

  logCompleted() {
    console.log(this.completed);
  }
}

class Project {
  constructor(name, id, todos) {
    this.name = name;
    this.id = id;
    this.todos = [todos];
  }
}

let task = new Todo(
  "Lavar ropa",
  "La de ciclismo y la de trabajo",
  "2024-12-15",
  "low"
);

let defaultProject = new Project("Default", Date.now().toString(), task);

let activeProjectTodos = defaultProject.todos;

const myProjects = [defaultProject];


export { defaultProject, Todo, Project, activeProjectTodos, myProjects };