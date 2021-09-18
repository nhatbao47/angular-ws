import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ScheduleComposerComponent } from "./schedule-composer.component";
import { SchedulesComponent } from "./schedules.component";

@NgModule({
    imports: [CommonModule, NgbModule, ReactiveFormsModule, RouterModule],
    declarations: [
        SchedulesComponent,
        ScheduleComposerComponent
    ],
    exports: [SchedulesComponent]
})

export class SchedulesModule { }