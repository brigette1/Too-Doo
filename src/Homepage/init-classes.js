import { showAddTaskPanel } from "../Manage Tasks/show-panel";

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
        btn.addEventListener('click', function() {
            showAddTaskPanel(this);
        })
    };
    
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

