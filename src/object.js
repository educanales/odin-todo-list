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
  constructor(name, todos) {
    this.name = name;
    this.todos = [todos];
  }
}

let task = new Todo(
  "Lavar ropa",
  "La de ciclismo y la de trabajo",
  "2024-12-15",
  "low"
);

let defaultTodos = [task];

let defaultProject = new Project("Default", defaultTodos);

const myProjects = [defaultProject];


export { defaultProject, Todo, Project, defaultTodos, myProjects };