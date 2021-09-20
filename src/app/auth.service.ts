import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private isLoggedIn = false;
    private userName = '';

    login(username: string, password: string): boolean {
        if (username === 'admin' && password === '123456') {
            this.userName = username;
            this.isLoggedIn = true;
        }

        return this.isLoggedIn;
    }

    logout() {
        this.isLoggedIn = false;
        this.userName = 'false';
        return this.isLoggedIn;
    }

    isLogIn() {
        return this.isLoggedIn;
    }

    getUserName() {
        return this.userName;
    }
}