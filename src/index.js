import "./styles.css";
import { defaultTodos } from "./object.js";
import { renderAddTodoDialog, renderTodos } from "./renderTodos.js";
import { renderProjectDialog, renderProjectList } from "./renderProjects.js";

renderProjectList();
renderTodos(defaultTodos);
renderProjectDialog();
renderAddTodoDialog(defaultTodos);
