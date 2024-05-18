
function submitTaskInfo(project) {
    const taskName = document.getElementById('title').value;
    const priority = document.getElementById('priority').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('date').value;


    project.addTodo(taskName, priority, description, dueDate);

    document.getElementById('title').value = '';
    document.getElementById('priority').value = '';
    document.getElementById('description').value = '';
    document.getElementById('date').value = ';';
}

