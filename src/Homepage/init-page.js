
import { testTask } from "../manage-tasks/test-task";
import { initDate } from "./init-date";
import { createProj } from "./create-proj";
import { HomePage } from "./init-classes";
import { enableModal } from "../manage-tasks/new-task-modal";

const homePage = new HomePage();
const openTaskFormBtn = document.querySelector('.btn-open');

function loadHome() {
    initDate(); 
    // testTask();
    createProj(homePage);
    openTaskFormBtn.style.visibility = 'hidden';
}

export {loadHome};
