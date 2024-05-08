import { Task } from "./task-class";
import { taskArray } from "./task-array";
import { displayAllTasks } from "../Manage Lists/list-display";

function getValues() {
    const form = document.querySelector('.form');
    const submitBtn = document.querySelector('.submit-btn')

    submitBtn.addEventListener('click', function(event) {
        event.preventDefault();

        let title = document.getElementById('title').value; 

        let getPriority = document.getElementById('priority');
        let priority = getPriority.checked ? true : false;

        let description = document.getElementById('description').value;
        let date = document.getElementById('date').value;


        const newTask = new Task (title, priority, description, date);
        // console.log('New Task: ', newTask);

        taskArray.push(newTask);
        console.log(taskArray);
        displayAllTasks();

        form.reset();
    })
}

export {getValues};

