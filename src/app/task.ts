export enum TaskState {
    New = 1,
    Inprogress,
    Done
}

export class Task {
    id: number;
    title: string;
    description: string;
    state: TaskState;

    constructor(id: number, title: string, description: string, state: TaskState) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.state = state;
    }
}