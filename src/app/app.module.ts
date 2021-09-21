import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashBoardModule } from './dashboard/dashboard.module';
import { UsersModule } from './users/users.module';
import { ANGULAR_WS_CONFIG, APP_CONFIG } from './app.config';
import { SchedulesModule } from './schedules/schedules.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './data.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './common/error.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DashBoardModule,
    UsersModule,
    SchedulesModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService),
    NgbModule,
    FormsModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    { provide: APP_CONFIG, useValue: ANGULAR_WS_CONFIG}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
