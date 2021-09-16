import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { AppConfig, APP_CONFIG } from "./app.config";
import { Schedule } from "./schedule.model";

@Injectable({
    providedIn: 'root'
})

export class ScheduleService {
    private appConfig!: AppConfig;

    constructor(private client: HttpClient, @Inject(APP_CONFIG) config: AppConfig) {
        this.appConfig = config;
    }

    getSchedules() {
        return this.client.get<Schedule[]>(this.appConfig.scheduleEndpoint);
    }
}