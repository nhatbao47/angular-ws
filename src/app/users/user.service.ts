import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import { AppConfig, APP_CONFIG } from "../app.config";
import { DataService } from "../data.service";
import { User } from "./user.model";

@Injectable({
    providedIn: 'root'
})

export class UserService {
    private userEndpoint = '';

    constructor(
        private client: HttpClient,
        private dataService: DataService,
        @Inject(APP_CONFIG) config: AppConfig
    ) {
        this.userEndpoint = config.userEndpoint;
    }
    
    getUsers(): Observable<User[]> {
        return this.client.get<User[]>(this.userEndpoint).pipe(
            retry(2),
            catchError((error: HttpErrorResponse) => {
                console.log(error);
                return throwError(error);
            })
        );
    }

    createUser(user: User): Observable<User> {
        user.id = this.dataService.getMaxId('user');
        return this.client.post<User>(this.userEndpoint, user).pipe(
            catchError((error: HttpErrorResponse) => {
                console.log(error);
                return throwError(error);
            })
        );
    }

    editUser(user: User): Observable<any> {
        return this.client.put(this.userEndpoint + user.id, user);
    }

    deleteUser(id: number) {
        return this.client.delete(this.userEndpoint + id);
    }
}