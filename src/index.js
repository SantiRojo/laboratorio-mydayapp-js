import "./css/base.css";
import { createTask,showTaskListComponent } from "./js/utils";
import { todoInput } from "./js/nodes";

let taskList = [];

window.addEventListener('load', showTaskListComponent(taskList));

todoInput.addEventListener('keydown', (e) => {
  if ( e.keyCode === 13 ) {
    let newTodo = createTask(todoInput.value)

    taskList.push(newTodo);
    todoInput.value = '';

    console.log(taskList);

    showTaskListComponent(taskList);
  }
})

