import { submitTaskInfo } from "./submit-task-btn";
import { Project } from "../Homepage/init-classes";

function createTaskForm() {
    const list = document.querySelector('.todo-list');

    const form = document.createElement('form');
    form.classList.add('form');
    list.appendChild(form);

    //title
    const titleLabel = document.createElement('label');
    titleLabel.for = 'title';
    titleLabel.textContent = 'Title:';

    const title = document.createElement('input');
    title.type = 'text';
    title.name = 'title';
    title.setAttribute('id', 'title');
    
    //priority
    const priority = document.createElement('input');
    priority.type = 'checkbox';
    priority.name = 'priority';
    priority.value = 'prioritize';
    priority.setAttribute('id', 'priority');
    
    const priorityLabel = document.createElement('label');
    priorityLabel.for = 'priority';
    priorityLabel.textContent = 'High Priority:';

    
    //description
    const descriptionLabel = document.createElement('div');
    descriptionLabel.textContent = 'Description:';

    const description = document.createElement('textarea');
    description.name = 'description';
    description.setAttribute('id', 'description');

    //due date 
    const dateLabel = document.createElement('label');
    dateLabel.for = 'date';
    dateLabel.textContent = 'Due Date:'

    const date = document.createElement('input');
    date.type = 'date';
    date.name = 'date';
    date.setAttribute('id', 'date');

    //submit
    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.textContent = 'Add Task';
    submitBtn.classList.add('submit-btn');

    submitBtn.addEventListener('click', function(event) {
        event.preventDefault();
        submitTaskInfo(project)
        displayTodos(project);
    });


    //append
    form.appendChild(titleLabel);
    form.appendChild(title);

    form.appendChild(priority);
    form.appendChild(priorityLabel);

    form.appendChild(descriptionLabel);
    form.appendChild(description);

    form.appendChild(dateLabel);
    form.appendChild(date);

    form.appendChild(submitBtn);

    //function after submission -- creating an instance of a class
    // function submit(event) {
 
    // }
}

export {createTaskForm};