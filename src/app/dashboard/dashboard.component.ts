import { Component, OnInit } from "@angular/core";
import { Task, TaskState } from "./task.model";
import { TaskService } from "./task.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    newTasks: Task[] = [];
    inprogressTasks: Task[] = [];
    completedTasks: Task[] = [];
    private tasks: Task[] = [];

    constructor(private taskService: TaskService, private activatedRoute: ActivatedRoute) {
        this.tasks = this.activatedRoute.snapshot.data['tasks'];
    }

    ngOnInit() {
        this.newTasks = this.taskService.filterTasksByState(this.tasks, TaskState.New);
        this.inprogressTasks = this.taskService.filterTasksByState(this.tasks, TaskState.Inprogress);
        this.completedTasks = this.taskService.filterTasksByState(this.tasks, TaskState.Done);
    }
}