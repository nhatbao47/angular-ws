import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    model: UserModel = {
        username: '',
        password: ''
    }

    constructor(private authService: AuthService, private route: Router) { }

    onSubmit() {
        if (this.authService.login(this.model.username, this.model.password)) {
            this.route.navigate(['dashboard']);
        }
    }
}

export interface UserModel {
    username: string,
    password: string;
}