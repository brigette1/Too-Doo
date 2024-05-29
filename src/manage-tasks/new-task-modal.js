const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const openTaskFormBtn = document.querySelector('.btn-open');
const closeTaskFormBtn = document.querySelector('.btn-close');

const closeTaskForm = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

const openTaskForm = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

function enableModal() {
    closeTaskFormBtn.addEventListener('click', closeTaskForm);
    overlay.addEventListener('click', closeTaskForm);

    openTaskFormBtn.addEventListener('click', openTaskForm);
}