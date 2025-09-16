import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { OffersComponent } from './pages/offers/offers.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
    {  path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'offers', component: OffersComponent },
    { path: 'register', component: RegisterComponent },
];
