import { renderTodos } from "./renderTodos";
import { Todo, myProjects, saveProject } from "./object";
import { selectedProjectId } from "./renderProjects";

export function addTodo(event) {
  event.preventDefault();
  const newTodo = new Todo(
    title.value,
    description.value,
    dueDate.value,
    priority.value
  );

  const selectedProject = myProjects.find(project => project.id === selectedProjectId);
  // selectedProject.addTodo(newTodo); // No funciona
  console.log(selectedProject)
  selectedProject.todos.push(newTodo);
  title.value = "";
  description.value = "";
  // dueDate.value = "";
  // priority.value = "";
  saveProject();
  renderTodos();
}

export function deleteTodo(todos, id) {
  todos.splice(id, 1);
  saveProject();
  renderTodos();
}

export function setCompleted(todo) {
  todo.completed = !todo.completed;
  // console.log(todo);
  saveProject();
}