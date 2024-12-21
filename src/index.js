import "./styles.css";
import { showTodo } from "./dom.js";

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

let task = new Todo("Lavar la loza", "", "15-12-24", "low", "Odin");

const myTodos = [task];

task.logTitle();
task.logCompleted();

task.setCompleted(true);
task.logCompleted();

showTodo(myTodos);