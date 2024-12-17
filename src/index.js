import "./styles.css";

class Todo {
  constructor(title, description, dueDate, priority, list) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.list = list;
  }
}

const task = new Todo("Lavar la loza", "", "15-12-24", "low", "Odin");

console.log(task)