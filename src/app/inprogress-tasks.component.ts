import { Component, Input } from "@angular/core";
import { Task } from "./task";

@Component({
    selector: 'inprogress-tasks',
    templateUrl: './inprogress-tasks.component.html',
    styleUrls: ['./inprogress-tasks.component.css']
})

export class InprogressTasksComponent {
    @Input() tasks!: Task[];
}