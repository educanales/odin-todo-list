import "./styles.css";
// import { showTodo, showProjectList } from "./dom.js";
import { defaultProject, defaultTodos } from "./object.js";
import { renderTodo } from "./renderTodos.js";
import { showProjectList } from "./renderProjects.js";

// showTodo(defaultTodos);
showProjectList();
renderTodo(defaultTodos);


// console.log(defaultProject)