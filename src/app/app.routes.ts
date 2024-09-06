import { Routes } from '@angular/router';
import { PHomePageComponent } from './p-home-page/p-home-page.component'; 
export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: PHomePageComponent }, 
    { path: '**', redirectTo: '/home' } 
  ];