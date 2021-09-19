import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subject } from "rxjs";
import { filter, startWith, takeUntil } from "rxjs/operators";
import { ConfirmationDialogService } from "../common/confirmation-dialog.service";
import { Schedule } from "./schedule.model";
import { ScheduleService } from "./schedule.service";

@Component({
    selector: 'schedules',
    templateUrl: './schedules.component.html',
    styleUrls: ['/schedules.component.css']
})

export class SchedulesComponent implements OnInit, OnDestroy {
    schedules!: Schedule[];
    userFilter = false;
    private originalSchedules!: Schedule[];
    private ngUnsubscribe = new Subject();

    constructor(
        private scheduleService: ScheduleService,
        private dialogService: ConfirmationDialogService,
        private activatedRoute: ActivatedRoute,
        private route: Router
    ) { }

    ngOnInit() {
        this.scheduleService.getSchedules()
            .pipe(
                startWith([]),
                filter(schedules => schedules.length > 0),
                takeUntil(this.ngUnsubscribe)
            )
            .subscribe(schedules => {
                this.originalSchedules = schedules;
                this.activatedRoute.queryParamMap.subscribe(params => {
                    let userId = +(params.get('userId') ?? 0);
                    if (userId > 0) {
                        this.schedules = this.originalSchedules.filter(schedule => schedule.userId === userId);
                        this.userFilter = true;
                    } else {
                        this.schedules = this.originalSchedules;
                    }
                });
            });
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

    onClearFilter() {
        this.userFilter = false;
        this.schedules = this.originalSchedules;
        this.route.navigate(['/schedules']);
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
}