import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { Schedule } from "./schedule.model";
import { ScheduleService } from "./schedule.service";

@Component({
    selector: 'schedule-details',
    templateUrl: './schedule-details.component.html',
    styleUrls: ['./schedule-details.component.css']
})

export class ScheduleDetailsComponent implements OnInit, OnDestroy {
    schedule!: Schedule;
    private ngUnsubscribe = new Subject();

    constructor(
        private scheduleService: ScheduleService,
        private activatedRoute: ActivatedRoute,
        private route: Router
    ) { }

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(param => {
            let id = param.get('id') ?? 0;

            if (isNaN(+id)) {
                this.backToSchedules();
            }

            id = +id;
            if (id === 0) {
                return;
            }

            this.scheduleService.getSchedule(+id)
                .pipe(takeUntil(this.ngUnsubscribe))
                .subscribe(schedule => {
                    if (schedule === null) this.backToSchedules();
                    this.schedule = schedule;
                });

        });
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    private backToSchedules() {
        this.route.navigate(['schedules']);
    }
}