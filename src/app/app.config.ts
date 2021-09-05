import { InjectionToken } from "@angular/core";

export interface AppConfig {
    taskEndpoint: string;
    userEndpoint: string;
    scheduleEndpoint: string;
}

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');
export const ANGULAR_WS_CONFIG: AppConfig = {
    taskEndpoint: '/assets/task.json',
    userEndpoint: '/assets/user.json',
    scheduleEndpoint: '/assets/schedule.json'
}