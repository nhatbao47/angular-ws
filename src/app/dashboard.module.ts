import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CompletedTasksComponent } from "./completed-tasks.component";
import { DashboardComponent } from "./dashboard.component";
import { InprogressTasksComponent } from "./inprogress-tasks.component";
import { NewTasksComponent } from "./new-tasks.component";
import { TaskComposerComponent } from "./task-composer.component";
import { TaskPreviewComponent } from "./task-preview.component";

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [
        DashboardComponent,
        NewTasksComponent,
        InprogressTasksComponent,
        CompletedTasksComponent,
        TaskPreviewComponent,
        TaskComposerComponent
    ],
    exports: [DashboardComponent]
})

export class DashBoardModule { }