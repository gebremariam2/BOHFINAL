import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }   from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ApplicationComponent } from './application/application.component';
import { EmployersComponent } from './employers/employers.component';
import  { EmployerInfoComponent } from './employer-info/employer-info.component';



const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'application', component: ApplicationComponent},
  { path: 'employers', component: EmployersComponent},
  { path:  'employer-info', component:EmployerInfoComponent}

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}