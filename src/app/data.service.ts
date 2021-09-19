import { Injectable } from "@angular/core";
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Schedule } from "./schedules/schedule.model";
import { Task, TaskState } from './dashboard/task.model';
import { User } from "./users/user.model";

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
                title: 'Developer',
                isDeleted: false
            },
            {
                id: 2,
                name: 'Lee',
                title: 'PM',
                isDeleted: false
            },
            {
                id: 3,
                name: 'Tim',
                title: 'QC',
                isDeleted: false
            }
        ];
        const schedules: Schedule[] = [
            {
                id: 1,
                title: "Meeting 1",
                userId: 1,
                creator: this.getUserName(1, users),
                description: "Stand up",
                location: "Osaka",
                date: new Date("2021-09-01"),
                startTime: { hour: 9, minute: 0 },
                endTime: { hour: 11, minute: 30 }
            },
            {
                id: 2,
                title: "Meeting 2",
                userId: 2,
                creator: this.getUserName(2, users),
                description: "Stand up",
                location: "London",
                date: new Date("2021-09-02"),
                startTime: { hour: 9, minute: 0 },
                endTime: { hour: 11, minute: 30 }
            },
            {
                id: 3,
                title: "Meeting 3",
                userId: 3,
                creator: this.getUserName(3, users),
                description: "Stand up",
                location: "New York",
                date: new Date("2021-09-03"),
                startTime: { hour: 9, minute: 0 },
                endTime: { hour: 11, minute: 30 }
            }
        ];
        return {
            tasks: tasks,
            users: users,
            schedules: schedules
        };
    }

    private getUserName(id: number, users: User[]): string {
        let filterUsers = users.filter(user => user.id === id);
        return filterUsers.length > 0 ? filterUsers[0].name : '';
    }
}