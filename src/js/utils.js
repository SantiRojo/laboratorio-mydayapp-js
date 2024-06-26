import { Task } from "./Task";
import { main, footer, todoList } from "./nodes";

export const createTask = (task) => {
  return new Task(task);
}

export const printTasks = (arr) => {
  
  todoList.innerHTML = '';
  
  arr.forEach(task => {
    const listItem = document.createElement('li');

    const taskView = document.createElement('div');
    taskView.classList.add('view');

    const completedCheckbox = document.createElement('input');
    completedCheckbox.setAttribute('type', 'checkbox');
    completedCheckbox.classList.add('toggle');

    const taskTitle = document.createElement('label');
    taskTitle.innerText = task.title;

    const destroyBtn = document.createElement('button');
    destroyBtn.classList.add('destroy');

    const editInput = document.createElement('input');
    editInput.classList.add('edit');
    editInput.setAttribute('value', task.title);

    
    taskView.appendChild(completedCheckbox);
    taskView.appendChild(taskTitle);
    taskView.appendChild(destroyBtn);

    listItem.appendChild(taskView);
    listItem.appendChild(editInput);

    todoList.appendChild(listItem);
  });

}

export const showTaskListComponent = (arr) => {
  if (arr.length === 0) {
    main.classList.add('hidden');
    footer.classList.add('hidden');
  } else {
    main.classList.remove('hidden');
    footer.classList.remove('hidden');
    printTasks(arr);
  }
}