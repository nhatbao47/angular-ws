import { Injectable } from "@angular/core";
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Task, TaskState } from './task.model';
import { User } from "./user.model";

@Injectable({
    providedIn: 'root'
})

export class DataService implements InMemoryDbService {
    createDb() {
        const tasks: Task[] = [
            {
                id: 1,
                title: 'Task 1',
                description: 'Description 1',
                state: TaskState.New
            },
            {
                id: 2,
                title: 'Task 2',
                description: 'Description 2',
                state: TaskState.New
            },
            {
                id: 3,
                title: 'Task 3',
                description: 'Description 3',
                state: TaskState.Inprogress
            },
            {
                id: 4,
                title: 'Task 4',
                description: 'Description 4',
                state: TaskState.Inprogress
            },
            {
                id: 5,
                title: 'Task 5',
                description: 'Description 5',
                state: TaskState.Done
            },
            {
                id: 6,
                title: 'Task 6',
                description: 'Description 6',
                state: TaskState.Done
            }
        ];
        const users: User[] = [
            {
                id: 1,
                name: 'David',
                title: 'Developer'
            },
            {
                id: 2,
                name: 'Lee',
                title: 'PM'
            },
            {
                id: 3,
                name: 'Tim',
                title: 'QC'
            }
        ];
        return {
            tasks: tasks,
            users: users
        };
    }
}