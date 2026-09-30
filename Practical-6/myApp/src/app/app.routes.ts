import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { ContactUs } from './contact-us/contact-us';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'about',
    component: About
  },
  {
    path: 'contact-us',
    component: ContactUs
  }
];
