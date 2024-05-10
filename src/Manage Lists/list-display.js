import { taskArray } from "../Manage Tasks/task-array";
const list = document.querySelector('.list-tasks');
const projDisplay = document.querySelector('.project-display');
const newTaskBtn = document.querySelector('.add-tasks');

function displayAllTasks() {
    newTaskBtn.style.visibility = 'visible';
    list.textContent = '';
    
    for (let i = 0; i < taskArray.length; i++) {
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task-div')
        list.appendChild(taskDiv);

        const titleDiv = document.createElement('div');
        titleDiv.textContent = taskArray[i].title;
        titleDiv.classList.add('title-div');
        taskDiv.appendChild(titleDiv);

        const priorityDiv = document.createElement('div');
        // priorityDiv.textContent = taskArray[i].priority;
        priorityDiv.classList.add('priority-div');
        taskDiv.appendChild(priorityDiv);
        if (taskArray[i].priority === true) {
            priorityDiv.textContent = 'High Priority';
        } 
        if (taskArray[i].priority === false) {
            priorityDiv.textContent = 'Low Priority';
        }

        const descriptionDiv = document.createElement('div');
        descriptionDiv.textContent = taskArray[i].description;
        descriptionDiv.classList.add('description-div');
        taskDiv.appendChild(descriptionDiv);

        const dateDiv = document.createElement('div'); 
        dateDiv.textContent = 'Due Date: ' + taskArray[i].date;
        dateDiv.classList.add('date-div');
        taskDiv.appendChild(dateDiv);

        const completedDiv = document.createElement('div');
        // if (taskArray[i].completed === true) {
        //     completedDiv.textContent = 'TASK COMPLETE'; 
        // } 
        // if (taskArray[i].completed === false) {
        //     completedDiv.textContent = 'WORK IN PROGRESS';
        // }
        completedDiv.classList.add('completed-div');
        taskDiv.appendChild(completedDiv);

        const checkboxPrompt = document.createElement('div');
        checkboxPrompt.classList.add('checkbox-prompt');
        completedDiv.appendChild(checkboxPrompt);
        checkboxPrompt.textContent = 'Completed: ';

        const checkbox = document.createElement('input');
        checkboxPrompt.appendChild(checkbox);
        checkbox.classList.add('complete-checkbox');
        checkbox.setAttribute('type', 'checkbox');
    }
}

export {displayAllTasks};