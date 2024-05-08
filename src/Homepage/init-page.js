import { newTaskBtnEventListener } from "../Manage Tasks/add-task-btn";
import { testTask } from "../Manage Tasks/test-task";
import { initDate } from "./init-date";

function loadHome() {
    initDate(); 
    newTaskBtnEventListener();
    testTask();
    testTask();
}

export {loadHome};
