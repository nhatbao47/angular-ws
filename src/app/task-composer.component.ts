import { Component, OnDestroy, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
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
    constructor (private taskService: TaskService) { }
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

    ngOnInit() {
        if (this.addNew) {
            this.task = {
                id: 0,
                title: '',
                description: '',
                state: TaskState.New
            };
        }
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    private getProducts() {
        this.taskService.getTasks().subscribe(tasks => console.log(tasks));
      }

    onSubmit() {
        if (this.addNew) {
            this.taskService.createTask(this.task)
                .pipe(takeUntil(this.ngUnsubscribe))
                .subscribe((task: Task) => {
                    console.log(task);
                    this.getProducts();
                });
        } else {

        }
    }

    onReset(taskForm: NgForm) {
        taskForm.resetForm();
    }
}

export interface RadioValue {
    label: string;
    value: TaskState;
}