import "./styles.css";
import { showTodo, showProjectList } from "./dom.js";
import { defaultProject, defaultTodos } from "./object.js";
import { renderTodo } from "./renderTodos.js";

// showTodo(defaultTodos);
renderTodo(defaultTodos);
showProjectList();

// console.log(defaultProject)