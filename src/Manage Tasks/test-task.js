function testTask() {
    const list = document.querySelector('.list-tasks');


    const newTask = document.createElement('div');
    list.appendChild(newTask);
    newTask.classList.add('new-task');

    const title = document.createElement('div');
    title.textContent = 'Daunting Task';
    newTask.appendChild(title);

    const priority = document.createElement('div');
    priority.textContent = 'Priority';
    newTask.appendChild(priority);

    const description = document.createElement('div');
    description.textContent = 'This is a description of my task!';
    newTask.appendChild(description);

    const date = document.createElement('div');
    date.textContent = new Date();
    newTask.appendChild(date);
}

export {testTask};