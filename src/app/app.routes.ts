import { Routes } from '@angular/router';
import { Login } from './component/login/login';
import { Register } from './component/register/register';
import { Search } from './component/search/search';
import { BookingComponent } from './component/booking-component/booking-component';
import { TicketsComponent } from './component/tickets-component/tickets-component';
import { ProfileComponent } from './component/profile-component/profile-component';

export const routes: Routes = [
    {path: 'login', component: Login,title: 'Login'},
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'register', component: Register , title: 'Sign Up'},
    {path: 'search', component: Search, title: 'Search Flights'},
    {path: 'booking', component: BookingComponent, title: 'Book Flight'},
    {path: 'tickets',component: TicketsComponent, title: 'Your tickets'},
    {path: 'profile', component: ProfileComponent, title: 'Profile'}
];
