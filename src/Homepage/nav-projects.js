const newProjBtn = document.querySelector('.new-proj');
const projects = document.querySelector('.projects');
let idCounter = 0;
let uniqueId;

function createProj() {
    newProjBtn.addEventListener('click', function() {
        getName();
        const inputName = document.querySelector('#' + uniqueId);
        inputName.focus();
    })

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            setName();
        }
    })

    function getName() {
        const inputName = document.createElement('input');
        inputName.type = 'text';
        inputName.placeholder = 'New project name';
        projects.appendChild(inputName);
        inputName.classList.add('input-proj-name');

        uniqueId = 'project' + idCounter;
        inputName.id = uniqueId;
        idCounter++;
    }

    function setName() {
        const inputName = document.querySelector('#' + uniqueId);
        if (inputName) {
            inputName.style.display = 'none';
            const projectName = inputName.value;

            const project = document.createElement('div'); 
            projects.appendChild(project);
            project.classList.add('projectBtn');
            project.textContent = projectName;

            inputName.value = '';
        }

    }
}

export {createProj, uniqueId};
