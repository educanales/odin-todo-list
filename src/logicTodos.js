import { renderTodos } from "./renderTodos";
import { Todo } from "./object";

export function addTodo(event, todos) {
  event.preventDefault();
  const newTodo = new Todo(
    title.value,
    description.value,
    dueDate.value,
    priority.value
  );

  todos.push(newTodo);
  title.value = "";
  description.value = "";
  // dueDate.value = "";
  // priority.value = "";
  renderTodos(todos);
}

export function deleteTodo(todos, id) {
  todos.splice(id, 1);
  renderTodos(todos);
}

export function setCompleted(todos, id) {
  todos.map((todo) => {
    if (todo.id === id) {
      todo.completed = true;
    }
  })
}