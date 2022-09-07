import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SvcComponent } from './svc/svc.component';
import { CarsComponent } from './cars/cars.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FormsModule } from '@angular/forms';
import { TeamComponent } from './team/team.component';



@NgModule({
  declarations: [
    AppComponent,
    SvcComponent,
    CarsComponent,
    ContactUsComponent,
    TeamComponent,


    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
