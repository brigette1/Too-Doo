
import { testTask } from "../Manage Tasks/test-task";
import { initDate } from "./init-date";
import { createProj } from "./create-proj";
import { HomePage } from "./init-classes";

const homePage = new HomePage();

function loadHome() {
    initDate(); 
    // testTask();
    createProj(homePage);
}

export {loadHome};
