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

let task2 = new Todo(
  "Yoga",
  "10 minutos minimo",
  "2025-06-23",
  "medium"
);

let defaultProject = new Project("Default", 1, task);

let otherProject = new Project("Personal", 2, task2);

let activeProjectTodos = defaultProject.todos;

const myProjects = [defaultProject, otherProject];


export { defaultProject, Todo, Project, activeProjectTodos, myProjects };