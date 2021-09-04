import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task, TaskState } from "./task";

@Injectable({
    providedIn: 'root'
})

export class TaskService {
    items: Task[] = [];

    constructor(
        private client: HttpClient
    ) { }
    
    getTasks(): Observable<Task[]>{
        return this.client.get<Task[]>('/assets/task.json');
    }

    filterTasksByState(tasks: Task[], state: TaskState): Task[] {
        return tasks.filter(task => task.state === state);
    }
}