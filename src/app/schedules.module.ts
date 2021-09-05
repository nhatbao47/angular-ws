import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SchedulesComponent } from "./schedules.component";

@NgModule({
    imports: [CommonModule],
    declarations: [
        SchedulesComponent
    ],
    exports: [SchedulesComponent]
})

export class SchedulesModule { }