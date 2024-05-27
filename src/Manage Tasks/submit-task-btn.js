
function submitTaskInfo(project) {
    const taskName = document.getElementById('title').value;
    const priority = document.getElementById('priority').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('date').value;

    project.addTodo(taskName, priority, description, dueDate);

    document.getElementById('title').value = '';
    document.getElementById('priority').checked = false;
    document.getElementById('description').value = '';
    document.getElementById('date').value = ';';

    //update ui 
    const display = document.querySelector('.todo-list');
    display.innerHTML = '';
    
    const newTaskDiv = document.createElement('div');
    newTaskDiv.textContent = taskName + '    ' + priority;
    newTaskDiv.classList.add('task-div');
    display.appendChild(newTaskDiv);

    const descriptionDiv = document.createElement('div');
    descriptionDiv.textContent = description; 
    descriptionDiv.classList.add('description-div')
    newTaskDiv.appendChild(descriptionDiv);

    const dateDiv = document.createElement('div');
    dateDiv.textContent = dueDate;
    dateDiv.classList.add('date-div');
    newTaskDiv.appendChild(dateDiv);
}

export {submitTaskInfo};
