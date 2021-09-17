import { Component, Input } from "@angular/core";
import { Task } from "./task.model";

@Component({
    selector: 'task-preview',
    templateUrl: './task-preview.component.html',
    styleUrls: ['./task-preview.component.css']
})

export class TaskPreviewComponent {
    task!: Task;
    visible: boolean = false;

    onHide(): void {
        this.visible = false;
    }

    onPreview(task: Task) {
        this.visible = true;
        this.task = task;
    }
}