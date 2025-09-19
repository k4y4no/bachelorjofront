import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { OffersComponent } from './pages/offers/offers.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './_guard/auth.guard';
import { roleGuard } from './_guard/role.guard';

export const routes: Routes = [
    {  path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'offers', component: OffersComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { 
        path: 'dash',
        component: DashboardComponent,
        canActivate: [roleGuard] },
    { 
        path: 'profile', 
        component: ProfileComponent,
        canActivate: [authGuard]
     },
];
