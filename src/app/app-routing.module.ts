import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SchedulesComponent } from './schedules/schedules.component';
import { TaskComposerComponent } from './dashboard/task-composer.component';
import { UsersComponent } from './users/users.component';
import { ScheduleComposerComponent } from './schedules/schedule-composer.component';
import { ScheduleDetailsComponent } from './schedules/schedule-details.component';
import { ErrorComponent } from './common/error.component';
import { SchedulesResolverService } from './schedules/schedules-resolver.service';
import { DashboardResolverService } from './dashboard/dashboard-resolver.service';
import { UsersResolverService } from './users/users-resolver.service';
import { AuthGuardService } from './auth-guard.service';
import { LoginComponent } from './login.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    resolve: { tasks: DashboardResolverService }
  },
  {
    path: 'task/:id',
    component: TaskComposerComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'users',
    component: UsersComponent,
    resolve: { users: UsersResolverService }
  },
  {
    path: 'schedules',
    component: SchedulesComponent,
    resolve: { schedules: SchedulesResolverService }
  },
  {
    path: 'schedule/:id',
    component: ScheduleComposerComponent,
    canActivate: [AuthGuardService]
  },
  { path: 'schedule-detail/:id', component: ScheduleDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }