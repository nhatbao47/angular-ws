import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SchedulesComponent } from './schedules.component';
import { TaskComposerComponent } from './dashboard/task-composer.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'task/:id', component: TaskComposerComponent},
  { path: 'user', component: UsersComponent },
  { path: 'schedule', component: SchedulesComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }