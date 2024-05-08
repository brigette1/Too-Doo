import { taskArray } from "../Manage Tasks/task-array";
const list = document.querySelector('.list-tasks');
const projDisplay = document.querySelector('.project-display');

function displayAllTasks() {

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
        priorityDiv.textContent = taskArray[i].priority;
        priorityDiv.classList.add('priority-div');
        taskDiv.appendChild(priorityDiv);

        const descriptionDiv = document.createElement('div');
        descriptionDiv.textContent = taskArray[i].description;
        descriptionDiv.classList.add('description-div');
        taskDiv.appendChild(descriptionDiv);

        const dateDiv = document.createElement('div'); 
        dateDiv.textContent = taskArray[i].date;
        dateDiv.classList.add('date-div');
        taskDiv.appendChild(dateDiv);

        const completedDiv = document.createElement('div'); 
        completedDiv.textContent = taskArray[i].completed; 
        completedDiv.classList.add('completed-div');
        taskDiv.appendChild(completedDiv);
    }

}

export {displayAllTasks};