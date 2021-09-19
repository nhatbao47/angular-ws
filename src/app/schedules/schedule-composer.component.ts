import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { NgbDate, NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";
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
    model!: NgbDateStruct;
    private ngUnsubscribe = new Subject();

    constructor(
        private formBuilder: FormBuilder,
        private userService: UserService,
        private scheduleService: ScheduleService,
        private activatedRoute: ActivatedRoute,
        private route: Router
    ) {
        this.scheduleForm = this.formBuilder.group({
            id: [''],
            title: ['', [Validators.required]],
            userId: ['', [Validators.required]],
            creator: [''],
            description: ['', [Validators.required]],
            location: ['', [Validators.required]],
            date: ['', [Validators.required]],
            startTime: ['', Validators.required],
            endTime: ['', Validators.required]
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
                    this.scheduleForm.setValue(this.schedule);
                    this.scheduleForm.controls.date.setValue(this.convertToNgbDate(this.schedule.date));
                });

        });
    }

    onSubmit() {
        const model = this.getFormData();
        const action = model.id > 0 ? this.scheduleService.editSchedule(model) : this.scheduleService.createSchedule(model);
        action.pipe(takeUntil(this.ngUnsubscribe)).subscribe(() => this.backToSchedules());
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    private backToSchedules() {
        this.route.navigate(['schedules']);
    }

    private convertToNgbDate(date: Date): NgbDate {
        date = new Date(date);
        return new NgbDate(date.getFullYear(), date.getMonth() + 1, date.getDate());
    }

    private getFormData(): Schedule {
        const selectedDate = this.scheduleForm.value.date;
        let model = this.scheduleForm.value as Schedule;
        model.userId = +model.userId;
        model.creator = this.userService.getUserName(model.userId, this.creators);
        model.date = new Date(selectedDate.year, selectedDate.month, selectedDate.day);
        return model;
    }
}