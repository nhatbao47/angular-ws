import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { BackButtonDirective } from "../common/back-button.directive";
import { ScheduleComposerComponent } from "./schedule-composer.component";
import { ScheduleDetailsComponent } from "./schedule-details.component";
import { SchedulesComponent } from "./schedules.component";
import { ShortTimePipe } from "./short-time.pipe";

@NgModule({
    imports: [CommonModule, NgbModule, ReactiveFormsModule, RouterModule],
    declarations: [
        SchedulesComponent,
        ScheduleComposerComponent,
        ScheduleDetailsComponent,
        BackButtonDirective,
        ShortTimePipe
    ],
    exports: [SchedulesComponent]
})

export class SchedulesModule { }