import { displayAllTasks } from "../Manage Lists/list-display";
import { getValues } from "./get-input-values";
import { createTaskForm } from "./task-form";

const newTaskBtn = document.querySelector('.add-tasks');
const list = document.querySelector('.list-tasks');

function showAddTaskPanel() {
    newTaskBtn.style.visibility = 'hidden';
    list.textContent = '';

    const displayTitle = document.createElement('div');
    displayTitle.textContent = 'New Task'
    displayTitle.classList.add('new-task');
    list.appendChild(displayTitle);

    const newTaskUI = document.createElement('div');
    newTaskUI.classList.add('new-task-ui');
    list.appendChild(newTaskUI);

    createTaskForm();
    getValues();
}

export {showAddTaskPanel};