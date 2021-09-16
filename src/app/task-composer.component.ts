import { Component, OnDestroy, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { Task, TaskState } from "./task.model";
import { TaskService } from "./task.service";

@Component({
    selector: 'task-composer',
    templateUrl: './task-composer.component.html',
    styleUrls: ['./task-composer.component.css']
})

export class TaskComposerComponent implements OnInit, OnDestroy {
    addNew: boolean = true;
    task!: Task;
    statusRadios: RadioValue[] = [
        {
            label: 'New',
            value: TaskState.New
        },
        {
            label: 'In Progress',
            value: TaskState.Inprogress
        },
        {
            label: 'Done',
            value: TaskState.Done
        }
    ]

    private ngUnsubscribe = new Subject();

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private taskService: TaskService
    ) { }

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(params => {
            const id = params.get('id') ?? 0;
            if (id == 0) {
                this.task = {
                    id: 0,
                    title: '',
                    description: '',
                    state: TaskState.New
                };
                return;
            }

            this.taskService.getTask(+id)
                .pipe(takeUntil(this.ngUnsubscribe))
                .subscribe(task => {
                    this.task = task;
                    this.addNew = false;
                });
        });
    }

    onSubmit() {
        if (this.addNew) {
            this.taskService.createTask(this.task)
                .pipe(takeUntil(this.ngUnsubscribe))
                .subscribe((task: Task) => {
                    this.onBackToDashboard();
                });
        } else {
            this.taskService.editTask(this.task)
                .pipe(takeUntil(this.ngUnsubscribe))
                .subscribe((task: Task) => {
                    this.onBackToDashboard();
                });
        }
    }

    onReset(taskForm: NgForm) {
        taskForm.resetForm();
    }

    onBackToDashboard() {
        this.router.navigate(['dashboard']);
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
}

export interface RadioValue {
    label: string;
    value: TaskState;
}