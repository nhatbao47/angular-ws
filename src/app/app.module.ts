import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashBoardModule } from './dashboard.module';
import { UsersModule } from './users.module';
import { ANGULAR_WS_CONFIG, APP_CONFIG } from './app.config';
import { SchedulesModule } from './schedules.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DashBoardModule,
    UsersModule,
    SchedulesModule
  ],
  providers: [
    { provide: APP_CONFIG, useValue: ANGULAR_WS_CONFIG}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
