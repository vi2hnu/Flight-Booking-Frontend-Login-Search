import { Routes } from '@angular/router';
import { Login } from './component/login/login';
import { Register } from './component/register/register';
import { Search } from './component/search/search';
import { BookingComponent } from './component/booking-component/booking-component';
import { TicketsComponent } from './component/tickets-component/tickets-component';
import { ProfileComponent } from './component/profile-component/profile-component';
import { AdminFlightComponent } from './component/admin-flight-component/admin-flight-component';
import { authGuardGuard } from './guard/auth-guard-guard';

export const routes: Routes = [
    {path: 'login', component: Login,title: 'Login'},
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'register', component: Register , title: 'Sign Up'},
    {path: 'search', component: Search, title: 'Search Flights'},
    {path: 'booking', component: BookingComponent, title: 'Book Flight'},
    {path: 'tickets',component: TicketsComponent, title: 'Your tickets'},
    {path: 'profile', component: ProfileComponent, title: 'Profile'},
    {path: 'admin/add/flight', component: AdminFlightComponent, canActivate: [authGuardGuard], title: 'Add Flight Schedule'},
];
