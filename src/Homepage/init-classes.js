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
            listItem.addEventListener('click', () => this.displayTodos(project));
            projectList.appendChild(listItem);
        })
    }

    displayTodos(project) {
        const todoList = document.querySelector('.todo-items');
        todoList.innerHTML = '';
        project.todos.forEach(todo => {
            const listItem = document.createElement('li');
            listItem.textContent = todo.taskName, todo.priority, todo.description, todo.dueDate; 
            todoList.appendChild(listItem);
        })
    }
}

