import { newTaskBtnEventListener } from "../Manage Tasks/new-task-btn";
import { testTask } from "../Manage Tasks/test-task";
import { initDate } from "./init-date";
import { createProj } from "./create-proj";

function loadHome() {
    initDate(); 
    newTaskBtnEventListener();
    // testTask();
    createProj();
    
}

export {loadHome};
