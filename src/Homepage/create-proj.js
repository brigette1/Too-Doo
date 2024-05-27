import { Project } from "./init-classes";

const newProjBtn = document.querySelector('.new-proj');
const projects = document.querySelector('.project-list');

function createProj(homePage) {
    newProjBtn.addEventListener('click', function() {
        const inputName = document.createElement('input');
        inputName.type = 'text';
        inputName.setAttribute('name', 'inputProjectName');
        inputName.setAttribute('id', 'inputProjectName');
        inputName.placeholder = 'New project name';

        const keydownListener = function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
    
                const projName = inputName.value.trim();

                if (projName !== '') {
                    inputName.style.display = 'none';
                    const newProj = new Project(projName);
            
                    homePage.addProject(newProj);
                }
            homePage.displayProjects();
            document.removeEventListener('keydown', keydownListener);
            }
        }
        document.addEventListener('keydown', keydownListener);
        projects.appendChild(inputName);
    })
}


export {createProj};
