//when project is clicked, starts a new task list

import { displayAllTasks } from "../Manage Lists/list-display";
import { uniqueId } from "./nav-projects";

function seeList() {
    const uniqueProject = document.querySelector('#' + uniqueId);
    uniqueProject.addEventListener('click', function() {
        displayAllTasks();
    })
}

export {seeList};