import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { AppConfig, APP_CONFIG } from "../app.config";
import { DataService } from "../data.service";
import { Schedule } from "./schedule.model";

@Injectable({
    providedIn: 'root'
})

export class ScheduleService {
    private scheduleEndpoint = '';

    constructor(
        private client: HttpClient,
        private dataService: DataService,
        @Inject(APP_CONFIG) config: AppConfig
    ) {
        this.scheduleEndpoint = config.scheduleEndpoint;
    }

    getSchedules() {
        return this.client.get<Schedule[]>(this.scheduleEndpoint);
    }

    getSchedule(id: number) {
        return this.client.get<Schedule>(this.scheduleEndpoint + id);
    }

    createSchedule(schedule: Schedule): Observable<Schedule> {
        schedule.id = this.dataService.getMaxId('schedule');
        return this.client.post<Schedule>(this.scheduleEndpoint, schedule).pipe(
            catchError((error: HttpErrorResponse) => {
                console.log(error);
                return throwError(error);
            })
        );
    }

    editSchedule(schedule: Schedule) {
        return this.client.put(this.scheduleEndpoint + schedule.id, schedule);
    }

    deleteSchedule(id: number) {
        return this.client.delete(this.scheduleEndpoint + id);
    }
}