import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SchedulesComponent } from './schedules/schedules.component';
import { TaskComposerComponent } from './dashboard/task-composer.component';
import { UsersComponent } from './users/users.component';
import { ScheduleComposerComponent } from './schedules/schedule-composer.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'task/:id', component: TaskComposerComponent},
  { path: 'user', component: UsersComponent },
  { path: 'schedules', component: SchedulesComponent },
  { path: 'schedule/:id', component: ScheduleComposerComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }