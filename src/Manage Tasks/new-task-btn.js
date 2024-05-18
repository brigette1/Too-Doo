import { showAddTaskPanel } from "./show-panel";

const btn = document.querySelector('.add-tasks');

function newTaskBtnEventListener() {
    btn.addEventListener('click', function() {
        // showAddTaskPanel();
        console.log('hello!')
    }) 
}

export {newTaskBtnEventListener};