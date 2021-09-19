import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { filter, startWith, takeUntil } from "rxjs/operators";
import { ConfirmationDialogService } from "../dialog/confirmation-dialog.service";
import { Schedule } from "./schedule.model";
import { ScheduleService } from "./schedule.service";

@Component({
    selector: 'schedules',
    templateUrl: './schedules.component.html',
    styleUrls: ['/schedules.component.css']
})

export class SchedulesComponent implements OnInit, OnDestroy {
    schedules: Schedule[] = [];
    private ngUnsubscribe = new Subject();

    constructor(
        private scheduleService: ScheduleService,
        private dialogService: ConfirmationDialogService,
        private route: Router
    ) { }

    ngOnInit() {
        this.scheduleService.getSchedules()
            .pipe(
                startWith([]),
                filter(schedules => schedules.length > 0),
                takeUntil(this.ngUnsubscribe)
            )
            .subscribe(schedules => this.schedules = schedules);
    }

    onAddNewSchedule() {
        this.route.navigate(['/schedule/0']);
    }

    onDelete(selectedSchedule: Schedule) {
        this.dialogService.confirm('Confirmation', `Are you sure to delete '${selectedSchedule.title}' ?`)
            .then(confirmed => {
                if (confirmed) {
                    const id = selectedSchedule.id;
                    this.scheduleService.deleteSchedule(id)
                        .pipe(takeUntil(this.ngUnsubscribe))
                        .subscribe(() => {
                            this.schedules = this.schedules.filter((schedule) => schedule.id !== id);
                        });
                }
            });
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
}