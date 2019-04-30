import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule }     from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { HomeComponent } from './home/home.component';
import { ApplicantsComponent } from './applicants/applicants.component';
import { ApplicationComponent } from './application/application.component';
import { EmployersComponent } from './employers/employers.component';
import { EmployerInfoComponent } from './employer-info/employer-info.component';


const config = { apiKey: "AIzaSyAOivwmNprZq9amFjJUPAaS3L4Vrd0XJIs",
authDomain: "bohv1-7446b.firebaseapp.com",
databaseURL: "https://bohv1-7446b.firebaseio.com",
projectId: "bohv1-7446b",
storageBucket: "bohv1-7446b.appspot.com",
messagingSenderId: "1008832006553"
}

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HomeComponent,
    ApplicantsComponent,
    ApplicationComponent,
    EmployersComponent,
    EmployerInfoComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes),
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }
