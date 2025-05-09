import "./styles.css";
import { activeProject } from "./object.js";
import { renderAddTodoDialog, renderTodos } from "./renderTodos.js";
import { renderProjectDialog, renderProjectList } from "./renderProjects.js";

renderProjectList();
renderTodos(activeProject);
renderProjectDialog();
renderAddTodoDialog(activeProject);
