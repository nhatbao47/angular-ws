import { Component, OnDestroy, OnInit } from "@angular/core";
import { startWith, filter, takeUntil } from 'rxjs/operators';
import { Subject } from "rxjs";
import { Task, TaskState } from "./task";
import { TaskService } from "./task.service";

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit, OnDestroy {
    newTasks: Task[] = [];
    inprogressTasks: Task[] = [];
    completedTasks: Task[] = [];
    private tasks: Task[] = [];
    private ngUnsubscribe = new Subject();

    constructor(private taskService: TaskService) { }
    
    ngOnInit() {
        this.taskService.getTasks()
            .pipe(
                startWith([]),
                filter(tasks => tasks.length > 0),
                takeUntil(this.ngUnsubscribe)
            )
            .subscribe(tasks => {
                this.tasks = tasks;
                this.newTasks = this.taskService.filterTasksByState(this.tasks, TaskState.New);
                this.inprogressTasks = this.taskService.filterTasksByState(this.tasks, TaskState.Inprogress);
                this.completedTasks = this.taskService.filterTasksByState(this.tasks, TaskState.Done);
            });
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
}