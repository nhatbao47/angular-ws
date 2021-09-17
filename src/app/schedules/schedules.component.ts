import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { filter, startWith, takeUntil } from "rxjs/operators";
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

    constructor(private scheduleService: ScheduleService) { }

    ngOnInit() {
        this.scheduleService.getSchedules()
            .pipe(
                startWith([]),
                filter(schedules => schedules.length > 0),
                takeUntil(this.ngUnsubscribe)
            )
            .subscribe(schedules => this.schedules = schedules);
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
}