import { Component } from "@angular/core";
import { Task, TaskState } from "./task";

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {
    newTasks: Task[] = [
        new Task(1, 'Task 1', 'Description 1', TaskState.New),
        new Task(2, 'Task 2', 'Description 2', TaskState.New),
        new Task(3, 'Task 3', 'Description 3', TaskState.New)
    ];

    inprogressTasks: Task[] = [
        new Task(1, 'Task 1', 'Description 1', TaskState.Inprogress),
        new Task(2, 'Task 2', 'Description 2', TaskState.Inprogress),
    ];

    completedTasks: Task[] = [
        new Task(1, 'Task 1', 'Description 1', TaskState.Done),
        new Task(2, 'Task 2', 'Description 2', TaskState.Done),
        new Task(3, 'Task 3', 'Description 3', TaskState.Done)
    ];
}