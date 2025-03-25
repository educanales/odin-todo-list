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

let task = new Todo("Lavar ropa", "La de ciclismo y la de trabajo", "2024-12-15", "low");

const defaultTodos = [
  {
    name: "Default",
    id: 0,
  },
  task,
];

const projects = [defaultTodos];


export { defaultTodos, Todo, projects };