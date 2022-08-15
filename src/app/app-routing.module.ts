import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstTaskComponent } from './Components/first-task/first-task.component';
import { SecondTaskComponent } from './Components/second-task/second-task.component';
import { AppRoutes } from './models/AppRoutes';

const routes: Routes = [
  { path: AppRoutes.landing, component: FirstTaskComponent },
  { path: AppRoutes.secondTask, component: SecondTaskComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
