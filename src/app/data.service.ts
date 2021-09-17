import { Injectable } from "@angular/core";
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Schedule } from "./schedule.model";
import { Task, TaskState } from './dashboard/task.model';
import { User } from "./user.model";

@Injectable({
    providedIn: 'root'
})

export class DataService implements InMemoryDbService {
    private maxIds: number[] = [6, 3, 3];

    getMaxId(table: string): number {
        let index: number = 0;
        switch (table) {
            case 'task':
                index = 0;
                break;
            case 'user':
                index = 1;
                break;
            case 'schedule':
                index = 2;
                break;
        }
        this.maxIds[index]++;
        return this.maxIds[index];
    }

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
        const schedules: Schedule[] = [
            {
                id: 1,
                title: "Meeting 1",
                creator: "David",
                description: "Stand up",
                location: "Osaka",
                startDate: new Date("2021-09-01T09:00:00"),
                endDate: new Date("2021-09-01T11:00:00")
            },
            {
                id: 2,
                title: "Meeting 2",
                creator: "Tom",
                description: "Stand up",
                location: "London",
                startDate: new Date("2021-09-02T09:00:00"),
                endDate: new Date("2021-09-02T11:00:00")
            },
            {
                id: 3,
                title: "Meeting 3",
                creator: "Tim Cook",
                description: "Stand up",
                location: "New York",
                startDate: new Date("2021-09-03T09:00:00"),
                endDate: new Date("2021-09-03T11:00:00")
            }
        ];
        return {
            tasks: tasks,
            users: users,
            schedules: schedules
        };
    }
}