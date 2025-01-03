class Todo {
  constructor(title, description, dueDate, priority, list) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
    this.list = list;
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

let task = new Todo("Lavar la loza", "", "2024-12-15", "low", "Odin");

const myTodos = [task];


export { myTodos, Todo, task };