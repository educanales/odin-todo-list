import "./styles.css";

class Todo {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

const task = new Todo("Lavar la loza", "", "15-12-24", "low");

console.log(task)