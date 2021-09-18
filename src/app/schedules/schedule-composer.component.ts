import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Subject } from "rxjs";
import { filter, startWith, takeUntil } from "rxjs/operators";
import { User } from "../users/user.model";
import { UserService } from "../users/user.service";
import { Schedule } from "./schedule.model";
import { ScheduleService } from "./schedule.service";

@Component({
    selector: 'schedule-composer',
    templateUrl: './schedule-composer.component.html',
    styleUrls: ['./schedule-composer.component.css']
})

export class ScheduleComposerComponent implements OnInit, OnDestroy {
    scheduleForm: FormGroup;
    schedule!: Schedule;
    creators!: User[];
    private ngUnsubscribe = new Subject();

    constructor(
        private formBuilder: FormBuilder,
        private userService: UserService,
        private scheduleService: ScheduleService,
        private activatedRoute: ActivatedRoute,
        private route: Router
    ) {
        this.scheduleForm = this.formBuilder.group({
            title: ['', [Validators.required]],
            userId: ['', [Validators.required]],
            description: ['', [Validators.required]],
            location: ['', [Validators.required]],
            startDate: [''],
            endDate: ['']
        });
    }

    get form() {
        return this.scheduleForm.controls;
    }

    ngOnInit() {
        this.userService.getUsers()
            .pipe(
                startWith([]),
                filter(users => users.length > 0),
                takeUntil(this.ngUnsubscribe)
            )
            .subscribe(users => this.creators = users);
        
        this.activatedRoute.paramMap.subscribe(param => {
            let id = param.get('id') ?? 0;

            if (!Number(id)) {
                this.backToSchedules();
            }

            if (id === 0) {
                return;
            }

            this.scheduleService.getSchedule(+id)
                .pipe(takeUntil(this.ngUnsubscribe))
                .subscribe(schedule => {
                    this.schedule = schedule;
                    console.log(this.schedule);
                });
        });
    }

    onSubmit() {

    }

    onCancel() {
        this.backToSchedules();
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    private backToSchedules() {
        this.route.navigate(['schedules']);
    }
}