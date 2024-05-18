import { Project, HomePage } from "./init-classes";

const newProjBtn = document.querySelector('.new-proj');
const projects = document.querySelector('.project-list');
const homePage = new HomePage();

function createProj() {
    newProjBtn.addEventListener('click', function() {
        const inputName = document.createElement('input');
        inputName.type = 'text';
        inputName.placeholder = 'New project name';
        inputName.classList.add('input-proj-name');

        const keydownListener = function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
    
                const projName = inputName.value.trim();

                if (projName !== '') {
                    inputName.style.display = 'none';
                    const newProj = new Project(projName);
                
                    homePage.addProject(newProj);
                    // const projItem = document.createElement('li');
                    // projItem.classList.add('proj-item');
                    // projItem.textContent = projName;
                    // projects.appendChild(projItem);

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
