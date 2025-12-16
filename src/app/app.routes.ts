import { Routes } from '@angular/router';
import { Login } from './component/login/login';
import { Register } from './component/register/register';
import { Search } from './component/search/search';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
    {path: 'login', component: Login,title: 'Login'},
    {path: 'register', component: Register , title: 'Sign Up'},
    {path: 'search', component: Search, title: 'Search Flights', canActivate: [authGuard]},
];
