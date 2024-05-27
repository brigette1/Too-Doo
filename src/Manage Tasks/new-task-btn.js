import { showAddTaskPanel } from "./show-panel";

const btn = document.querySelector('.new-task');

function newTaskBtnEventListener() {
    btn.addEventListener('click', function() {
        showAddTaskPanel();
    }) 
}

export {newTaskBtnEventListener};