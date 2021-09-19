import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { ScheduleService } from "./schedule.service";

@Injectable()
export class SchedulesResolverService implements Resolve<any> {
    constructor(private scheduleService: ScheduleService) { }
    
    resolve() {
        return this.scheduleService.getSchedules();
    }
}