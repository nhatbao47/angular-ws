import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AppConfig, APP_CONFIG } from "./app.config";
import { User } from "./user";

@Injectable({
    providedIn: 'root'
})

export class UserService {
    private appConfig!: AppConfig;

    constructor(private client: HttpClient, @Inject(APP_CONFIG) config: AppConfig) {
        this.appConfig = config;
    }
    
    getUsers(): Observable<User[]> {
        return this.client.get<User[]>(this.appConfig.userEndpoint);
    }
}