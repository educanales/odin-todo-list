import "./styles.css";
import { selectedProjectId } from "./object.js";
import { renderAddTodoDialog, renderTodos } from "./renderTodos.js";
import { renderProjectDialog, renderProjectList } from "./renderProjects.js";
import { type } from "./type.js";

renderProjectList();
renderTodos();
renderProjectDialog();
// renderAddTodoDialog(activeProjectTodos);

// console.log(type(selectedProjectId));
