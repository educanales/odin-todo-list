import { renderTodos } from "./renderTodos";
import { Todo, myProjects } from "./object";
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

  selectedProject.addTodo(newTodo);
  title.value = "";
  description.value = "";
  // dueDate.value = "";
  // priority.value = "";
  renderTodos();
}

export function deleteTodo(todos, id) {
  todos.splice(id, 1);
  renderTodos();
}

export function setCompleted(todos, id) {
  todos.map((todo) => {
    if (todo.id === id) {
      todo.completed = true;
    }
  })
}