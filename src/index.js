import "./css/base.css";
import { createTask, printTasks } from "./js/utils";
import { main, footer, todoInput } from "./js/nodes";

let taskList = [];

todoInput.addEventListener('keydown', (e) => {
  if ( e.keyCode === 13 ) {
    let newTodo = createTask(todoInput.value)

    taskList.push(newTodo);
    todoInput.value = '';

    console.log(taskList);

    printTasks(taskList);
  }
})

