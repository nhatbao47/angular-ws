import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CompletedTasksComponent } from "./completed-tasks.component";
import { DashboardResolverService } from "./dashboard-resolver.service";
import { DashboardComponent } from "./dashboard.component";
import { InprogressTasksComponent } from "./inprogress-tasks.component";
import { NewTasksComponent } from "./new-tasks.component";
import { TaskComposerComponent } from "./task-composer.component";
import { TaskPreviewComponent } from "./task-preview.component";

@NgModule({
    imports: [CommonModule, FormsModule, RouterModule],
    declarations: [
        DashboardComponent,
        NewTasksComponent,
        InprogressTasksComponent,
        CompletedTasksComponent,
        TaskPreviewComponent,
        TaskComposerComponent
    ],
    providers: [DashboardResolverService],
    exports: [DashboardComponent]
})

export class DashBoardModule { }