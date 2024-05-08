
export class Task {
    constructor(title, priority, description, date) {
        this.title = title;

        this.priority = priority;
        this.description = description;
        this.date = date; 

        this.completed = false; 
    }

    markCompleted() {
        this.completed = true;
    }
}