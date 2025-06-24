import "./styles.css";
import { activeProjectTodos } from "./object.js";
import { renderAddTodoDialog, renderTodos } from "./renderTodos.js";
import { renderProjectDialog, renderProjectList } from "./renderProjects.js";

renderProjectList();
renderTodos(activeProjectTodos);
renderProjectDialog();
// renderAddTodoDialog(activeProjectTodos);
