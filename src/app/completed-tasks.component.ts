import { Component, Input, ViewChild } from "@angular/core";
import { Task } from "./task.model";
import { TaskPreviewComponent } from "./task-preview.component";

@Component({
    selector: 'completed-tasks',
    templateUrl: './completed-tasks.component.html',
    styleUrls: ['./completed-tasks.component.css']
})

export class CompletedTasksComponent {
    @Input() tasks!: Task[];
    @ViewChild(TaskPreviewComponent) previewComponent!: TaskPreviewComponent;

    onPreview(task: Task): void {
        this.previewComponent.onPreview(task);
    }
}