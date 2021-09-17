import { Component, Input } from "@angular/core";
import { Task } from "./task.model";

@Component({
    selector: 'new-tasks',
    templateUrl: './new-tasks.component.html',
    styleUrls: ['./new-tasks.component.css']
})

export class NewTasksComponent {
    @Input() tasks!: Task[];
}