import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { AppConfig, APP_CONFIG } from "../app.config";
import { Schedule } from "./schedule.model";

@Injectable({
    providedIn: 'root'
})

export class ScheduleService {
    private scheduleEndpoint = '';

    constructor(private client: HttpClient, @Inject(APP_CONFIG) config: AppConfig) {
        this.scheduleEndpoint = config.scheduleEndpoint;
    }

    getSchedules() {
        return this.client.get<Schedule[]>(this.scheduleEndpoint);
    }

    getSchedule(id: number) {
        return this.client.get<Schedule>(this.scheduleEndpoint + id);
    }
}