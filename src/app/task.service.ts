import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AppConfig, APP_CONFIG } from './app.config';
import { Task, TaskState } from "./task.model";

@Injectable({
    providedIn: 'root'
})

export class TaskService {
    private taskEndpoint: string = '';

    constructor(private client: HttpClient, @Inject(APP_CONFIG) config: AppConfig) {
        this.taskEndpoint = config.taskEndpoint;
    }
    
    getTasks(): Observable<Task[]>{
        return this.client.get<Task[]>(this.taskEndpoint).pipe(
            retry(2),
            catchError((error: HttpErrorResponse) => {
                console.log(error);
                return throwError(error);
            })
        );
    }

    filterTasksByState(tasks: Task[], state: TaskState): Task[] {
        return tasks.filter(task => task.state === state);
    }

    createTask(task: Task): Observable<Task> {
        task.id = 0;
        return this.client.post<Task>(this.taskEndpoint, task).pipe(
            catchError((error: HttpErrorResponse) => {
                console.log(error);
                return throwError(error);
            })
        );
    }

    editTask(task: Task): Observable<any> {
        return this.client.put(this.taskEndpoint + task.id, task);
    }

    deleteTask(id: number): Observable<any> {
        return this.client.delete(this.taskEndpoint + id);
    }
}