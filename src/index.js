import "./styles.css";
import { selectedProjectId } from "./object.js";
import { renderAddTodoDialog, renderTodos } from "./renderTodos.js";
import { renderNewProjectDialog, renderProjectList } from "./renderProjects.js";
import { type } from "./type.js";

renderProjectList();
renderTodos();
renderNewProjectDialog();
renderAddTodoDialog();

// console.log(type(selectedProjectId));
