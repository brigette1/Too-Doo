export class Project {
    constructor(name) {
        this.name = name;
        this.todos = []; 
    }

    addTodo(taskName, priority, description, dueDate) {
        const todo = {
            taskName: taskName,
            priority: priority,
            description: description,
            dueDate: dueDate
        };
        this.todos.push(todo);
    }

    displayTodos() {
        const todoList = document.querySelector('.todo-items');
        todoList.innerHTML = '';
        this.todos.forEach(todo => {
            const listItem = document.createElement('li');
            listItem.textContent = todo.taskName, todo.priority, todo.description, todo.dueDate; 
            todoList.appendChild(listItem);
        })
    }

    newTaskBtnEventListener() {
        const btn = document.querySelector('.new-task');
        btn.addEventListener('click', () => this.showAddTaskPanel())
    };

    showAddTaskPanel() {
        const newTaskBtn = document.querySelector('.new-task');
        const list = document.querySelector('.todo-list');

        newTaskBtn.style.visibility = 'hidden';
        newTaskBtn.textContent = '';

        const displayTitle = document.createElement('div');
        displayTitle.textContent = 'New Task';
        displayTitle.classList.add('new-task');
        list.appendChild(displayTitle);

        const newTaskUI = document.createElement('div');
        newTaskUI.classList.add('new-task-ui');
        list.appendChild(newTaskUI);

        this.createTaskForm();
    }

    createTaskForm() {
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

        submitBtn.addEventListener('click', () => this.submitTaskInfo(), this.displayTodos());


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
    }


    submitTaskInfo() {
        const taskName = document.getElementById('title').value;
        const priority = document.getElementById('priority').value;
        const description = document.getElementById('description').value;
        const dueDate = document.getElementById('date').value;

        this.addTodo(taskName, priority, description, dueDate);

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

}


export class HomePage {
    constructor() {
        this.projects = [];
    } 

    addProject(project) {
        this.projects.push(project);
    }

    displayProjects() {
        const projectList = document.querySelector('.project-list');
        projectList.innerHTML = '';
        this.projects.forEach(project => {
            const listItem = document.createElement('li');
            listItem.classList.add('proj-item');
            listItem.textContent = project.name; 
            listItem.addEventListener('click', () => {
                project.displayTodos();
                project.newTaskBtnEventListener();
            });
            projectList.appendChild(listItem);
        })
    }
}

