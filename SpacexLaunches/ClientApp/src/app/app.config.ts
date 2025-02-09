import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { routes } from './app.routes';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { LatestLaunchComponent } from './Components/latest-launch/latest-launch.component';
import { UpcomingLaunchComponent } from './Components/upcoming-launch/upcoming-launch.component';
import { PastLaunchComponent } from './Components/past-launch/past-launch.component';

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    LatestLaunchComponent,
    UpcomingLaunchComponent,
    PastLaunchComponent,
    NavbarComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    CommonModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent]
})
export class AppConfigModule { }
