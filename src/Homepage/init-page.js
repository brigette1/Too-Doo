import { newTaskBtnEventListener } from "../Manage Tasks/add-task-btn";
import { testTask } from "../Manage Tasks/test-task";
import { initDate } from "./init-date";
import { createProj } from "./nav-projects";

function loadHome() {
    initDate(); 
    newTaskBtnEventListener();
    testTask();
    createProj();
}

export {loadHome};
