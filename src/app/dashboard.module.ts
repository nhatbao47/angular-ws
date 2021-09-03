import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CompletedTasksComponent } from "./completed-tasks.component";
import { DashboardComponent } from "./dashboard.component";
import { InprogressTasksComponent } from "./inprogress-tasks.component";
import { NewTasksComponent } from "./new-tasks.component";

@NgModule({
    imports: [CommonModule],
    declarations: [DashboardComponent, NewTasksComponent, InprogressTasksComponent, CompletedTasksComponent],
    exports: [DashboardComponent]
})

export class DashBoardModule { }