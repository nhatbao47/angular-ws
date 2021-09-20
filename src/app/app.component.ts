import { Component, DoCheck } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  title = 'angular-ws';
  isLoggedIn = false;
  username = '';

  constructor(private authService: AuthService) { }
  
  ngDoCheck(): void {
    this.isLoggedIn = this.authService.isLogIn();
    this.username = this.authService.getUserName();
  }

  onLogout() {
    this.isLoggedIn = this.authService.logout();
  }
}