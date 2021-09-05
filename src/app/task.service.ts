import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfig, APP_CONFIG } from './app.config';
import { Task, TaskState } from "./task";

@Injectable({
    providedIn: 'root'
})

export class TaskService {
    private appConfig!: AppConfig;

    constructor(private client: HttpClient, @Inject(APP_CONFIG) config: AppConfig) {
        this.appConfig = config;
    }
    
    getTasks(): Observable<Task[]>{
        return this.client.get<Task[]>(this.appConfig.taskEndpoint);
    }

    filterTasksByState(tasks: Task[], state: TaskState): Task[] {
        return tasks.filter(task => task.state === state);
    }
}