import { Routes } from '@angular/router';
import { Home } from './home/home';
import { User } from './user/user';

export const routes: Routes = [
  {
    path: 'home',
    component: Home
  },
  {
    path: 'user/:id',
    component: User
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

