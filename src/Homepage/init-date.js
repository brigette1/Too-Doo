import { format } from "date-fns";

const header = document.querySelector('.header');

function initDate() {
    const datePanel = document.createElement('div');
    header.appendChild(datePanel);
    datePanel.classList.add('date-panel');

    const dayOfWeek = document.createElement('div');
    dayOfWeek.textContent = (format(new Date(), "'Today is' eeee"));
    datePanel.appendChild(dayOfWeek);

    const date = document.createElement('div');
    date.textContent = (format(new Date(), "PP"));
    datePanel.appendChild(date);
}

export {initDate};