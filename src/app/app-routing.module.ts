import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntertainComponent } from './entertain/entertain.component';
import { HealthComponent } from './health/health.component';
import { HomeComponent } from './home/home.component';
import { ScienceComponent } from './science/science.component';
import { SportsComponent } from './sports/sports.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"", redirectTo:"/home", pathMatch:"full"},
  {path:"sports", component:SportsComponent},
  {path:"science", component:ScienceComponent},
  {path:'entertainment',component:EntertainComponent},
  {path:'health',component:HealthComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
