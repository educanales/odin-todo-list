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
}

class Project {
  constructor(name, id, todos) {
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

const myProjects = [defaultProject, otherProject];

export { defaultProject, Todo, Project, myProjects };