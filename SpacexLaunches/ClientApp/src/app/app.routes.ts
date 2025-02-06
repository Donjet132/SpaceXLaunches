import { Routes } from '@angular/router';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { LatestLaunchComponent } from './Components/latest-launch/latest-launch.component';
import { UpcomingLaunchComponent } from './Components/upcoming-launch/upcoming-launch.component';
import { PastLaunchComponent } from './Components/past-launch/past-launch.component';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/latest', pathMatch: 'full' },
  { path: 'latest', component: LatestLaunchComponent, canActivate: [authGuard] },
  { path: 'upcoming', component: UpcomingLaunchComponent, canActivate: [authGuard] },
  { path: 'past', component: PastLaunchComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: '' }
];
