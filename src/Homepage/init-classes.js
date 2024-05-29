export class Project {
    constructor(name) {
        this.name = name;
        this.todos = []; 
        this.submitTaskInfo = this.submitTaskInfo.bind(this);
    }

    setListProjTitle() {
        const projTitle = document.querySelector('.proj-title');
        projTitle.innerHTML = '';
        projTitle.innerHTML = this.name;
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
            const taskInfo = `
                <div><strong>Task Name:</strong> ${todo.taskName}</div>
                <div><strong>Priority:</strong> ${todo.priority}</div>
                <div><strong>Description:</strong> ${todo.description}</div>
                <div><strong>Due Date:</strong> ${todo.dueDate}</div>
            `;
            listItem.innerHTML = taskInfo;
            todoList.appendChild(listItem);
        })
    }

    enableModal() {
        const modal = document.querySelector('.modal');
        const overlay = document.querySelector('.overlay');
        const openTaskFormBtn = document.querySelector('.btn-open');
        const closeTaskFormBtn = document.querySelector('.btn-close');
        const submitBtn = document.querySelector('.submit-btn');

        openTaskFormBtn.style.visibility = 'visible';


        const closeTaskForm = () => {
            modal.classList.add('hidden');
            overlay.classList.add('hidden');
        }

        const openTaskForm = () => {
            modal.classList.remove('hidden');
            overlay.classList.remove('hidden');
        }
        
        const handleSubmit = () => {
            this.submitTaskInfo(); 
            this.displayTodos();
        }

        closeTaskFormBtn.addEventListener('click', closeTaskForm);
        overlay.addEventListener('click', closeTaskForm);
        openTaskFormBtn.addEventListener('click', openTaskForm);
        submitBtn.addEventListener('click', handleSubmit);
    }


    submitTaskInfo() {
        const taskName = document.getElementById('title').value;
        const priority = document.getElementById('priority').checked ? 'High' : 'Low';
        const description = document.getElementById('description').value;
        const dueDate = document.getElementById('date').value;

        this.addTodo(taskName, priority, description, dueDate);

        document.getElementById('title').value = '';
        document.getElementById('priority').checked = false;
        document.getElementById('description').value = '';
        document.getElementById('date').value = '';
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
                project.setListProjTitle();
                project.enableModal();
            });
            projectList.appendChild(listItem);
        })
    }
}

